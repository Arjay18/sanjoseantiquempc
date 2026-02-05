"use client";
import { useEffect, useState } from "react";

type Application = {
  id: string;
  createdAt: string;
  name: string;
  loanType: string;
  loanAmount: number;
  status: string;
};

export default function BranchReportsPage() {
  const [applications, setApplications] = useState<Application[]>([]);
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

  const handlePayment = async (e: React.FormEvent<HTMLFormElement>) => {
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
              ))}
          <tbody>
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
              {applications.map((app: Application) => (
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
