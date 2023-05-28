'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { SafeUser } from '../types';
import Image from 'next/image';

import Img1 from '@/app/components/Navbar/null.png'
import RadioTheme from './RadioTheme';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

interface ProfileContainerProps{
    currentUser?: SafeUser | null;
  }
  
const ProfileContainer: React.FC<ProfileContainerProps> = ({currentUser}) => {
    const time = new Date(`${currentUser?.createdAt}`)
    const joinedDate = format(time, 'MMMM d, yyyy', { locale: enUS })
  return (
    <motion.div className="mt-4 bg-primary text-primary h-auto min-h-screen sm:p-4 md:p-8"
    initial={{y: "100%",}}
    animate={{y: "0%", }}
    exit={{y: "100%"}}
    transition={{duration: '0.2', ease: "easeInOut"}}>
        <div className=''>
            {
                currentUser ? 
                <div>
                <div className='flex flex-row items-center gap-4 mb-4'>
                    <div>
                        <Image src={currentUser?.image || Img1} alt='avatar' height="60" width="60"
                            className='md:w-[100px] md:h-[100px] rounded-full'
                            />
                    </div>
                    <div>
                        <div className='text-xl md:text-3xl capitalize'>
                            {currentUser?.name}
                        </div>
                        <div className='text-accent-4 text-xs md:text-sm'>{currentUser?.email}</div>
                    </div>
                </div>

                <hr />

                <div className='text-right my-4 text-sm'>
                    Joined {joinedDate}
                </div>
            </div>
            :
            <div>
                
            </div>
            }
           



            <div className=''>
                Enjoy the website!
            </div>
            <div className='text-xl font-bold mt-8'>
                Settings
            </div>
            <hr />
            <div className='my-8'>
                <div className='text-lg font-bold'>
                    Theme
                </div>
                <RadioTheme />
            </div>
        </div>
    </motion.div>
  )
}

export default ProfileContainer