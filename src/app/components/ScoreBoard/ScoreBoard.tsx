'use client'

import Image from 'next/image';
import React, { Suspense } from 'react'
import ScoreContainer from './ScoreContainer';
import useSWR from 'swr';
import FightContainer from '@/app/ufc/FightContainer';
import TennisContainer from '@/app/tennis/TennisContainer';

const fetcher = (...args: [RequestInfo, RequestInit?]): Promise<any> => 
  fetch(...args).then((res) => res.json());

const ScoreBoard = () => {
  const { data, error, isLoading} = useSWR(
  `https://site.api.espn.com/apis/site/v2/sports/tennis/atp/scoreboard`,
  fetcher);

  console.log(data)



  return (
    <div className='lg:col-span-8'>
      <div className='bg-primary-2 rounded-lg p-2 py-4 sm:p-4 md:p-8'>
        <div className='text-xl font-bold'>Matches</div>
        <ScoreContainer league='eng.1' sport='soccer' />
        <ScoreContainer league='esp.1' sport='soccer' />
        <ScoreContainer league='ita.1' sport='soccer' />
        <ScoreContainer league='fra.1' sport='soccer' />
        <ScoreContainer league='ger.1' sport='soccer' />
        <ScoreContainer league='ned.1' sport='soccer' />
        <ScoreContainer league='usa.1' sport='soccer' />
        <ScoreContainer league='nba' sport='basketball' />
        <ScoreContainer league='mlb' sport='baseball' />
        <ScoreContainer league='nhl' sport='hockey' />
        <ScoreContainer league='nfl' sport='football' />
        <FightContainer />        
        <TennisContainer />

      </div>
    </div>
  )
}

export default ScoreBoard