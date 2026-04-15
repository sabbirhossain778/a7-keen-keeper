'use client';

import React from 'react';
import CallIcon from '../../../public/assets/call.png';
import TextIcon from '../../../public/assets/text.png';
import VideoIcon from '../../../public/assets/video.png';
import Image from 'next/image';
import { useContact } from '@/context/ContactContext';

const TimelinePage = () => {
  const { selectedContacts } = useContact();

  return (
    <div className='bg-base-200 min-h-screen'>
      <div className="w-10/12 mx-auto py-14 space-y-6">
        <h2 className='text-5xl font-bold'>Timeline</h2>
        <label className="input">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>

        {selectedContacts?.length > 0 ? (
          selectedContacts.map((contact, index) => (
            <div key={index} className="card card-body bg-base-100 w-full shadow-sm flex-row items-center gap-4">
              <Image
                src={
                  contact.actionType === 'call' ? CallIcon :
                    contact.actionType === 'text' ? TextIcon :
                      VideoIcon
                }
                alt={contact.actionType}
                width={40}
                height={40} />
              <div>
                <p className="card-title text-[20px] font-medium capitalize">
                  {contact.actionType} <span>with {contact.name}</span>
                </p>
                <p className="text-gray-500 text-sm">{contact.date}</p>
                <p className="text-sm italic text-gray-400">Status: {contact.status}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex h-64 justify-center items-center w-full">
            <p className="text-gray-500 text-lg">No interactions yet. Start connecting with your friends!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelinePage;