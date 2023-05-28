'use client'

import React from 'react'
import {HiOutlineLogin} from 'react-icons/hi'
import useLoginModal from "@/app/hooks/useLoginModal";


const LoginButton = () => {
  const loginModal = useLoginModal();

  return (
    <div>
        <button className='flex gap-4 items-center p-2 md:p-4 capitalize text-base hover:underline transition bg-green text-white rounded-md' onClick={loginModal.onOpen}>
            login
            <HiOutlineLogin />
        </button>
    </div>
  )
}

export default LoginButton