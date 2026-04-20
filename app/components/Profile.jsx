"use client"

import Link from "next/link"
import { useSession } from "next-auth/react"

export default function ProfileButton() {
  const { data: session } = useSession()

  return (
    <Link href="/profile">
      <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
        {session ? "Profile" : "Login"}
      </button>
    </Link>
  )
}