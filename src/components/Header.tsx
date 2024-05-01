"use client"
import { links } from '@/utils/data'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const pathname = usePathname()
  const [showMenu, setShowMenu] = React.useState(false);
  console.log(showMenu)
  return (
    <div className="bg-white shadow-lg flex items-center justify-between h-16 md:px-[10%]">

      <Link href="/" className="text-main-color font-bold text-3xl pl-3">
        Car Rental
      </Link>
      <div className="md:hidden pr-3 cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
        <GiHamburgerMenu />
      </div>
      <div className={`flex ${showMenu ? "flex-col w-full absolute top-16" : "hidden md:flex"} gap-4 bg-white md:flex-row md:items-center md:static md:w-auto items-center`}>
        {
          links?.map((link, ind) => (
            <Link key={ind} href={link.link} className={`text-main-color font-bold ${pathname === link.link ? "text-red-500" : ""} hover:text-red-500`}>{link.text}</Link>))
        }
      </div>
    </div>
  )
};

export default Header;
