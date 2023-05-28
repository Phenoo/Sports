'use client'

import useEventModal from '@/app/hooks/useEventModal'
import { Game } from '@/app/types/Game'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { SlStar } from 'react-icons/sl'
import {TfiStatsUp} from 'react-icons/tfi'

import { format, differenceInSeconds, } from 'date-fns';
import SelectedMatch from './SelectedMatch'


type GameCardProps ={
  game: Game
}

const GameCard:React.FC<GameCardProps>  = ({game}) => {
  const [selectedMatch, setSelectedMatch] = useState<any | null>(null);
  const eventModal = useEventModal();
  const [timeRemaining, setTimeRemaining] = useState('');


  
  const targetDate = new Date(selectedMatch?.date || ''); // Set the target date

  // ...
    if (!isNaN(targetDate.getTime())) {

  const interval = setInterval(() => {
    const now = new Date();
    const remainingSeconds = differenceInSeconds(targetDate, now);
    const remainingTime = format(new Date(remainingSeconds * 1000), 'HH:mm:ss'); // Format remaining seconds to "HH:mm:ss" format
    setTimeRemaining(remainingTime);
  
    if (now >= targetDate) {
      clearInterval(interval);
    }
  }, 1000);
}

  

  const handleMatchClick = (match : Game) => {
    if (selectedMatch && selectedMatch.id === match.id) {
      setSelectedMatch(null);
    } else {
      setSelectedMatch(match);
      if(selectedMatch) {
        eventModal.onOpen()
      }
    }
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

  const getTimeBeforeColon = (timeString: string) => {
    const hour = timeString.split(':')[0];
    return hour;
  };



  return (
    <>
    
         {
            selectedMatch && <SelectedMatch game={game} selectedMatch={selectedMatch} handleMatchClick={handleMatchClick}  />}

      
          <div className='bg-primary p-2 md:p-4 relative flex flex-row justify-between items-center my-4 '>

              <div className='cursor-pointer hover:scale-105 transition-all'>
                <SlStar color='gray'  />
              </div>



              <div className={`grid grid-cols-3 gap-4 relative place-items-center`}>
                {
                  game.competitions.map((team) => (
                    <>
                      {
                        team.status.type.state === 'in' ? 
                        <div key={team.id} className='absolute top-1/4 md:-top-2 left-2 md:left-6 text-xs md:text-sm text-red font-bold animate-pulse'> 
                          {/* <span>{team.status?.period}Q </span> */}
                          <span>{getTimeBeforeColon(`${team.status.displayClock}`)}</span>
                        </div>
                        :
                        null
                      }
                     

                    <div key={team.competitors[0].id} className='flex w-[100px] md:w-[210px] items-end justify-end'>
                      <div className="flex items-center gap-2">
                        <Image src={team.competitors[0].team.logo} alt="logo" width={20} height={20} />
                        <p className='hidden sm:flex  text-sm '>{team.competitors[0].team.displayName}</p>
                        <p className='sm:hidden flex text-sm'>{team.competitors[0].team.abbreviation}</p>
                      </div>
                    </div>
                        
                    <div  className={`${getStatusBackgroundClass(game.status?.type?.state)} min-w-[60px] mx-2 flex items-center justify-center gap-2  text-white p-1 rounded-sm relative`}>
                      <span className=''>
                        { game.status?.type?.state === 'pre' ? '-' : game.competitions[0].competitors[0].score}
                      </span>
                      <span>:</span>
                      <span className=''>
                        {game.status?.type?.state === 'pre' ? '-' : game.competitions[0].competitors[1].score}
                      </span>
                    </div>


                    <div key={team.competitors[1].id} className='flex w-[100px] md:w-[210px] items-start justify-start'>
                      <div className="flex items-center gap-2">
                        <Image src={team.competitors[1].team.logo} alt="logo" width={20} height={20}  />
                        <p className='hidden sm:flex  text-sm'>{team.competitors[1].team.displayName}</p>
                        <p className='sm:hidden flex text-sm'>{team.competitors[1].team.abbreviation}</p>
                      </div>

                    
                    </div>
                    </>
                  ))
                }
              </div>

              <div className='cursor-pointer hover:font-bold transition hover:scale-110 md:text-xl' onClick={() => handleMatchClick(game)}>
                <TfiStatsUp />
              </div>

          </div>    
    </>


  )
}


export default GameCard
