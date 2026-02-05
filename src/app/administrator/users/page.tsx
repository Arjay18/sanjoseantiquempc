"use client";
import { useEffect, useState } from "react";

type User = {
  id: string;
  username: string;
  name?: string;
  email?: string;
  branch: string;
  role: string;
};

export default function AdminUserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ username: "", password: "", name: "", email: "", branch: "", role: "branch" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("/api/admin/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError("Could not load users.");
      }
      setLoading(false);
    }
    fetchUsers();
  }, [message]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    const res = await fetch("/api/admin/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setMessage("User added.");
      setForm({ username: "", password: "", name: "", email: "", branch: "", role: "branch" });
    } else {
      setMessage("Add user failed.");
    }
  };

  const handleDelete = async (id: string) => {
    setMessage("");
    const res = await fetch(`/api/admin/users?id=${id}`, { method: "DELETE" });
    if (res.ok) setMessage("User deleted.");
    else setMessage("Delete failed.");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Admin User Management</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {message && <p className="text-blue-700 mb-2">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-2 mb-6">
        <div className="flex gap-2">
          <input name="username" value={form.username} onChange={handleChange} placeholder="Username" className="border p-2 rounded w-32" required />
          <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" className="border p-2 rounded w-32" required />
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-2 rounded w-32" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded w-32" />
          <input name="branch" value={form.branch} onChange={handleChange} placeholder="Branch" className="border p-2 rounded w-32" />
          <select name="role" value={form.role} onChange={handleChange} className="border p-2 rounded w-28">
            <option value="branch">Branch</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded">Add</button>
        </div>
      </form>
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Username</th>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Branch</th>
            <th className="p-2">Role</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-2">{user.username}</td>
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.branch}</td>
              <td className="p-2">{user.role}</td>
              <td className="p-2">
                <button onClick={() => handleDelete(user.id)} className="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
