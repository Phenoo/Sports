'use client'

import React from 'react'

const Container = ({children}: {children : React.ReactNode}) => {
  return (
    <div className='max-w-6xl lg:mx-12 md:mx-8 sm:mx-6 mx-4'>
        {children}
    </div>
  )
}

export default Container