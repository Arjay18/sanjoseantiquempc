import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'San Jose Branch | SJMPC',
  description: 'San Jose branch pages for San Jose Multi-Purpose Cooperative',
};

export default function SanJoseBranchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
