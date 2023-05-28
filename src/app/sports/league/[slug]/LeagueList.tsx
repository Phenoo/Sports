'use client'
import React, { useEffect, useState } from 'react'
import TeamCard from './TeamCard'

interface Team {
    team: {
      id: string;
      logos: {
        href: string;
      }[];
      name: string;
    };
  }
  
  interface TeamCardProps {
    team: Team;
    index: number;
    slug: string;
  }

interface League {
    name: string;
    teams: Team[];
  }
  
  interface Sport {
    leagues: League[];
  }
  
  interface LeagueListProps {
    leagueData: {
      sports: Sport[];
    };
    slug: string;
  }

  const LeagueList: React.FC<LeagueListProps> = ({ leagueData, slug }) => {
    return (
    <div className=''>
        {
            leagueData.sports[0].leagues?.map((league) => (
                <div key={league.name}>
                    <div>
                        <div className='p-2 md:p-4 flex items-center gap-3 '>
                        <div className='w-[30px] md:w-[40px] text-accent-4 text-lg'>#</div>
                        <div className='text-accent-4'>Team</div>
                        </div>
                        {
                            league.teams.map((team, index : number) => (
                                <TeamCard key={index} team={team} index={index} slug={slug} />
                            ))
                        }
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default LeagueList