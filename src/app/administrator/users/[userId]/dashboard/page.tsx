import UserDashboardClient from "./UserDashboardClient";

export default async function Page({ params: routeParams }: { params: { userId: string } }) {
	return <UserDashboardClient userId={routeParams.userId} />;
}