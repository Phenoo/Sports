import GameCard from '@/app/components/ScoreBoard/GameCard';
import React, { Suspense } from 'react'
import LeagueList from './LeagueList';
import Data from './Data';
import LeagueName from './LeagueName';
import Container from '@/app/components/Container';

async function getLeague(slug: string){
    const res = await fetch(`http://site.api.espn.com/apis/site/v2/sports/${slug}/teams`, { cache: 'no-store' })
    return res.json()
}

async function getLeagueData(slug: string){
  const res = await fetch(`http://site.api.espn.com/apis/site/v2/sports/${slug}/scoreboard`, { cache: 'no-store' })
  return res.json()
}

export default async function LeaguePage({
    params: { slug },
    }: {
        params: {slug: string}
    }) 
    {
    const leagueTeam = getLeague(decodeURIComponent(slug));
    const leagueDataSlug = getLeagueData(decodeURIComponent(slug));
    const league = await leagueTeam;
    const leagueData = await leagueDataSlug;
  return (
    <div className='bg-primary-2'>
      <Container>
        <Suspense fallback={<div>Loading...</div>}> 
           <LeagueName leagueData={leagueData}  />
           <LeagueList leagueData={league} slug={slug} />
           <Data leagueData={leagueData} />
        </Suspense>
      </Container>

    </div>
  )
}

