'use client'


import Button from '../Button'
import { BsInfoCircle } from 'react-icons/bs'
import React, { useEffect, useState } from 'react'
import useEventModal from '@/app/hooks/useEventModal'
import Image from 'next/image'
import { Game } from '@/app/types/Game'
import { format, differenceInSeconds, } from 'date-fns';
import { enUS } from 'date-fns/locale'

interface SelectedMatchProps {
  game: Game;
  selectedMatch: any;
  handleMatchClick: (matchId: Game) => void;
}

const SelectedMatch: React.FC<SelectedMatchProps> = ({selectedMatch, handleMatchClick, game}) => {
  const eventModal = useEventModal();
  const [timeRemaining, setTimeRemaining] = useState('');


  const targetDate = new Date(selectedMatch?.date || ''); // Set the target date
  const formattedDate = format(targetDate, 'MMMM d, yyyy', { locale: enUS });

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


  
    const getColor = (letter : string) => {
      if (letter === 'W') {
        return 'green';
      } else if (letter === 'L') {
        return 'red';
      }
      return 'gray';
    };
  

  
  return (
    <div>
          <div className=" justify-center  items-center  flex  overflow-x-hidden  overflow-y-auto  fixed  inset-0  z-50  outline-none  focus:outline-none bg-neutral-800/90 h-screen">        
                
                <div className=' relative  w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto  h-full  lg:h-auto md:h-auto
                '>
                  <div className={`translate duration-300 h-full opacity-100 translate-y-0`}>
                    <div  className='md:rounded-md w-full bg-primary translate  md:h-auto border-0 shadow-lg md:relative fixed bottom-0 flex flex-col  outline-none'>
                      {/* headers */}
                      <div className=" flex  items-center  p-4 md:p-6 rounded-t justify-center relative border-b-[1px] border-orange "
                      >
                        <button
                          className=" p-1 border-0  hover:opacity-70 transition absolute left-9"
                          onClick={() => handleMatchClick(game)}
                        >
                          <BsInfoCircle size={20} />
                        </button>
                        <div className="text-lg font-semibold">
                          Match Info
                        </div>
                      </div>

                      {/* body */}

                      <div className='p-4'>
                        <div>

                          <div className={` `}>
                              {
                                selectedMatch.competitions?.map((team : any) => (
                                  <>
                                    <div className='text-center text-gray-500 text-sm mb-2'>
                                      {team.notes && team.notes[0]?.headline}
                                    </div>
                                    <div className='grid grid-cols-3 sm:gap-4 place-items-center mb-4' >
                                      <div key={team.competitors[0].id} className='flex flex-col w-[100px] h-auto  md:w-[210px] items-center justify-end'>
                                        <div className="flex items-center gap-2">
                                          <Image src={team.competitors[0].team.logo} alt="logo" width={30} height={30} />
                                          <p className='hidden sm:flex'>{team.competitors[0].team.displayName}</p>
                                        </div>
                                        <div className='sm:hidden flex text-[10px] mt-2 text-center'>{team.competitors[0].team.displayName}</div>
                                        <p>
                                          {team.competitors[0].form?.split('').map((letter : string, index: number) => (
                                            <span key={index} style={{ color: getColor(letter) }} className='mr-[2px] font-bold text-xs sm:text-sm'>
                                            {letter}
                                            </span>
                                          ))}
                                        </p>
                                      </div>

                                      <div>
                                        {game.status?.type?.state === 'pre' ? 
                                          <div className='flex flex-col gap-2 items-center justify-center'>
                                            <span>VS</span>
                                            <span className='text-accent-8 text-sm sm:text-base'>
                                                {timeRemaining}
                                            </span>
                                          </div>
                                          :
                                          <div className='flex flex-col relative'>
                                            <div  className={`${game.status?.type?.state === 'in' && 'bg-green'} ${game.status?.type?.state === 'post' && 'bg-orange'}  min-w-[60px] mx-2 flex items-center justify-center gap-2  text-white p-1 rounded-sm relative`}>
                                              <span className=''>
                                                {game.competitions[0].competitors[0].score}
                                              </span>
                                              <span>:</span>
                                              <span className=''>
                                                {game.competitions[0].competitors[1].score}
                                              </span>

                                              <span className='flex items-center absolute top-0 left-0'>
                                                {
                                                  game.status?.type?.state === 'in' && <span  className='w-[10px] h-[10px] rounded-full bg-green animate-pulse' />
                                                }
                                              </span>
                                            
                                            </div>
                                            <div className='absolute top-10 left-1/4'>
                                            {
                                              team.status.type.state === 'in' ? 
                                              <div className='text-xs md:text-sm text-red  animate-pulse flex items-center gap-2'> 
                                                <span className='font-bold'>{team.status?.period}Q </span>
                                                <span className='font-bold'>{team.status.displayClock}&apos;</span>
                                              </div>
                                              :
                                              null
                                            }
                                            </div>
                                          </div>
                                        
                                        }
                                        
                                        
                                      </div>

                                      <div key={team.competitors[1].id} className='flex flex-col w-[100px] md:w-[210px] items-center justify-start'>
                                        <div className="flex items-center gap-2">
                                          <Image src={team.competitors[1].team.logo} alt="logo" width={30} height={30}  />
                                          <p className='hidden sm:flex'>{team.competitors[1].team.displayName}</p>
                                        </div>
                                        <div className='sm:hidden flex text-[10px] mt-2 text-center'>{team.competitors[1].team.displayName}</div>
                                        <p>
                                        {team.competitors[1].form?.split('').map((letter : string, index: number) => (
                                            <span key={index} style={{ color: getColor(letter) }} className='mr-[2px] font-bold text-xs sm:text-sm'>
                                            {letter}
                                            </span>
                                          ))}
                                        </p>
                                      
                                      </div>
                                    </div>
                                    
                                  </>
                                ))
                              }
                            </div>
                            {
                            !selectedMatch?.competitions || !selectedMatch.competitions[0]?.odds?.length ? null : (
                              <div className='my-4 md:mx-4'>
                                <div className='flex items-center justify-between'>
                                  <span>Full Time</span>
                                  <span className='text-accent-5 text-sm'>{selectedMatch.competitions[0].odds[0]?.provider?.name}</span>
                                </div>
                                <div className='flex flex-row items-center justify-center gap-2 md:gap-4 mt-2'>
                                  <div className='w-full flex flex-col gap-0 py-1 items-center px-4 md:px-6 border border-accent-4 rounded-md'>
                                    <span className='text-sm text-accent-4'>1</span>
                                    {selectedMatch.competitions[0].odds[0]?.homeTeamOdds?.value || '-'}
                                  </div>
                                  <div className='w-full flex flex-col gap-0 py-1 items-center px-4 md:px-6 border border-accent-4 rounded-md'>
                                    <span className='text-sm text-accent-4'>X</span>
                                    {selectedMatch.competitions[0].odds[0]?.drawOdds?.value || '-'}
                                  </div>
                                  <div className='w-full flex flex-col gap-0 py-1 items-center px-4 md:px-6 border border-accent-4 rounded-md'>
                                    <span className='text-sm text-accent-4'>2</span>
                                    {selectedMatch.competitions[0].odds[0]?.awayTeamOdds?.value || '-'}
                                  </div>
                                </div>
                              </div>
                            )
                          }

                          <div className='mt-8 flex justify-between items-center'>
                            {
                                    selectedMatch.competitions?.map((item : any, index : number) => (
                                      <div key={index} >
                                        <span className='capitalize text-sm sm:text-base'>venue: <strong> {item.venue?.fullName}. </strong></span><br />
                                        <span className='capitalize text-sm sm:text-base'>location: <strong> {item.venue?.address?.city}, {item.venue?.address?.country || 'USA'}.</strong></span>
                                       
                                      </div>
                                    ))

                            }
                             <div className='capitalize text-sm sm:text-base'>
                                {formattedDate}.
                              </div>
                            
                          </div>
                        </div>

                      </div>

                      {/* footer */}
                      <div className="flex flex-col gap-4 p-4 border-t-[1px] border-orange">
                        <Button title='close' onclick={() => handleMatchClick(game)} /> 
                      </div>
                      </div>

                    </div>

                  </div>
              </div>
    </div>
  )
}

export default SelectedMatch