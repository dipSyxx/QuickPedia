'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export const Search = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch('')
    router.push(`/${search}/`)
  }
  return (
    <div>
      <form className="w-50 flex justify-center md:justify-between" onSubmit={handleSumbit}>
        <input
          type="text"
          placeholder="QuickSearch!..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
          }}
          className="bg-white p-2 w-80 text-xl rounded-xl"
        />
        <button type="submit" className="p-2 rounded-xl bg-slate-300 ml-2 font-bold transition-all hover:bg-slate-400">
          🚀
        </button>
      </form>
    </div>
  )
}
