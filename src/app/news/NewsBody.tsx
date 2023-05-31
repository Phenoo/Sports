'use client'

import React from 'react'

import useSWR from 'swr'
import Select from 'react-select';
import { useState } from 'react';
import { sportsSelect } from '../data/data';
import Card from './Card';

const fetcher = (...args: [RequestInfo, RequestInit?]): Promise<any> =>
 fetch(...args).then((res) => res.json());

const NewsBody = () => {
    const [sport, setSport] = useState('baseball')
    const [league, setLeague] = useState('mlb')
   
    const { data, error, isLoading } = useSWR(
     `https://site.api.espn.com/apis/site/v2/sports/${sport}/${league}/news`,
     fetcher
    );

    const customStyles = {
        control: (provided: any) => ({
         ...provided,
         borderRadius: '4px',
         borderColor: 'var(--accent-4)',
         boxShadow: 'none',
         backgroundColor: 'var(--primary)',
         color: 'var(--secondary-2)',
         cursor: 'pointer'
        }),
        option: (provided: any, state: any) => ({
         ...provided,
         backgroundColor: state.isSelected ? '#ff7d19' : '#17181c',
         color: state.isSelected ? '#fcfeff' : '#fcfeff',
         cursor: 'pointer',
         ':hover': {
          backgroundColor: state.isSelected ? '#ff7d19' : '#1e1f23',
          color: state.isSelected ? '#fcfeff' : '#fcfeff'
         }
        }),
        menu: (provided: any) => ({
         ...provided,
         backgroundColor: '#17181c',
      
        }),
        menuList: (provided: any) => ({
         ...provided,
         backgroundColor: 'var(--primary)',
         color: 'var(--secondary)',
        }),
        singleValue: (provided: any) => ({
         ...provided,
         color: 'var(--secondary)',
        }),
        indicatorSeparator: (provided: any) => ({
         ...provided,
         backgroundColor: '#fcfeff',
        }),
       };

       if(!data && data === undefined){
            return <div>Loading</div>
       }

  return (
    <div className='mt-8'>
        <div className='text-xl sm:text-2xl md:text-3xl font-bold text-center'>
            Latest News!
        </div>
        <div className='max-w-3xl mx-auto my-8'>
            <Select placeholder="Major League Baseball" isClearable={false} options={sportsSelect} styles={customStyles} defaultValue={sportsSelect[0]} onChange={(value) => { setSport(value?.league as string); setLeague(value?.value as string) }} />
        </div>

        <div className='max-w-4xl mx-auto my-8'>
        { data &&
            data?.articles?.map((article: any, index: number) => (
            <Card article={article} key={index} />
            ))
        }
        </div>
    </div>
  )
}

export default NewsBody