'use client'

import React from 'react'
import { MdOutlineLogout} from 'react-icons/md'
import { signOut } from 'next-auth/react'


const LogoutBtn = () => {
  return (
    <div>
         <button 
         className='flex gap-4 items-center px-4 p-2 bg-[#bb1111] text-white capitalize text-base hover:underline transition rounded-md ' 
         onClick={() => signOut()}>
                  log out
                  <MdOutlineLogout />
        </button>
    </div>
  )
}

export default LogoutBtn