"use client";

import BranchLoginNew from './BranchLoginNew';

export default function BranchLogin({ branchName, branchSlug, checkAuthorization }: { branchName: string; branchSlug: string; checkAuthorization?: (session: any) => boolean | Promise<boolean>; }) {
  return <BranchLoginNew branchName={branchName} branchSlug={branchSlug} checkAuthorization={checkAuthorization} />;
}
