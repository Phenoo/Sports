'use client'

import { formatDistanceToNow } from 'date-fns';
import Image from 'next/image';
import React from 'react'
import Img1 from './null.png'
import { Article } from '../types/Game';


interface CardProps {
    article: Article;
  }

  const Card: React.FC<CardProps> = ({ article }) => {
    const dateString = `${article.published}`;
    const date = new Date(dateString);

    const formattedDate = formatDistanceToNow(date, { addSuffix: true });
  return (
    <div className='w-full flex flex-col md:flex-row my-4  border border-secondary  rounded-sm cursor-pointer hover:scale-95 transition'>
        <div className='w-full  md:w-[400px] h-[200px]'>
            <Image src={article?.images[1]?.url || Img1} alt={article.headline} width={350} height={400}  className=' w-full md:w-[350px] h-[200px]' />
        </div>

        <div className='p-4 w-full sm:w-1/2'>

            <div className='uppercase text-base font-bold'>
                {article.headline}
            </div>
            <div className='text-accent-4 uppercase font-bold text-xs md:text-sm  my-2'>
                {formattedDate}
            </div>
            <div>
               { article.description}
            </div>
            
        </div>

       
    </div>
  )
}



export default Card