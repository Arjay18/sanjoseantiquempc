import UserDashboardClient from "./UserDashboardClient";

export default async function Page({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const resolvedParams = await params;
  return <UserDashboardClient userId={resolvedParams.userId} />;
}



