import React from 'react'
import Rankings from '../Rankings';
import Container from '@/app/components/Container';
import TennisContainer from '../TennisContainer';

async function getTennis(slug: string){
    const res = await fetch(`http://site.api.espn.com/apis/site/v2/sports/${slug}/rankings`)
    return res.json()
}

const Page = async ({params: {slug},}
  : {params: {slug: string}}
  ) => {
    const tennisData = getTennis(decodeURIComponent(slug));
    const tennis = await tennisData;
  return (
    <div className='bg-primary-2'>
      <Container>
        <Rankings tennis={tennis} />
        <TennisContainer />
      </Container>
    </div>
  )
}

export default Page