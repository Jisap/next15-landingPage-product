import { navLinks } from '@/constants/constant'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='fixed w-full h-[12vh] z-[100] transition-all duration-200 bg-pink-700'>
      <div className='flex items-center h-full justify-between sm:w-[80%] w-[90%] mx-auto'>
        {/* logo */}
        <div className='text-white font-bold text-2xl sm:text-3xl'>
          LOGO
        </div>

        {/* navlinks */}
        <div className='hidden lg:flex items-center space-x-10'>
          {navLinks.map((link) => {
            return (
              <Link 
                key={link.id} 
                href={link.url}
                className='text-white hover:text-green-300 font-semibold transition-all duration-200'
              >
                <p>
                  {link.label}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Nav