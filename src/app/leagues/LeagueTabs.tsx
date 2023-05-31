'use client'

import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { sportsData, tennisSelect, ufcSelect } from '../data/data';
import Link from 'next/link';

function classNames(...classes: (string | undefined | null | boolean)[]): string {
    return classes.filter(Boolean).join(' ');
  }
  


export default function LeagueTabs() {


  return (
    <div className="w-full py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-2 flex-row  md:overflow-auto overflow-x-scroll rounded-xl bg-white-900/20 py-1 w-full">
          {sportsData.map((category) => (
            <Tab
              key={category.sport}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg px-2 py-1 sm:py-2.5  text-xs sm:text-sm font-medium leading-5 text-orange',
                  'ring-secondary ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-secondary text-orange font-bold'
                    : 'border border-secondary hover:bg-secondary hover:text-secondary'
                )
              }
            >
              {category.sport}

            </Tab>
          ))}

           {tennisSelect.map((category) => (
            <Tab
              key={category.sport}
              className={({ selected }) =>
                classNames(
                    'w-full rounded-lg px-2 py-2.5   text-xs sm:text-sm font-medium leading-5 text-orange',
                    'ring-secondary ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                    ? 'bg-secondary text-orange shadow'
                    : 'border border-secondary hover:bg-secondary hover:text-secondary'
                )
              }
            >
              {category.sport} 
              
            </Tab>
          ))}

            {ufcSelect.map((category) => (
                <Tab
                key={category.sport}
                className={({ selected }) =>
                    classNames(
                        'w-full rounded-lg px-2 py-2.5  text-xs sm:text-sm font-medium leading-5 text-orange',
                        'ring-secondary ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                        selected
                        ? 'bg-secondary text-orange shadow'
                        : 'border border-secondary hover:bg-secondary hover:text-secondary'
                    )
                }
                >
                {category.sport} 
                </Tab>
            ))}

        </Tab.List>
        <Tab.Panels className="mt-4 h-screen w-full">
          {sportsData.map((sport, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-sm bg-primary px-0 md:p-3 h-full py-4',
                'ring-primary ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2'
              )}
            >
                <div key={sport.sport} className='relative flex flex-col'>
                    <div className='text-lg my-4 sm:text-xl md:text-2xl font-bold px-2'>
                        Top leagues
                    </div>
                  {sport.leagues.map((league) => (
                      <Link href={`/sports/league/${encodeURIComponent(league.slug)}`} key={league.abbreviation} className='hover:text-orange transition-all cursor-pointer py-1 px-4 w-full border-y border-accent-4'>
                          {league.label}
                      </Link>
                  ))}
                </div>
            </Tab.Panel>
          ))}

            {tennisSelect.map((sport, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-sm bg-primary px-0 md:p-3 h-full py-4',
                'ring-primary ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2'
              )}
            >
                <div key={sport.sport} className='relative flex flex-col'>
                    <div className='text-lg my-4 sm:text-xl md:text-2xl font-bold px-2'>
                        Top leagues
                    </div>
                  {sport.leagues.map((league) => (
                        <Link href={`/tennis/${encodeURIComponent(league.slug)}`}  key={league.abbreviation} className='hover:text-orange transition-all cursor-pointer py-1 px-4 w-full border-y border-accent-4'>
                          {league.label}
                      </Link>
                  ))}
                </div>
            </Tab.Panel>
          ))}

            {ufcSelect.map((sport, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-sm bg-primary px-0 md:p-3 h-full py-4',
                'ring-primary ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2'
              )}
            >
                <div key={sport.sport} className='relative flex flex-col'>
                    <div className='text-lg my-4 sm:text-xl md:text-2xl font-bold px-2'>
                        Top leagues
                    </div>
                  {sport.leagues.map((league) => (
                      <Link href={`${league.slug}`} key={league.abbreviation} className='hover:text-orange transition-all cursor-pointer py-1 px-4 w-full border-y border-accent-4'>
                          {league.label}
                      </Link>
                  ))}
                </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
