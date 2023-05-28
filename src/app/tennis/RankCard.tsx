'use client'

import Image from 'next/image'
import React from 'react'
import Img1 from './null.png'


interface RankCardProps {
    rank: {
      athlete: {
        headshot: string;
        shortname: string;
        flagAltText: string;
      };
      trend: string;
      points: number;
      current: number;
    };
  }
  
  const RankCard: React.FC<RankCardProps> = ({ rank }) => {
    const { athlete, trend, points, current} = rank;
    const isNegative = trend.includes('-');
    const isPositive = trend.includes('+');

    const textStyle = {
        color: isNegative ? 'red' : isPositive ? '#20b46a' : 'inherit',
      };
    
      const arrow = isNegative ? '▼' : isPositive ? '▲' : '';


  return (
    <div className='flex justify-between items-center  border-t-accent-4 border-t p-2'>
        <div className='flex flex-row gap-2 md:gap-4'>
            <div className='flex flex-col w-[40px] items-center justify-center'>
                <span className='text-sm lg:text-base'>
                    {current}
                </span>
                <span className='text-[10px] flex items-center gap-1' style={textStyle}>
                    {trend === '-' ? '' : trend}
                    {trend === '-' ? '' : arrow}
                </span>
            </div>
            <div className='bg-white shadow-sm rounded-full px-1 w-[50px] h-[50px] flex items-center justify-center'>
                <Image src={athlete.headshot || Img1} alt={athlete.shortname} width={50} height={50} className='rounded-full object-contain' />
            </div>
            <div className='flex flex-col items-start justify-center'>
                <span className='text-sm lg:text-base'>{athlete.shortname}</span>
                <span className='text-accent-4 text-xs lg:text-sm font-bold'>{athlete.flagAltText}</span>
                
            </div>
        </div>

        <h6 className='pr-2 text-sm sm:text-base'>
            {points}
        </h6>
    </div>
  )
}

export default RankCard