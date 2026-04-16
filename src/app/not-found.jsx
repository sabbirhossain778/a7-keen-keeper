// import Link from 'next/link';
// import React from 'react';

// const NotFoundPage = () => {
//     return (
//         <div className='h-[70vh] bg-purple-100 flex flex-col gap-4 items-center justify-center font-bold text-4xl text-black'>
//             <h2>This page is not found</h2>
//             <Link href={'/'}>
//                 <button className='btn btn-primary font-bold'>Back to Home</button>
//             </Link>
//         </div>
//     );
// };

// export default NotFoundPage;


import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='h-[70vh] flex flex-col gap-5 items-center justify-center px-4'>
            <h1 className='text-8xl font-black text-[#244d3f] opacity-20'>404</h1>

            <h2 className='text-2xl md:text-3xl font-bold text-gray-700'>
                This page is not found
            </h2>

            <Link href={'/'}>
                <button className='px-6 py-3 bg-[#244d3f] text-white font-bold rounded-lg'>
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default NotFoundPage;
