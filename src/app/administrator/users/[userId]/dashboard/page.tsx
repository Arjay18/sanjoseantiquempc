import type { PageProps } from "next";
import dynamic from "next/dynamic";

const UserDashboardClient = dynamic(() => import("./UserDashboardClient"), { ssr: false });

export default function Page({ params }: PageProps) {
	return <UserDashboardClient userId={params.userId} />;
}