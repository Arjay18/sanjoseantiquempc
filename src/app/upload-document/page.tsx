"use client";
import { useState } from "react";

export default function DocumentUploadPage() {
  const [pbNo, setPbNo] = useState("");
  const [branch, setBranch] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      if (!file || !pbNo || !branch || !type) {
        setMessage("All fields are required.");
        setLoading(false);
        return;
      }
      const reader = new FileReader();
      reader.onload = async () => {
        const base64 = reader.result as string;
        const res = await fetch("/api/loan-applications/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pbNo, branch, type, fileName: file.name, mimeType: file.type, data: base64 }),
        });
        if (res.ok) {
          setMessage("Document uploaded successfully.");
        } else {
          setMessage("Upload failed.");
        }
        setLoading(false);
      };
      reader.readAsDataURL(file);
    } catch {
      setMessage("Upload failed.");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Upload Loan Document</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input value={pbNo} onChange={e => setPbNo(e.target.value)} placeholder="Passbook No." className="w-full border p-2 rounded" required />
        <input value={branch} onChange={e => setBranch(e.target.value)} placeholder="Branch" className="w-full border p-2 rounded" required />
        <select value={type} onChange={e => setType(e.target.value)} className="w-full border p-2 rounded" required>
          <option value="">Select Document Type</option>
          <option value="validIDsAndSignatures">Valid IDs & Signatures</option>
          <option value="depositSlipOrEwallet">Deposit Slip/E-wallet</option>
          <option value="memberWithIDAndSlip">Member with ID & Slip</option>
        </select>
        <input type="file" onChange={e => setFile(e.target.files?.[0] || null)} className="w-full" required />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded" disabled={loading}>{loading ? "Uploading..." : "Upload"}</button>
      </form>
      {message && <p className="mt-2 text-center text-blue-700">{message}</p>}
    </div>
  );
}
