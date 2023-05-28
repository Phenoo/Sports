import React from 'react'
import UfcName from './UfcName';
import UfcContainer from './UfcContainer';
import Container from '../components/Container';

async function getUfcData(){
    const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/mma/ufc/rankings`, { cache: 'no-store' })
    return res.json()
  }
const Page = async () => {
    const ufcData = getUfcData();
    const ufc = await ufcData;
  return (
    <div className=''>
      <Container>
        <UfcName ufc={ufc}  />
        <UfcContainer  ufc={ufc} />
      </Container>
     
    </div>
  )
}

export default Page