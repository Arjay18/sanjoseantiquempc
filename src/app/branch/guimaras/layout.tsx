import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { headers } from 'next/headers';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guimaras Branch | SJMPC",
  description: "Guimaras branch pages for San Jose Multi-Purpose Cooperative",
};

export default async function GuimarasBranchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const h = await headers();
  const path = (h.get('x-invoke-path') || h.get('x-nextjs-invoke-path') || '') as string;
  if (path.endsWith('/login') || path.endsWith('/login/')) {
    return <>{children}</>;
  }

  return <>{children}</>;
}
