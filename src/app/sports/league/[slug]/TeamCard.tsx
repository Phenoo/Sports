'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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

const TeamCard: React.FC<TeamCardProps> = ({ team, index, slug }) => {
  const slugId =`${decodeURIComponent(slug)}/teams/${team.team.id}`
  return (
    <div className='p-2 md:p-4 flex items-center gap-3 border-t-accent-4 border-t hover:scale-95 transition-all'>
      <div className='bg-secondary text-secondary w-[20px] h-[20px] md:w-[40px] md:h-[40px] transform rounded-sm origin-center flex justify-center items-center text-xs md:text-lg font-bold '
      style={{
        clipPath: 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)',
      }}>
      
        {index + 1}
      </div>

      <div className='flex items-center gap-3'>
        <div>
          <Image  src={team.team.logos[0].href} alt='logo' width={30} height={30} className='rounded-full object-contain'  />
        </div>
        <div>
          <Link href={`/team/${encodeURIComponent(slugId)}`} className='hover:font-bold transition'>
            {team.team.name}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TeamCard