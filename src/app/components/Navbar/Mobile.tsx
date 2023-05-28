'use client'

import { menuItems } from '@/app/data/data'
import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation"
import { FaList } from 'react-icons/fa'



const Mobile = () => {
    const path = usePathname();
  return (
    <div className='md:hidden h-[60px] bg-primary border-t border-t-accent-4 fixed bottom-0 w-full z-20'>
        <div className="h-full w-full flex  items-center">
            <ul className='flex flex-row justify-between gap-4 w-full p-4'>
                <li >
                    <Link href='/' className='flex flex-col items-center p-2'>
                        <span className='text-xl'><FaList /></span>
                        <span className='text-xs'>Matches</span>
                    </Link>
                </li>
            {menuItems.map((item, index) => {
                 const isActive = path?.startsWith(item.link)          

                return(        
                <li key={index}>
                   
                    <Link href={`${item.link}`}  className={`${isActive ? 'bg-orange text-white rounded-md font-bold' : ''} flex flex-col items-center p-2`}>
                    <span className='text-xl'>
                        {item.icon} 
                    </span>
                    <span className='text-xs'>
                        {item.label}

                    </span>
                    </Link>

                </li>
        )})}
        </ul>
        </div>
    </div>
  )
}

export default Mobile