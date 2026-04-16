import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='h-[70vh] bg-purple-100 flex flex-col gap-4 items-center justify-center font-bold text-4xl text-black'>
            <h2>This page is not found</h2>
            <Link href={'/'}>
                <button className='btn btn-primary font-bold'>Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;