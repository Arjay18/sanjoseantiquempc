"use client";
import { useEffect, useState } from "react";

type Application = {
  id: string;
  createdAt: string;
  loanType: string;
  loanAmount: number;
  status: string;
};

  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchApplications() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("/api/loan-applications/user");
        if (!res.ok) throw new Error("Failed to fetch applications");
        const data = await res.json();
        setApplications(data);
      } catch (err) {
        setError("Could not load applications.");
      }
      setLoading(false);
    }
    fetchApplications();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">My Loan Applications</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {!loading && !error && applications.length === 0 && <p>No applications found.</p>}
      {!loading && !error && applications.length > 0 && (
        <table className="w-full border mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Date</th>
              <th className="p-2">Loan Type</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
              <tr key={app.id} className="border-t">
                <td className="p-2">{new Date(app.createdAt).toLocaleDateString()}</td>
                <td className="p-2">{app.loanType}</td>
                <td className="p-2">₱{app.loanAmount?.toLocaleString()}</td>
                <td className="p-2 font-semibold capitalize">
                  {app.status}
                </td>
              </tr>
            ))}
            {applications.map((app: Application) => (
              <tr key={app.id} className="border-t">
                <td className="p-2">{new Date(app.createdAt).toLocaleDateString()}</td>
                <td className="p-2">{app.loanType}</td>
                <td className="p-2">{app.loanAmount?.toLocaleString()}</td>
                <td className="p-2 font-semibold capitalize">
                  {app.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
