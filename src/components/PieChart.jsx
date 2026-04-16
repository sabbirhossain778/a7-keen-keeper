'use client';
import React from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { useContact } from '@/context/ContactContext';


const PieChartPage = () => {
    const { selectedContacts } = useContact();

    const callCount = selectedContacts?.filter(c => c.actionType === 'call').length || 0;
    const textCount = selectedContacts?.filter(c => c.actionType === 'text').length || 0;
    const videoCount = selectedContacts?.filter(c => c.actionType === 'video').length || 0;

    const data = [
        { name: 'Call', value: callCount, fill: '#31C950' },
        { name: 'Text', value: textCount, fill: '#FFBB28' },
        { name: 'Video', value: videoCount, fill: '#0088FE' }
    ];

    if (selectedContacts?.length === 0) {
        return (
            <div className="h-30 flex items-center justify-center">
                <p className="text-[18px] flex justify-center text-gray-500">No interaction data available yet.</p>
             </div>
        );
    }

    return (
        <div>
            <PieChart style={{ width: '100%', maxWidth: '300px', margin: 'auto', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    cornerRadius="50%"
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                />
                <Legend></Legend>
                <Tooltip></Tooltip>
            </PieChart>
        </div>
    );
};

export default PieChartPage;