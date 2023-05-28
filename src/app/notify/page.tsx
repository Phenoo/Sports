import React from 'react'
import getCurrentUser from '../actions/getCurrentUser'
import NotifyBody from './NotifyBody'


const Page = async () => {
    const currentUser = await getCurrentUser()
  return (
    <div className='min-h-screen'>
        <NotifyBody currentUser={currentUser} />
    </div>
  )
}

export default Page