'use client'

import React from 'react'
import useSWR from 'swr'
import NewsCard from './NewsCard'
import Loader from '../Loader';



interface NewsBarProps{
  league: string;
  sport: string;
}


const fetcher = (...args: [RequestInfo, RequestInit?]): Promise<any> => 
  fetch(...args).then((res) => res.json())

  


const NewsBar:React.FC<NewsBarProps> = ({league, sport}) => {
 
    const { data, error, isLoading } = useSWR(
      ` https://site.api.espn.com/apis/site/v2/sports/${sport}/${league}/news`,
      fetcher);

      if(!data && data === undefined ){
        return <Loader />
      }

   return (
    <div className='mb-8'>
      <div className='text-2xl lg:text-3xl uppercase font-bold'>
       {sport} news
      </div>


      <div className='flex flex-col justify-center items-center'>
      { data &&
        data?.articles?.map((article: any, index: number) => (
          <NewsCard article={article} key={index} />
        ))
      }
     
      </div>

    </div>
  )
}

export default NewsBar