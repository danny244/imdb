"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

const SearchBox = () => {
     const router = useRouter()
     const [search, setSearch] = useState('')
     const handleSumit = (e) => {
          e.preventDefault()
          router.push(`/search/${search}`)
     }
     return (
          <form onSubmit={handleSumit} className="flex justify-between px-5 max-w-6xl gap-4 mx-auto">
               <input
                    type="text"
                    placeholder="Search keywords.."
                    className="w-full h-14 rounded-md placeholder-gray-500 border p-4 border-gray-500 outline-none bg-transparent flex-1"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
               />
               <button className="text-amber-600 h-14 px-4 bg-gray-400 rounded-xl disabled:text-white " disabled={search === ''}>Search</button>
          </form>
     )
}

export default SearchBox
