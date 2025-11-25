'use client'

import { signOut, useSession } from 'next-auth/react'

export default function LogoutButton() {
  const { data: session, status } = useSession()

  const handleLogout = () => {
    signOut({ callbackUrl: '/admin/login' })
  }

  if (status === 'loading') {
    return null
  }

  if (!session) {
    return null
  }

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
    >
      Logout
    </button>
  )
}
