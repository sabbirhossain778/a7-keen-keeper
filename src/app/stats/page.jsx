import PieChartPage from '@/components/PieChart';
import React from 'react';
export const metadata = {
    title: "Stats | Keen Keeper",
};




const StatsPage = () => {
    return (
        <div className='bg-base-200 min-h-[70vh]'>
            <div className="w-10/12 mx-auto py-14 space-y-6">
                <h2 className='text-5xl font-bold'>Friendship Analytics </h2>
                <div className="card card-body bg-base-100 w-full shadow-sm pb-20 pt-10">
                    <h2 className="card-title text-[20px] font-medium">By Interaction Type</h2>
                    <PieChartPage></PieChartPage>
                </div>
            </div>
        </div>
    );
};

export default StatsPage;