'use client'
import Image from 'next/image'
import React from 'react'

interface LeagueData {
  leagues: {
    logos: { href: string }[];
    name: string;
    season: {
      type: {
        name: string;
      };
    };
    abbreviation: string;
  }[];
}

interface LeagueNameProps {
  leagueData: LeagueData;
}

const LeagueName: React.FC<LeagueNameProps> = ({ leagueData }) => {
  return (
    <div>
        {
          leagueData && leagueData?.leagues?.map((item : any, index: number) => (
          <div key={index} className='p-4 cursor-pointer flex flex-row justify-between items-center'>
            <div className='flex items-center gap-4'>
              <div className='bg-white rounded-md shadow-md p-2 h-[50px] w-[50px] md:w-[60px] md:h-[60px]  flex items-center justify-center object-contain'>
                <Image src={item.logos[0]?.href} alt={item.name} width={50} height={50} className=' h-[50px] w-[50px] md:w-[60px] md:h-[60px] object-contain' />
              </div>
              <div className='flex flex-col gap-0'  >
                  <span className='font-bold text-lg md:text-2xl'>{item.name} </span>
                  <span className='text-accent-4 text-xs md:text-sm'>
                    {item.season.type.name}
                  </span>
                  <span className='text-accent-4 text-xs md:text-sm'>{item.abbreviation}</span>
                </div>
                
            </div>
            
          </div>
          ))
            }
      



    </div>
  )
}

export default LeagueName