import React from 'react'
import Loader from '../components/Loader'
import Container from '../components/Container'

const Page = () => {
  return (
    <Container>

    <div className='min-h-screen flex justify-center'>
      <div className='flex justify-center items-center h-full'>
        <div>Working in Progress</div>
        <Loader />
      </div>
    </div>
    </Container>

  )
}

export default Page