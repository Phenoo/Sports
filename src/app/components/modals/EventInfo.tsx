'use client'

import useEventModal from '@/app/hooks/useEventModal';
import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import Button from '../Button';
import { Game } from '@/app/types/Game';

interface EventInfoProps {
  game: Game;
}

const EventInfo  = ({selectedMatch}: any) => {
  const eventModal = useEventModal();
  const [showModal, setShowModal] = useState(eventModal.isOpen);
  
  useEffect(() => {
    setShowModal(eventModal.isOpen);

  }, [eventModal.isOpen]);
  if (!eventModal.isOpen) {
    return null;
  }


  return (
    <div className="
      justify-center 
      items-center 
      flex 
      overflow-x-hidden 
      overflow-y-auto 
      fixed 
      inset-0 
      z-50 
      outline-none 
      focus:outline-none
      bg-neutral-800/70
      h-screen
      ">        
      <div className='
          relative 
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto 
          h-full 
          lg:h-auto
          md:h-auto
      '>
          <div className={`translate duration-300 h-full 
              ${showModal ? 'translate-y-0' : 'translate-y-full'} 
              ${showModal ? 'opacity-100' : 'opacity-0'} 
          `}>
            <div  className=' w-full bg-primary translate  md:h-auto border-0 shadow-lg md:relative fixed bottom-0 flex flex-col  outline-none'>
              {/* headers */}
              <div className="
                flex 
                items-center 
                p-6
                rounded-t
                justify-center
                relative
                border-b-[1px]
                "
              >
                <button
                  className="
                    p-1
                    border-0 
                    hover:opacity-70
                    transition
                    absolute
                    left-9
                  "
                  onClick={eventModal.onClose}
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">
                  Match Info
                </div>
              </div>

              {/* body */}

              <div>
                <div>
                  {selectedMatch?.name}
                </div>

              </div>

              {/* footer */}
              <div className="flex flex-col gap-4 mt-3 p-4">
                <hr />
                <Button title='cancel' onclick={eventModal.onClose} />

              </div>
              </div>

            </div>

          </div>
    </div>
  )
}

export default EventInfo