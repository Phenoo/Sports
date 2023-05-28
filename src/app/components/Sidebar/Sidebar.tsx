'use client'

import React, { useState } from 'react'
import Logo from '../Logo'

import {Icons} from '@/app/data/data'
import { MdDashboard, MdOutlineLogout} from 'react-icons/md'
import Select from './Select'
import TennisSelect from './TennisSelect'

import UfcSelect from './UfcSelect'
import Link from 'next/link'


import { signOut } from 'next-auth/react'
import { SafeUser } from '@/app/types'
import LoginButton from './LoginButton'

interface SidebarProps{
  currentUser: SafeUser | null;
}

const Sidebar: React.FC<SidebarProps> = ({currentUser}) => {
  const [selectedSport, setSelectedSport] = useState<string | null>(null);

  const handleSportClick = (sport: string) => {
      setSelectedSport(sport === selectedSport ? null : sport);

      setTimeout(() => {
        setSelectedSport(null);
      }, 5000);
    };
  return (
    <div className="bg-primary-2 w-[210px] h-screen transition-[margin-left] ease-in-out duration-500 fixed top-0 z-10 p-6 hidden md:block">
      <div className='flex justify-between flex-col gap-8 h-full w-full'>

            <Logo />

            <div className='flex gap-4 items-center'>
              <div>
                <MdDashboard size={20} />
              </div>
              <Link href='/'>
                Home
              </Link>
            </div>


            <div className=''>
              <div className='text-accent-4 capitalize'>
                sports
              </div>
              <Select selectedSport={selectedSport} handleSportClick={handleSportClick} />
              <TennisSelect selectedSport={selectedSport} handleSportClick={handleSportClick} />
              <UfcSelect selectedSport={selectedSport} handleSportClick={handleSportClick} />

            </div>

            <div className=''>
              <div className='text-accent-4 capitalize text-sm'>
                  other menu
                </div>

                <div className='flex flex-col gap-2 mt-4'>
                {
                  Icons.map((item, index) => {
                  const Icon = item.icon;
                  return  <Link  key={index} href={item.link}>
                    <div className='flex flex-row gap-4 items-center cursor-pointer lg:py-1' >
                      <Icon size={20} />
                      <div className='text-sm lg:text-md capitalize'>
                        {item.name}
                      </div>
                    </div>; 
                    </Link>
                    
                })}
              </div>

            </div>



            <div className=''>
              {
                currentUser ?
                
                <div>
                <button className='flex gap-4 items-center px-4 p-2 bg-[#bb1111] text-white capitalize text-base hover:underline transition rounded-md ' onClick={() => signOut()}>
                  log out
                  <MdOutlineLogout />
                </button>
                </div>
                :
                <LoginButton />
              }
              
             
            </div>
        </div>

    </div>
  )
}

export default Sidebar