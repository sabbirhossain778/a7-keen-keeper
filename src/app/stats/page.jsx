import PieChartPage from '@/components/PieChart';
import React from 'react';
export const metadata = {
    title: "Stats | Keen Keeper",
};


// w-11/12 md:w-10/12 mx-auto py-6 md:py-14 space-y-4 md:space-y-6

const StatsPage = () => {
    return (
        <div className='container mx-auto min-h-[60vh] md:min-h-[70vh]'>
            <div className="w-11/12 md:w-10/12 mx-auto py-8 md:py-14 space-y-6">
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Friendship Analytics </h2>
                <div className="card card-body bg-base-100 w-full shadow-sm pb-20 pt-10">
                    <h2 className="card-title text-[20px] font-medium">By Interaction Type</h2>
                    <PieChartPage></PieChartPage>
                </div>
            </div>
        </div>
    );
};

export default StatsPage;