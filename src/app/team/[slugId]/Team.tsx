'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import {IoLocationOutline, IoStatsChartOutline} from 'react-icons/io5'
import GameCard from './GameCard'
import { BiMedal } from 'react-icons/bi'

const Team = ({team} :any) => {


  const color = (`#${team.team.color}`)
  const altcolor = (`#${team.team.alternateColor}`)

  function formatText(text : string) {
    // Add space before capital letters
    const spacedText = text.replace(/([A-Z])/g, ' $1');
  
    // Capitalize the words
    const capitalizedText = spacedText.replace(/\b\w/g, function(match) {
      return match.toUpperCase();
    });
  
    return capitalizedText;
    
  }
  
  
  return (
    <div>
       <div className='p-4 cursor-pointer flex flex-col sm:flex-row justify-between sm:items-center gap-8'>
            <div className='flex items-center gap-4'>
              <div className='bg-secondary rounded-md shadow-md p-2 md:p-4 h-[50px] w-[50px] md:w-[65px] md:h-[65px]  flex items-center justify-center'>
                <Image src={team.team.logos[0]?.href} alt='logo' width={50} height={50} className=' h-[50px] w-[50px] md:w-[60px] md:h-[60px] object-contain' />
              </div>

              <div>
                <div className='font-bold text-lg sm:text-2xl md:text-3xl'>
                  {team.team.name} <span className='text-accent-6 text-sm'>({team.team.abbreviation})</span>
                </div>
                <div className='block text-accent-4'>
                  {team.team.nickname} 
                </div>
              </div>
            </div>

            <div className=' shadow-md flex flex-row md:w-[200px] w-[100px]'>
              <span style={{ background: color}} className={`w-full h-4 border p-2 rounded-l-sm`}></span>
              <span style={{ background: altcolor}} className={`w-full h-4 border p-2 rounded-r-sm`}></span>
            </div>
          </div>

          <div className='mx-4 my-10 md:my-14'>
            <div className='flex flex-row gap-4 items-center my-4'>
              <span><IoLocationOutline size={24} /></span>
              <span>{team.team.location}</span>
            </div>
            <div className='flex flex-row gap-4 items-center my-4'>
              <span><BiMedal size={24} /></span>
              <span>{team.team.standingSummary}</span>
            </div>
          </div>

          { 
            !team.team.nextEvent || team.team.nextEvent.length === 0 ? '' :
            <div className='my-8 md:my-14'>
              <div className='text-lg md:text-2xl font-bold '>
                Latest Match
              </div>
              <div>
                <GameCard game={team.team.nextEvent[0]} />
              </div>
            </div>
          }
          {
            !team.team.record.items || team.team.record.items.length === 0 || team.team.record.items[0] === undefined ? (
              ''
            ) : (
              <div className='my-8 sm:mx-4'>
                <div className='text-lg md:text-2xl font-bold my-2 flex items-center gap-2'>
                   <IoStatsChartOutline /> {team.team.record.items[0]?.description}
                </div>
                <div>
                  <div>
                    {team.team.record.items[0]?.stats.map((stat: any) => (
                      <div
                        key={stat.name}
                        className='flex flex-row gap-4 border-b border-accent-4 px-2 py-4 hover:scale-105 hover:mx-8 transition-all cursor-pointer'
                      >
                        <span className='flex-1 text-sm sm:text-base'>
                          {formatText(stat.name)}
                        </span>
                        <span className='text-sm sm:text-base'>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          }



    </div>
  )
}

export default Team



