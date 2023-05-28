'use client'

import { ufcSelect } from '@/app/data/data';
import { UfcSelectProps } from '@/app/types/Game';
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const UfcSelect = ({selectedSport, handleSportClick} : UfcSelectProps) => {
    return (
        <div>
          {ufcSelect.map((sport) => (
            <div key={sport.sport} className='relative rounded-md'>
              
              <div className='flex justify-between items-center cursor-pointer py-2  hover:px-2  transition-all hover:bg-orange rounded-sm hover:text-white' onClick={() => handleSportClick(sport.sport)}>
                  <div className='text-sm md:text-lg flex items-center gap-4'>
                      {sport.icon}
                      <div className='text-sm md:text-md '>
                      {sport.sport}
                      </div>
                  </div>
                  <div>
                    {selectedSport === sport.sport ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />   }
                  </div>
              </div>
    
              {selectedSport === sport.sport &&   
              <div className='bg-primary text-primary rounded-md z-10  absolute flex flex-col w-full' onClick={() => handleSportClick(sport.sport)}>
                  {sport.leagues.map((league) => (
                       <Link href={`${league.slug}`} key={league.abbreviation} className='hover:bg-orange hover:text-white transition-all cursor-pointer py-1 px-4 w-full border-b border-accent-4'>
                          {league.name}
                      </Link>
                  ))}
                </div>
              }
            
            </div>
          ))}
        </div>
      );
}

export default UfcSelect