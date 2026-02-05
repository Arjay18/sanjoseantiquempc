"use client";
import { useEffect, useState } from "react";

export default function BranchReportsPage() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [paymentMessage, setPaymentMessage] = useState("");
  const [payment, setPayment] = useState({ id: "", amount: "" });

  useEffect(() => {
    async function fetchApplications() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("/api/loan-applications/branch");
        if (!res.ok) throw new Error("Failed to fetch applications");
        const data = await res.json();
        setApplications(data);
      } catch (err) {
        setError("Could not load applications.");
      }
      setLoading(false);
    }
    fetchApplications();
  }, [paymentMessage]);

  const handlePayment = async (e) => {
    e.preventDefault();
    setPaymentMessage("");
    if (!payment.id || !payment.amount) return;
    const res = await fetch(`/api/loan-applications/payment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: payment.id, amount: payment.amount }),
    });
    if (res.ok) {
      setPaymentMessage("Payment posted.");
      setPayment({ id: "", amount: "" });
    } else {
      setPaymentMessage("Payment failed.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Branch Reports & Payment Posting</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {paymentMessage && <p className="text-blue-700 mb-2">{paymentMessage}</p>}
      {!loading && !error && applications.length === 0 && <p>No applications found.</p>}
      {!loading && !error && applications.length > 0 && (
        <table className="w-full border mt-4 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Date</th>
              <th className="p-2">Name</th>
              <th className="p-2">Loan Type</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Status</th>
              <th className="p-2">Payment</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="border-t">
                <td className="p-2">{new Date(app.createdAt).toLocaleDateString()}</td>
                <td className="p-2">{app.name}</td>
                <td className="p-2">{app.loanType}</td>
                <td className="p-2">₱{app.loanAmount?.toLocaleString()}</td>
                <td className="p-2 font-semibold capitalize">{app.status}</td>
                <td className="p-2">
                  <form onSubmit={handlePayment} className="flex gap-2 items-center">
                    <input type="hidden" value={app.id} onChange={() => {}} />
                    <input
                      type="number"
                      min="1"
                      placeholder="Amount"
                      className="border p-1 rounded w-24"
                      value={payment.id === app.id ? payment.amount : ""}
                      onChange={e => setPayment({ id: app.id, amount: e.target.value })}
                    />
                    <button type="submit" className="bg-blue-600 text-white px-2 py-1 rounded">Post</button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
