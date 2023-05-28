import Image from 'next/image'
import React from 'react'
import Img1 from './null.png'
import { GiBeltArmor } from 'react-icons/gi';

interface UfcCardProps {
    rank: {
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
    };
  }
  
  const UfcCard: React.FC<UfcCardProps> = ({ rank }) => {
    const { athlete, trend, recordSummary, hasAccolade, current} = rank;
    const isNegative = trend.includes('-');
    const isPositive = trend.includes('+');

    const textStyle = {
        color: isNegative ? 'red' : isPositive ? '#20b46a' : 'inherit',
      };
    
      const arrow = isNegative ? '▼' : isPositive ? '▲' : '';

  return (
    <div className='flex justify-between items-center  border-t-accent-4 border-t py-2'>
        <div className='flex flex-row gap-2 md:gap-4'>
            <div className='flex flex-col w-[30px] items-center justify-center'>
                <span className='text-sm'>
                    {current}
                </span>
                <span className='text-[10px] flex items-center gap-1' style={textStyle}>
                    {trend === '-' ? '' : trend}
                    {trend === '-' ? '' : arrow}
                </span>
            </div>
            <div className='bg-white shadow-sm rounded-full px-1 w-[35px] h-[35px] flex items-center justify-center'>
                <Image src={athlete.headshot || Img1} alt={athlete.shortname} width={50} height={50} className='object-conktain' />
            </div>
            <div className='flex flex-col items-start justify-center'>
                <span className='text-sm'>{athlete.displayName}</span>
                <span className='text-accent-4 text-xs font-bold flex items-center gap-1'>
                    <Image src={athlete.flag || Img1} alt={athlete.displayName} width={20} height={20} className='object-contain' />
                    
                    {athlete.citizenshipCountry}
                </span>
                
            </div>
        </div>
        <div className='flex gap-4 md:gap-8 items-center'>
            <div>
                {hasAccolade && <GiBeltArmor size={24} />}
            </div>
            <h6 className='pr-2 text-sm sm:text-base'>
                {recordSummary}
            </h6>
        </div>
       
    </div>  )
}

export default UfcCard