'use client'

import GameCard from '@/app/components/ScoreBoard/GameCard'
import React from 'react'

const Data = ({leagueData} : any) => {
  return (
    <div className='my-8'>
        <div className='text-base md:text-xl font-bold'>
            Recent Matches
        </div>
        <div>
        {
                leagueData && leagueData?.events?.map((item : any, index: number) => (
                  <GameCard key={item.id} game={item} />
                ))
              }
        </div>
    </div>
  )
}

export default Data