import React from 'react';
import CallIcon from '../../../public/assets/call.png';
import TextIcon from '../../../public/assets/text.png';
import VideoIcon from '../../../public/assets/video.png';
import Image from 'next/image';



export const metadata = {
  title: "Timeline | Create Next App"
};

const TimelinePage = () => {
  return (
    <div className='bg-base-200 h-[90vh]'>
      <div className="w-10/12 mx-auto py-14 space-y-6">
        <h2 className='text-5xl font-bold'>Timeline </h2>


        <div className="card card-body bg-base-100 w-full shadow-sm flex-row items-center gap-4">
          <Image src={CallIcon} alt="Call" />
          <div>
            <p className="card-title text-[20px] font-medium">Call<span>with Marcus Johnson</span></p>
            <p>March 19, 2026</p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default TimelinePage;