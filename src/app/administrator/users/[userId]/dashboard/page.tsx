import UserDashboardClient from "./UserDashboardClient";

type PageProps = {
  params: { userId: string };
};

export default async function Page({ params }: PageProps) {
  return <UserDashboardClient userId={params.userId} />;
}


