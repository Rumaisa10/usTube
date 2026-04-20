import { getServerSession } from "next-auth"
import { authOptions } from "@/auth"
import { redirect } from "next/navigation"
import Image from "next/image"



export default async function ProfilePage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        
        
        {session.user.image ? (
  <Image
    src={session.user.image}
    width={96}
    height={96}
    alt="Profile"
    className="rounded-full mx-auto mb-4 border-4 border-gray-200"
  />
) : (
  <div className="w-24 h-24 rounded-full bg-gray-800 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4">
    {session.user.name?.charAt(0).toUpperCase()}
  </div>
)}

    
        <h1 className="text-2xl font-bold text-gray-800">
          {session.user.name}
        </h1>

      
        <p className="text-gray-500 mt-1">
          {session.user.email}
        </p>


      </div>
    </div>
  )
}