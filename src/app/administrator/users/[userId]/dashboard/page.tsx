import UserDashboardClient from "./UserDashboardClient";

export default async function Page({ params }: { params: { userId: string } }) {
	return <UserDashboardClient userId={params.userId} />;
}