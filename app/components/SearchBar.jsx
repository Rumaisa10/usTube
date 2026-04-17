import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
export default function SearchBar() {
     const [search, setSearch] = useState("")
     const router = useRouter()

     const handleSearch = (e) =>{
         e.preventDefault()
         router.push(`/search?q=${encodeURIComponent(search)}`)
     }
  return (
    <div>
       <div className="flex-1 max-w-xl mx-4">
         <form
        onSubmit={handleSearch}
        className="flex-1 max-w-xl mx-4"
      >
        <input
          type="text"
          placeholder="Search videos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-full bg-[#111] border border-gray-700 outline-none"
        />
      </form>
      </div>
    </div>
  )
}
