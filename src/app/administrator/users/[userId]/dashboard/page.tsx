"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

// Next.js 15 dynamic route type fix: use async function and correct PageProps
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface PageProps {
	params: { userId: string };
}

export default function Page(props: PageProps) {
	const { params } = props;
	const { data: session, status } = useSession();
	const router = useRouter();
	const [user, setUser] = useState<any>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		if (status === "loading") return;
		if (!session || session.user.role !== "admin") {
			router.push("/administrator/login");
			return;
		}
		const fetchUser = async () => {
			setLoading(true);
			setError("");
			try {
				const res = await fetch(`/api/admin/users?id=${params.userId}`);
				if (!res.ok) throw new Error("Failed to fetch user");
				const data = await res.json();
				setUser(data);
			} catch (err) {
				setError("Could not load user dashboard.");
			}
			setLoading(false);
		};
		fetchUser();
	}, [session, status, params.userId, router]);

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
				<p><span className="font-semibold">Username:</span> {user.username}</p>
				<p><span className="font-semibold">Email:</span> {user.email}</p>
				<p><span className="font-semibold">Branch:</span> {user.branch}</p>
				<p><span className="font-semibold">Role:</span> {user.role}</p>
			</div>
			{/* You can add more user-specific dashboard info here, such as loan status, applications, etc. */}
			<div className="mt-6">
				<p className="text-gray-600">This is a read-only view of the user's dashboard as seen by the administrator.</p>
			</div>
		</div>
	);
}