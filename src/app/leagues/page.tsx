import React from 'react'
import AllLeague from './AllLeague'
import LeagueTabs from './LeagueTabs'

const Page = () => {
  return (
    <div className='mx-2 sm:mx-4 md:mx-8 my-8 bg-primary-2 p-2 sm:p-4 md:p-8'>
        <AllLeague />
      <LeagueTabs />
    </div>
  )
}

export default Page