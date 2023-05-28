import React from 'react'
import Rankings from '../Rankings';

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
    <div className='bg-primary-2 mx-2 md:mx-4 py-4'>
        <Rankings tennis={tennis} />
    </div>
  )
}

export default Page