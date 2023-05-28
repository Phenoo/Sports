import React from 'react'
import getCurrentUser from '../actions/getCurrentUser'
import ProfileContainer from './ProfileContainer'
import Container from '../components/Container'

const Page = async () => {
    const currentUser  = await getCurrentUser()
  return (
    <div className='mt-4 md:mt-8'>
      <Container>

        <div className='text-2xl md:text-3xl lg:text-4xl font-bold  '>
            My Dashboard
        </div>
        <ProfileContainer currentUser={currentUser} />
        </Container>

    </div>
  )
}

export default Page