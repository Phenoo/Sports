'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { SafeUser } from '../types';
import Image from 'next/image';

import Img1 from './null.jpeg'
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import Settings from './Settings';
import LogoutBtn from '../components/LogoutBtn';

interface ProfileContainerProps{
    currentUser?: SafeUser | null;
  }
  
const ProfileContainer: React.FC<ProfileContainerProps> = ({currentUser}) => {
   

    if (typeof currentUser === 'undefined' || currentUser === null) {
        return(
            <div className='my-8 md:my-14'>
                <div className=''>
                    Sync your favorites, join the chat, view top predictions and more! <span className='font-bold ml-2'>
                        Sign In!
                    </span>
                </div>
                <Settings />
            </div>
        ) 
    }
  return (
    <motion.div className="mt-4 bg-primary text-primary h-auto min-h-screen sm:p-4 md:p-8"
    initial={{y: "100%",}}
    animate={{y: "0%", }}
    exit={{y: "100%"}}
    transition={{duration: '0.2', ease: "easeInOut"}}>
        <div className=''>
                <div>
                <div className='flex flex-row items-center gap-4 mb-4'>
                    <div className='w-[60px] h-[60px] md:w-[100px] md:h-[100px] rounded-full border'>
                        <Image src={currentUser?.image || Img1} alt='avatar' height="60" width="60"
                            className='md:w-[100px] md:h-[100px] rounded-full'
                            />
                    </div>
                    <div>
                        <div className='text-xl md:text-3xl capitalize'>
                            {currentUser?.name}
                        </div>
                        <div className='text-xs md:text-sm'>{currentUser?.email}</div>
                    </div>
                </div>
                <div>
                        
                {currentUser && 
                    <div className='text-right'>
                        Joined: {format(new Date(currentUser.createdAt), 'yyyy-MM-dd')}
                    </div>
                }
                </div>
                <br />
                <hr />

                <div className='text-right my-4 text-sm'>
                </div>
            </div>

            <Settings />
        </div>
        {

        }

        <LogoutBtn />
    </motion.div>
  )
}

export default ProfileContainer