import React from 'react'
import UfcName from './UfcName';
import UfcContainer from './UfcContainer';

async function getUfcData(){
    const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/mma/ufc/rankings`, { cache: 'no-store' })
    return res.json()
  }
const Page = async () => {
    const ufcData = getUfcData();
    const ufc = await ufcData;
  return (
    <div className='mx-2 sm:mx-4 md:mx-8'>
        <UfcName ufc={ufc}  />
        <UfcContainer  ufc={ufc} />
    </div>
  )
}

export default Page