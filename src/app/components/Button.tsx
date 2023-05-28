'use client'
import React from 'react'

interface ButtonProps {
    title: string;
    onclick: () => void;
}

const Button: React.FC<ButtonProps> = ({title, onclick}) => {
  return (
    <div>
        <button className='bg-orange text-white capitalize py-2 px-6 md:px-8 rounded-sm hover:opacity-80 transition' onClick={onclick}>
            {title}
        </button>
    </div>
  )
}

export default Button