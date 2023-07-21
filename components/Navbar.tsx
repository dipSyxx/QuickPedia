'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Search } from './Search'
import clsx from 'clsx'

export const Navbar = () => {
  const [scroll, setScroll] = useState(0)

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <nav
      className={clsx(
        'bg-inherit p-4 flex justify-between flex-col z-10 md:flex-row sticky top-0 drop-shadow-xl transition-all duration-300',
        scroll > 50 ? 'bg-white bg-opacity-70' : '',
      )}
    >
      <h1 className="text-3xl font-bold text-black grid place-content-center opacity-70 mb-2 md:mb-0">
        <Link href="/">QuickPedia!</Link>
      </h1>
      <Search />
    </nav>
  )
}
