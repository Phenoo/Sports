'use client'

import React from 'react'
import NewsBar from './NewsBar';


const NewsContainer = () => {

  return (
    <div className='lg:col-span-4'>
      <NewsBar league='eng.1' sport='soccer' />
      <NewsBar  league='nba' sport='basketball'/>
    </div>
  )
}

export default NewsContainer