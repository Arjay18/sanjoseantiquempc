import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guimaras Branch Dashboard | SJMPC",
  description: "Branch dashboard for San Jose Multi-Purpose Cooperative",
  other: {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
  },
};

export default async function GuimarasBranchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  // Server-side authentication check
  if (!session || session.user?.role !== 'branch' || (session.user as any)?.branch !== 'guimaras') {
    redirect('/branch/guimaras/login');
  }

  return <>{children}</>;
}
