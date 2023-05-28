import React from 'react'
import AllLeague from './AllLeague'
import LeagueTabs from './LeagueTabs'
import Container from '../components/Container'

const Page = () => {
  return (
    <div className='bg-primary-2'>
      <Container>
        <AllLeague />
        <LeagueTabs />
      </Container>
       
    </div>
  )
}

export default Page