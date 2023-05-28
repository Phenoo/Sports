'use client'

import React from 'react'
import RadioTheme from './RadioTheme'

const Settings = () => {
  return (
    <div className='mt-8'> 
         <div className=''>
                Enjoy the website!
            </div>
            <div className='text-xl font-bold mt-8'>
                Settings
            </div>
            <hr />
            <div className='my-8'>
                <div className='text-lg font-bold'>
                    Theme
                </div>
                <RadioTheme />
            </div>
    </div>
  )
}

export default Settings