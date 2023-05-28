'use client'

import React from 'react'

const Badge = () => {
  return (
    <div className='flex flex-row gap-4 items-center  my-4'>
        <div className='flex items-center gap-2'>
            <div className='rounded-sm  h-2 w-6 md:h-3 bg-orange'></div>
            <div className='text-sm'>Final</div>
        </div>
        <div className='flex items-center gap-2'>
            <div className='rounded-sm  h-2 w-6 md:h-3 bg-green'></div>
            <div className='text-sm'>Active</div>
        </div>
        <div className='flex items-center gap-2'>
            <div className='rounded-sm  h-2 w-6 md:h-3 bg-gray-600'></div>
            <div className='text-sm'>Scheduled</div>
        </div>
    </div>
  )
}

export default Badge