'use client'
import React, { Fragment, useState } from 'react'



import { Listbox, Transition } from '@headlessui/react'
import { FaCheck, FaChevronDown } from 'react-icons/fa'
import { BsChevronExpand } from 'react-icons/bs'
import UfcCard from './UfcCard'



interface UfcContainerProps {
    ufc: {
      rankings: {
        id: number;
        name: string;
        ranks: {
          id: number;
          rank: number;
          player: string;
          record: string;
          athlete: {
            headshot: string;
            shortname: string;
            displayName: string;
            flag: string;
            citizenshipCountry: string;
          };
          trend: string;
          recordSummary: string;
          hasAccolade: boolean;
          current: string;
        }[];
      }[];
    };
  }
  
  const UfcContainer: React.FC<UfcContainerProps> = ({ ufc }) => {
    const [index, setIndex] = useState(0)
    const [clicked, setClicked] = useState(false)
    console.log(ufc.rankings[index])
    console.log(index)

    const handleClick = (num: number) => {
        setIndex(num)
        setClicked(!clicked)
    }

  return (
    <div className='relative my-8'>

        <div className='flex justify-between items-center flex-col md:flex-row'>
            <div className='text-base md:text-xl font-bold mb-2'>
                UFC Rankings
            </div>
            <div className='w-full sm:w-72 md:w-80'>
                <div onClick={() => setClicked(!clicked)} className='cursor-pointer flex justify-between items-center border border-secondary text-xs p-2' >
                    <span>{ufc.rankings[index].name}</span>
                    <span><BsChevronExpand /></span>
                </div>
                { clicked &&
                <div className='flex flex-col mt-2  flex-wrap transition-all absolute bg-primary'>
                    { ufc.rankings.slice(0, 10).map((rank) => (
                        <div key={rank.id} onClick={() => handleClick(rank.id)} className='cursor-pointer text-xs border border-secondary text-primary  px-4 py-2 hover:bg-orange bg:text-white transition-all'>
                            <div>
                            {rank.name}
                            </div>
                        </div>
                ))}
                </div>
            }
            </div>
        </div>

        <div className='my-12'>
                    <div className='flex justify-between items-center text-accent-4 mb-3 mt-8 px-4 '>
                        <div className='flex flex-row gap-4'>
                            <div className='text-sm md:text-base '>Rank</div>
                            <div className='text-sm md:text-base border-l pl-4'>Player</div>
                        </div>
                        <div className='flex gap-4 md:gap-8 items-center'>
                            <div>
                                A
                            </div>
                            <h6 className='text-sm md:text-base'>
                                Record
                            </h6>
                        </div>
                    </div>
            {
                ufc.rankings[index].ranks.map((rank) => (
                    <UfcCard rank={rank} key={rank.id} />
                ))
            }
        </div>
    </div>
  )
}

export default UfcContainer