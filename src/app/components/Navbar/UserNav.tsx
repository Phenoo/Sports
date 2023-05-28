'use client'

import Image from 'next/image'
import React from 'react'
import Img1 from './null.png'
import { SafeUser } from '@/app/types'
import Link from 'next/link'
import LoginButton from '../Sidebar/LoginButton'

interface UserNavProps {
  currentUser?: SafeUser | null;
}

const UserNav:React.FC<UserNavProps> = ({currentUser}) => {
  return (
    <>

     { 
        currentUser ?
     <Link href='/profile'>
        <div className='md:flex flex-row items-center justify-between gap-4 rounded-4xl lg:border lg:border-accent-4 md:w-72 px-4 p-2'>
          <div className='hidden lg:block'>
            <span className='text-base fot-bold'>
              {currentUser.name}
            </span><br />
            <span className='text-accent-4 text-xs font-bold'>
              {currentUser.email}
            </span>
          </div>
          <div className='flex items-end justify-end'>
            <Image src={currentUser.image || Img1} alt='avatar' width="50" height="50"  className='rounded-full'/>

          </div>
        </div>
      </Link>
      :
      <LoginButton />}
    </>


  )
}

export default UserNav