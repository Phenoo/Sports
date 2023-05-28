import React, { Suspense } from 'react'
import Team from './Team'
import Matches from './Matches'


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
    <div className='p-2 md:p-4 lg:p-8 bg-primary-2 mx-2 md:mx-4'>
      <Suspense fallback={<p>Loading</p>}>
        <Team team={team} />
        <Matches teamMatches={teamMatches} />
      </Suspense>
    </div>
  )
}

export default Page