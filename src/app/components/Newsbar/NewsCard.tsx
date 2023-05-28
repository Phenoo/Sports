'use client'

import Image from 'next/image'
import React from 'react'
import { formatDistanceToNow } from 'date-fns';
import Img1 from './null.png'

const NewsCard = ({article}: any) => {
    const dateString = `${article.published}`;
    const date = new Date(dateString);

    const formattedDate = formatDistanceToNow(date, { addSuffix: true });
  return (
    <div className='w-full my-4 bg-primary-2 border border-secondary  rounded-lg cursor-pointer hover:scale-95 transition'>
         <div className='uppercase text-base p-4 py-3 font-bold'>
            {article.headline}
        </div>
        <div className='text-accent-4 uppercase p-4 pt-2'>
            {formattedDate}
        </div>
        <div className=''>
            <Image src={article?.images[1]?.url || Img1} alt={article.headline} width={300} height={300}  className='rounded-b-lg h-[200px] w-full object-cover' />
        </div>
       
    </div>
  )
}

export default NewsCard