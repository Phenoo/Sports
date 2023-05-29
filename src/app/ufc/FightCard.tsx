'use client'

import Img1 from './null.png'
import Image from 'next/image'
import React from 'react'

const FightCard = ({game} :any) => {
  return (
    <div className='bg-primary p-2 md:p-4 py-4  my-4 rounded-md mx-2 md:mx-4'>
         <div className='text-accent-4 text-xs font-bold'>
            {game.type.abbreviation}
        </div>
            <div className={`grid grid-cols-3 gap-4 relative place-items-center`}>
                    <>
  
                    <div key={game.competitors[0].id} className='flex w-[100px] md:w-[210px] items-end justify-end'>
                    <div className="flex items-center flex-col sm:flex-row gap-2">
                      <Image src={game.competitors[0].athlete?.flag?.href || Img1} alt="logo" width={20} height={20}  />
                        <p className='hidden sm:flex  text-sm font-bold '>{game.competitors[0]?.athlete?.displayName}</p> 
                         <p className='sm:hidden flex text-xs font-bold'>{game.competitors[0]?.athlete?.shortName}</p>
                      </div>
                    </div>
                        <div className='w-7 mx-auto md:w-14'>
                           
                        <div>vs</div>
                        </div>


                    <div key={game.competitors[1].id} className='flex w-[100px] md:w-[210px] items-start justify-start'>
                      <div className="flex items-center flex-col sm:flex-row gap-2">
                        <Image src={game.competitors[1].athlete?.flag?.href || Img1} alt="logo" width={20} height={20}  />
                        <p className='hidden sm:flex  text-sm font-bold '>{game.competitors[1]?.athlete?.displayName}</p> 
                         <p className='sm:hidden flex text-xs  font-bold'>{game.competitors[1]?.athlete?.shortName}</p>
                      </div>

                    
                    </div>
                    </>

              </div>
    </div>
  )
}

export default FightCard