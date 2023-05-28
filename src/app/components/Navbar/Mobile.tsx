'use client'

import { menuItems } from '@/app/data/data'
import Link from 'next/link'
import React from 'react'

const Mobile = () => {
  return (
    <div className='md:hidden h-[60px] bg-primary fixed bottom-0 w-full z-20'>
        <div className="h-full w-full flex  items-center">
            <ul className='flex flex-row justify-between gap-4 w-full p-4'>
            {menuItems.map((item, index) => (
                <li key={index}>
                    <Link href={`${item.link}`}  className='flex flex-col items-center'>
                    <span className='text-xl'>
                        {item.icon} 
                    </span>
                    <span className='text-xs'>
                        {item.label}

                    </span>
                    </Link>

                </li>
        ))}
        </ul>
        </div>
    </div>
  )
}

export default Mobile