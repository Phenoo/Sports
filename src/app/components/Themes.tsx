'use client' 

import { ThemeProvider } from 'next-themes'
import React from 'react'

const Themes = ({
    children} :
    {
  children: React.ReactNode
    }
) => {
  return (
    <>
        <ThemeProvider>
            {children}
        </ThemeProvider>
    </>
  )
}

export default Themes