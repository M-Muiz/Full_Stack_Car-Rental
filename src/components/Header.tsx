"use client"
import { links } from '@/utils/data'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
const Header = () => {
    const pathname = usePathname()
    console.log(pathname);
    
  return (
    <div className="bg-white shadow-lg flex items-center justify-between h-16 px-[10%]">
      
      <Link href="/" className="text-main-color font-bold text-3xl">
        Car Rental
      </Link>
      <div className="flex items-center gap-4">
        {
            links?.map((link, ind) => (
                <Link key={ind} href={link.link} className={`text-main-color font-bold ${pathname === link.link ? "text-red-500" : ""} hover:text-red-500`}>{link.text}</Link>))
        }
      </div>
    </div>
  )
}

export default Header
