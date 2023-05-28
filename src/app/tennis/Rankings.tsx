'use client'

import React from 'react'
import RankCard from './RankCard'
import { format } from 'date-fns'
import Image from 'next/image';


interface RankingsProps {
    tennis: {
      rankings: {
        update: string;
        name: string;
        ranks: {
          rank: number;
          player: string;
          athlete: {
            headshot: string;
            shortname: string;
            flagAltText: string;
          };
          trend: string;
          points: number;
          current: number
        }[];
      }[];
    };
  }
  
  const Rankings: React.FC<RankingsProps> = ({ tennis }) => {
    console.log(tennis.rankings[0])
    const today = new Date(tennis.rankings[0].update);
    const formattedDate = format(today, 'yyyy/MM/dd, HH:mm');
  return (
    <div>
      <div className='flex items-center gap-2 md:gap-4'>
        <div>
            <Image src="https://a.espncdn.com/combiner/i?img=/redesign/assets/img/icons/ESPN-icon-tennis.png" alt='logo' width={50} height={50} />
        </div>
          <div className='text-xl sm:text-2xl md:text-3xl p-4'>
              {tennis.rankings[0].name} Tennis Rankings
          </div>
      </div>
   
        <hr />

        <div className='w-full p-2'>
            <h6 className='text-right text-accent-4 text-sm'>Last Updated: {formattedDate}</h6>
        </div>

        <div className='flex justify-between items-center text-accent-4 mb-3 mt-8 px-4 '>
            <div className='flex flex-row gap-4'>
                <div className='text-sm md:text-base '>Rank</div>
                <div className='text-sm md:text-base border-l pl-4'>Player</div>
            </div>
            <div>
                <h6>
                  Total  Points
                </h6>
            </div>
        </div>
        {
            tennis.rankings[0].ranks.map((rank, i : number) => (
                <RankCard rank={rank} key={i} />
                ))   
        }
    </div>
  )
}

export default Rankings