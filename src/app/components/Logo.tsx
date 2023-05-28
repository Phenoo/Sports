'use client'

import Link from 'next/link';
import React from 'react'
import { GiAbstract003 } from "react-icons/gi";

const Logo = () => {
  return (
    <Link href='/'>
      <div className='flex gap-2 items-center'>
        <div className='text-orange text-2xl'>
          <GiAbstract003 />
        </div>
        <div className='text-primary lg:text-2xl'>
          Sports
        </div>
      </div>
    </Link>

  )
}

export default Logo