'use client'
import React from 'react'
import GameCard from './GameCard'

const Matches = ({teamMatches}  : any) => {
  return (
    <div className='my-14'>
      <div className='font-bold text-lg md:text-2xl'>
        All Matches
      </div>
      <div className='my-8'>

      {
                teamMatches && teamMatches?.events?.map((item : any, index: number) => (
                  <GameCard key={item.id} game={item} />
                ))
              }
      </div>

    </div>
  )
}

export default Matches