'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SafeUser } from '../types'

interface NotifyBodyProps {
    currentUser?: SafeUser | null;
}

const NotifyBody: React.FC<NotifyBodyProps> = ({currentUser}) => {
  return (
    <div>
         <motion.div className="bg-primary text-primary shadow-lg h-full min-h-screen p-4 md:p-8"
                initial={{y: "100%",}}
                animate={{y: "0%", }}
                exit={{y: "100%"}}
                transition={{duration: '0.2', ease: "easeInOut"}}>
                     {
                    currentUser ?
                    <div className=''>
                        <div>
                            - You just logged in
                        </div>
                    </div>
                    :
                    <div className='h-full w-full flex items-center justify-center'>
                        <div className='text-base'>
                            Login to see your notifications!
                        </div>
                    </div> 
                }
             </motion.div>
    </div>
  )
}

export default NotifyBody