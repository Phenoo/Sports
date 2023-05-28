import React from 'react'
import Loader from '../components/Loader'

const Page = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex justify-center items-center  h-full'>
        <Loader />
      </div>
    </div>
  )
}

export default Page