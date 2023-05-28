'use client'

import React from 'react'
import SwitchToggle from '../Switch'
import { FaBell, FaCogs } from 'react-icons/fa'
import UserNav from './UserNav'
import { SafeUser } from '@/app/types'
import { useTheme } from 'next-themes'
import { BsMoon, BsSun } from 'react-icons/bs'
import Link from 'next/link'

interface NavigationProps {
  currentUser?: SafeUser | null;
}


const Navigation: React.FC<NavigationProps> = ({currentUser}) => {
  const { theme, setTheme } = useTheme();

  return (
    <>
     <div className='flex justify-between items-center p-4 md:p-8 mb-4'> 
        <div className='flex items-center gap-4'>
          <Link href='/notify'>
            <div className='relative'>
                  <span className='w-[10px] h-[10px] rounded-full bg-red absolute right-0 top-0'></span>
                  <FaBell size={30} />
            </div>
          </Link>

          <div className='text-sm sm:text-lg font-bold capitalize rounded-full bg-orange  py-2 px-4  leading-relaxed cursor-pointer flex items-center gap-2'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          
          >
                Welcome, {currentUser ? currentUser.name  : 'User'} {theme === 'dark' ? <BsSun /> : <BsMoon /> }
            </div>           
        </div>
        <div>
            <UserNav currentUser={currentUser}/> 
        </div> 
        </div>
    </>

  )
}

export default Navigation