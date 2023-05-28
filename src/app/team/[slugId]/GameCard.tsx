'use client'

import Image from 'next/image'
import React from 'react'
import { SlStar } from 'react-icons/sl';
import { TfiStatsUp } from 'react-icons/tfi';
import Img1 from './null.png'

const GameCard = ({game} : any) => {


  const getColor = (letter : string) => {
    if (letter === 'W') {
      return 'green';
    } else if (letter === 'L') {
      return 'red';
    }
    return 'gray';
  };

  const getStatusBackgroundClass = (state: string): string => {
    if (state === 'in') {
      return 'bg-green';
    } else if (state === 'pre') {
      return 'bg-accent-4';
    } else if (state === 'post') {
      return 'bg-orange';
    } else {
      return '';
    }
  };
  return (
    <div>
      
      <div className='bg-primary p-2 md:p-4 relative flex flex-row justify-between items-center my-4 '>

          <div>
            <SlStar color='gray'  />
          </div>


          <div className={`grid grid-cols-3 gap-4 place-items-center`}>
            {
              game.competitions.map((team: any) => (
                <>
                <div key={team.competitors[0].id} className='flex w-[100px] md:w-[210px] items-end justify-end'>
                  <div className="flex items-center gap-2">
                    <Image src={team.competitors[0].team.logo || Img1} alt="logo" width={20} height={20} className='object-contain'/>
                    <p className='hidden sm:flex  text-sm'>{team.competitors[0].team.displayName}</p>
                    <p className='sm:hidden flex text-sm'>{team.competitors[0].team.abbreviation}</p>
                  </div>
                </div>
                    
                <div  className={`${getStatusBackgroundClass(game.competitions[0].status?.type?.state)} min-w-[60px] mx-2 flex items-center justify-center gap-2  text-white p-1 rounded-sm relative`}>
                  <span className=''>
                    { game.competitions[0].status?.type?.state === 'pre' ? '-' : game.competitions[0].competitors[0].score.value}
                  </span>
                  <span>:</span>
                  <span className=''>
                    {game.competitions[0].status?.type?.state === 'pre' ? '-' : game.competitions[0].competitors[1].score.value}
                  </span>
                </div>


                <div key={team.competitors[1].id} className='flex w-[100px] md:w-[210px] items-start justify-start'>
                  <div className="flex items-center gap-2">
                    <Image src={team.competitors[1].team.logo || Img1} alt="logo" width={20} height={20} className='object-contain' />
                    <p className='hidden sm:flex  text-sm'>{team.competitors[1].team.displayName}</p>
                    <p className='sm:hidden flex text-sm'>{team.competitors[1].team.abbreviation}</p>
                  </div>

                
                </div>
                </>
              ))
            }
          </div>

          <div className='cursor-pointer hover:font-bold transition hover:scale-110 md:text-xl'>
            <TfiStatsUp />
          </div>

      </div>   
    </div>

  )
}

export default GameCard