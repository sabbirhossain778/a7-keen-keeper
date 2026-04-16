'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useContact } from '@/context/ContactContext';
import CallIcon from '../../../public/assets/call.png';
import TextIcon from '../../../public/assets/text.png';
import VideoIcon from '../../../public/assets/video.png';

const TimelinePage = () => {

  const { selectedContacts } = useContact();
  const [filterType, setFilterType] = useState('all');  

  const filteredContacts = selectedContacts?.filter((contact) => {
    if (filterType === 'all') return true;
    return contact.actionType === filterType;
  });

  return (
    <div className='container mx-auto min-h-[60vh] md:min-h-[70vh]'>
      <div className="w-11/12 md:w-10/12 mx-auto py-6 md:py-14 space-y-4 md:space-y-6">
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Timeline</h2>

      {/* DaisyUI Search Bar */}
        <div className="w-full max-w-xs">
          <select 
            className="select select-bordered bg-white w-full shadow-sm font-medium"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All Interactions</option>
            <option value="call">Call</option>
            <option value="text">Text</option>
            <option value="video">Video</option>
          </select>
        </div>

      {/* Show history card */}
        <div className="space-y-4">
          {filteredContacts?.length > 0 ? (
            filteredContacts.map((contact, index) => (
              <div
                key={index}
                className="card card-body bg-base-100 w-full shadow-sm flex-row items-center gap-4 transition-all hover:shadow-md">

              {/* Timeline History icon */}
                <div className="flex-none">
                  <Image
                    src={
                      contact.actionType === 'call' ? CallIcon :
                        contact.actionType === 'text' ? TextIcon :
                          VideoIcon }
                    alt={contact.actionType} width={30} height={30}
                  />
                </div>

              {/* details */}
                <div className="flex-1">
                  <p className="card-title text-[18px] md:text-[20px] font-medium capitalize">
                    {contact.actionType} <span className="font-normal text-gray-500">with {contact.name}</span>
                  </p>
                  <p className="text-gray-500 text-sm">{contact.date}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col h-64 justify-center items-center w-full  rounded-2xl border-2 border-base-300">
              <p className="text-gray-500 text-lg">
                No interactions found.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;




//   return (
//     <div className='bg-base-200 min-h-screen'>
//       <div className="w-10/12 mx-auto py-14 space-y-6">
//         <h2 className='text-5xl font-bold'>Timeline</h2>

//         {/* ৩. সার্চ বক্সের পরিবর্তে শুধুমাত্র ডেইজিইউআই সিলেক্ট ফিল্টার */}
//         <div className="w-full max-w-xs">
//           <select 
//             className="select select-bordered bg-white w-full shadow-sm font-medium"
//             value={filterType}
//             onChange={(e) => setFilterType(e.target.value)}
//           >
//             <option value="all">All Interactions</option>
//             <option value="call">Call</option>
//             <option value="text">Text</option>
//             <option value="video">Video</option>
//           </select>
//         </div>

//         {/* ইতিহাস কার্ড লুপ */}
//         <div className="space-y-4">
//           {filteredContacts?.length > 0 ? (
//             filteredContacts.map((contact, index) => (
             
//       </div>
//     </div>
//   );
// };

// export default TimelinePage;