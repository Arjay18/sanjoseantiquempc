import UserDashboardClient from "./UserDashboardClient";

export default function Page({ params }: { params: { userId: string } }) {
	return <UserDashboardClient userId={params.userId} />;
}