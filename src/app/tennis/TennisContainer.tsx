'use client'

import Image from 'next/image';
import React, { useState } from 'react'

import useSWR from 'swr';
import { AnimatePresence, motion } from 'framer-motion';
import { format } from 'date-fns';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import Loader from '../components/Loader';
import FightCard from '../ufc/FightCard';

const fetcher = (...args: [RequestInfo, RequestInit?]): Promise<any> => 
  fetch(...args).then((res) => res.json());

const TennisContainer = () => {
    const [clicked, setClicked] = useState(false)
    const { data, error, isLoading} = useSWR(
        `https://site.api.espn.com/apis/site/v2/sports/tennis/atp/scoreboard`,
        fetcher);
        const count = data?.events?.length;
        // const time = data?.day?.date;
        
        if(!data && data === undefined ){
          return <Loader />
        }

        const formatted = format(new Date(`${data?.events[0]?.date}`), 'MMMM d, yyyy')

  return (
    <div className='my-12 border border-accent-4 rounded-lg'>
    {
              data && data?.leagues?.map((item : any, index: number) => (
              <div key={index} onClick={() => setClicked(!clicked)} className='p-4 cursor-pointer flex flex-row justify-between items-center'>
                <div className='flex items-center gap-4'>
                  <div className='bg-white h-[40px] w-[40px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center object-contain'>
                    <Image src={item.logos[0]?.href} alt={item.name} width={30} height={30} className='rounded-full h-[30px] w-[30px] md:w-[40px] md:h-[40px] object-contain' />
                  </div>
                    <div className='font-bold text-sm md:text-xl'>
                      {item.name} ({count})
                    </div>
                </div>
                <div>
                <div>
                  {
                      clicked ? <AiOutlineUp /> : <AiOutlineDown />
                  }
                </div>
                </div>
              </div>


              ))
            }
             <AnimatePresence>
            {
              clicked &&  
              <div>
              
                 {
                    data && data?.events?.map((item : any, index: number) => (
                    <div key={item.id}>
                        <div className='mx-4 text-xs md:text-sm text-accent-4'>
                          {item.name} - 
                        </div>
                       { item.competitions.map((athlete : any) => (
                            <FightCard  game={athlete} key={athlete.id} />
                       ))}
                 

                    </div>
                ))
              }

              </div>
            }
            </AnimatePresence>
            
           
    </div>
  )
}

export default TennisContainer