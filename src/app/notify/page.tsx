import React from 'react'
import getCurrentUser from '../actions/getCurrentUser'
import NotifyBody from './NotifyBody'
import Container from '../components/Container'


const Page = async () => {
    const currentUser = await getCurrentUser()
  return (
    <div className='min-h-screen'>
      <Container>
        <NotifyBody currentUser={currentUser} />
      </Container>
    </div>
  )
}

export default Page