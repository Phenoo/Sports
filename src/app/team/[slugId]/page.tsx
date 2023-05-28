import React, { Suspense } from 'react'
import Team from './Team'
import Matches from './Matches'
import Loader from '@/app/components/Loader'
import Container from '@/app/components/Container'


async function getTeamData(slugId: string){
    const res = await fetch(`http://site.api.espn.com/apis/site/v2/sports/${slugId}`)
    return res.json()
}

async function getTeamMatchesData(slugId: string){
  const res = await fetch(`http://site.api.espn.com/apis/site/v2/sports/${slugId}/schedule`, { cache: 'no-store' })
  return res.json()
}



const Page = async ({
    params: {slugId},} : {
        params: {slugId : string}
    }) => {
        const teamData = getTeamData(decodeURIComponent(slugId))
        const teamMatchesData = getTeamMatchesData(decodeURIComponent(slugId))
        const team = await teamData;
        const teamMatches = await teamMatchesData;
  return (
    <div className='bg-primary-2 '>
      <Container>
        <Suspense fallback={<Loader />}>
          <Team team={team} />
          <Matches teamMatches={teamMatches} />
        </Suspense>
      </Container>
     
    </div>
  )
}

export default Page