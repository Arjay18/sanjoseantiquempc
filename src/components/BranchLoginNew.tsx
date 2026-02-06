"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {
  branchName: string;
  branchSlug: string;
  checkAuthorization?: (session: any) => boolean | Promise<boolean>;
};

export default function BranchLoginNew({ branchName, branchSlug, checkAuthorization }: Props) {
  const [passbookNo, setPassbookNo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const result = await signIn("credentials", {
        passbookNo,
        password,
        redirect: false,
      });

      if (result?.ok) {
        // Trigger a full redirect so NextAuth sets cookies server-side
        await signIn("credentials", {
          passbookNo,
          password,
          redirect: true,
          callbackUrl: `/branch/${branchSlug}`,
        });
      } else if (result?.error) {
        setError("Invalid credentials");
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="hidden md:flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg">
          <img src="/logo.png" alt="SJMPC logo" className="w-36 h-36 object-contain mb-6 rounded-full" />
          <h3 className="text-2xl font-semibold text-slate-800">Welcome to {branchName} Branch</h3>
          <p className="mt-2 text-center text-sm text-slate-500 max-w-xs">Secure access for branch staff. Use your branch credentials to continue.</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-slate-900">{branchName} Branch Login</h2>
            <p className="text-sm text-slate-500 mt-1">Sign in to access the dashboard</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="passbookNo" className="block text-sm font-medium text-slate-700">Username</label>
              <input
                id="passbookNo"
                name="passbookNo"
                type="text"
                required
                className="mt-1 block w-full rounded-md border border-slate-200 px-3 py-2 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. sanjose_admin"
                value={passbookNo}
                onChange={(e) => setPassbookNo(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full rounded-md border border-slate-200 px-3 py-2 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <div className="text-sm text-red-700 bg-red-50 p-3 rounded">{error}</div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember" name="remember" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded" />
                <label htmlFor="remember" className="ml-2 block text-sm text-slate-600">Remember me</label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Forgot password?</a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
