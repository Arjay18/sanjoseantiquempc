"use client";
import { useEffect, useState } from "react";

export default function BranchReviewDashboard() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionMessage, setActionMessage] = useState("");

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
  }, [actionMessage]);

  const handleAction = async (id, status) => {
    setActionMessage("");
    const res = await fetch(`/api/loan-applications/branch`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    if (res.ok) {
      setActionMessage(`Application ${status}.`);
    } else {
      setActionMessage("Action failed.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Branch Loan Applications</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {actionMessage && <p className="text-blue-700 mb-2">{actionMessage}</p>}
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
              <th className="p-2">Actions</th>
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
                  {app.status === "pending" && (
                    <>
                      <button onClick={() => handleAction(app.id, "approved")} className="bg-green-600 text-white px-2 py-1 rounded mr-2">Approve</button>
                      <button onClick={() => handleAction(app.id, "rejected")} className="bg-red-600 text-white px-2 py-1 rounded">Reject</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
