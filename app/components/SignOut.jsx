'use client'
import React from 'react'
import { signOut } from 'next-auth/react'

export default function SignOut() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/login' })}
      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
    >
      Sign Out
    </button>
  )
}