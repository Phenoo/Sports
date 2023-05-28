import React from 'react'
import getCurrentUser from '../actions/getCurrentUser'
import ProfileContainer from './ProfileContainer'

const Page = async () => {
    const currentUser  = await getCurrentUser()
  return (
    <div className='pt-10 md:pt-16 px-4 md:px-8'>
        <div className='text-2xl md:text-3xl lg:text-4xl font-bold  '>
            My Dashboard
        </div>
        <ProfileContainer currentUser={currentUser} />

    </div>
  )
}

export default Page