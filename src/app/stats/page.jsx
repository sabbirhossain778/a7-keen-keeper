import React from 'react';
export const metadata = {
    title: "Stats | Create Next App"
};

const StatsPage = () => {
    return (
        <div className='bg-base-200 h-[80vh]'>
            <div className="w-10/12 mx-auto py-14 space-y-6">
                <h2 className='text-5xl font-bold'>Friendship Analytics </h2>
                <div className="card bg-base-100 w-full shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title text-[20px] font-medium">By Interaction Type</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsPage;