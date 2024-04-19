"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import "./style.scss"
const navbarLinks = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Portfolio',
    href: '/portfolio'
  },
  {
    name: 'Contact',
    href: '/contact'
  }
]

const NavBar = () => {
  const pathname = usePathname()
  return (
    <nav className='bg-transparrent'>
      <div className='flex justify-between items-center py-6 navbar-gap'>
        <Link href="/" className='text-2xl font-bold'>Halyamov</Link>
        <div className='flex navbar-gap flex-wrap justify-center gap-y-1'>
          {navbarLinks.map((link) => {
            const isActive = link.href === pathname
            return <Link className={`transition p-2 text-[16px] rounded-lg ${isActive && "bg-dark-2 text-light-1"}`} href={link.href}>{link.name}</Link>
          })}
        </div>
      </div>
    </nav>
  )
}

export default NavBar