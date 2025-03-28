import { navLinks } from '@/constants/constant'
import Link from 'next/link'
import React from 'react'

const MobileNav = () => {
  return (
    <div>
      {/* overlay */}
      <div className='fixed inset-0 transform-all duration-500 z-[10002] bg-black opacity-70 w-full h-screen'>
        {/* navlinks */}
        <div className='text-white fixed justify-center flex flex-col h-full tranform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-pink-600 space-y-6 z-[1050]'>
          {navLinks.map((link) => {
            return (
              <Link key={link.id} href={link.url}>
                <p>
                  {link.label}
                </p>
              </Link>
          )})}
        </div>
      </div>
    </div>
  )
}

export default MobileNav