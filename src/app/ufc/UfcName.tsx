'use client'
import React from 'react'
import { SiUfc} from 'react-icons/si'
const UfcName = ({ufc}: any) => {
    console.log()
  return (
    <div className='text-xl sm:text-2xl md:text-3xl'>
        <SiUfc size={30} />
        {ufc.leagues[0].name}
    </div>
  )
}

export default UfcName