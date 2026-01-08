import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { headers } from 'next/headers';
import { authOptions } from '@/lib/auth';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oton Branch | SJMPC",
  description: "Oton branch pages for San Jose Multi-Purpose Cooperative",
};

export default async function OtonBranchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // If request is for the login page, skip auth redirect so the login page can render
  const h = await headers();
  const path = (h.get('x-invoke-path') || h.get('x-nextjs-invoke-path') || '') as string;
  if (path.endsWith('/login') || path.endsWith('/login/')) {
    return <>{children}</>;
  }

  return <>{children}</>;
}
