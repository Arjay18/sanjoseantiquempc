"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface UserDashboardClientProps {
  userId: string;
}

export default function UserDashboardClient({ userId }: UserDashboardClientProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loanApps, setLoanApps] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    if (status === "loading") return;
    if (!session || session.user.role !== "administrator") {
      router.push("/administrator/login");
      return;
    }
    const fetchUserAndLoans = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`/api/admin/users?id=${userId}`);
        if (!res.ok) throw new Error("Failed to fetch user");
        const userData = await res.json();
        setUser(userData);
        // Fetch loan applications for this user
        const loanRes = await fetch(`/api/loan-applications/user?userId=${userId}`);
        let loanData: any[] = [];
        if (loanRes.ok) loanData = await loanRes.json();
        setLoanApps(loanData);
        // Show form only if no pending application
        setFormVisible(!loanData.some(app => app.status === "pending"));
      } catch (err) {
        setError("Could not load user dashboard.");
      }
      setLoading(false);
    };
    fetchUserAndLoans();
  }, [session, status, userId, router, formMessage]);

  // Handler for loan application submission (simplified)
  const handleLoanApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormMessage("");
    // ...collect form data here (for demo, just send userId and dummy data)
    const res = await fetch("/api/loan-applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData: { name: user.name, pbNo: user.passbookNo, contactNo: "", address: "", loanType: "Personal", loanAmount: 10000, term: 12, purpose: "Demo", idType: "ID", branch: "sanjose" } })
    });
    if (res.ok) {
      setFormMessage("Loan application submitted!");
      setFormVisible(false);
    } else {
      const data = await res.json();
      setFormMessage(data.error || "Failed to submit application.");
    }
  };

  if (status === "loading" || loading) {
    return <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">Loading...</div>;
  }
  if (error) {
    return <div className="max-w-2xl mx-auto mt-10 p-6 bg-red-50 border border-red-200 text-red-600 rounded shadow">{error}</div>;
  }
  if (!user) {
    return null;
  }
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">User Dashboard (Admin View)</h2>
      <div className="mb-4">
        <p><span className="font-semibold">Name:</span> {user.name}</p>
        <p><span className="font-semibold">Email:</span> {user.email}</p>
        <p><span className="font-semibold">Role:</span> {user.role}</p>
        <p><span className="font-semibold">Passbook No:</span> {user.passbookNo}</p>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Loan Applications</h3>
        {loanApps.length === 0 ? (
          <p>No loan applications found.</p>
        ) : (
          <ul className="list-disc pl-5">
            {loanApps.map(app => (
              <li key={app.id} className="mb-1">
                <span className="font-semibold">{app.loanType}</span> - {app.status} (₱{app.loanAmount})
              </li>
            ))}
          </ul>
        )}
      </div>
      {formVisible ? (
        <form onSubmit={handleLoanApply} className="border p-4 rounded bg-gray-50">
          <h4 className="font-semibold mb-2">Apply for a Loan</h4>
          {/* Add real form fields here as needed */}
          <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded">Submit Loan Application</button>
        </form>
      ) : (
        <div className="text-yellow-700 bg-yellow-50 border border-yellow-200 rounded p-3">
          {loanApps.some(app => app.status === "pending")
            ? "User has a pending loan application. Cannot apply for another until reviewed."
            : formMessage}
        </div>
      )}
      {formMessage && !formVisible && (
        <div className="mt-2 text-green-700">{formMessage}</div>
      )}
    </div>
  );
}
