'use client';
import React from 'react';
import { toast } from 'react-toastify';
import { useContact } from '@/context/ContactContext';
import { MdOutlineWifiCalling3, MdOutlineHistory } from "react-icons/md";
import { BsChatLeftText } from "react-icons/bs";
import { VscDeviceCameraVideo } from "react-icons/vsc";

const ContactActions = ({ friend }) => {
    const { selectedContacts, setSelectedContacts } = useContact();
    const personalHistory = selectedContacts.filter(item => item.id === friend.id);

    const handleClick = (action) => {
        const newEntry = {
            ...friend,
            actionType: action,
            date: new Date().toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            })
        };

        setSelectedContacts((prev) => [newEntry, ...prev]);
        toast.success(`${action} with ${friend.name}...`);
    };

    return (
        <div className='space-y-4 md:space-y-6'>

            {/* Quick Check-In Buttons */}
            <div className="card bg-base-100 w-full shadow-sm p-4 md:p-6">
                <h2 className="text-xl font-medium mb-4">Quick Check-In</h2>
                <div className='flex justify-between gap-3 md:gap-6'>
                    <button onClick={() => handleClick('call')} className='flex-1 active:scale-95'>
                        <div className="card bg-base-200 p-4 items-center gap-2 hover:bg-base-300 transition-all">
                            <MdOutlineWifiCalling3 size={24} />
                            <span className='font-medium'>Call</span>
                        </div>
                    </button>

                    <button onClick={() => handleClick('text')} className='flex-1 active:scale-95'>
                        <div className="card bg-base-200 p-4 items-center gap-2 hover:bg-base-300 transition-all">
                            <BsChatLeftText size={22} />
                            <span className='font-medium'>Text</span>
                        </div>
                    </button>

                    <button onClick={() => handleClick('video')} className='flex-1 active:scale-95'>
                        <div className="card bg-base-200 p-4 items-center gap-2 hover:bg-base-300 transition-all">
                            <VscDeviceCameraVideo size={24} />
                            <span className='font-medium'>Video</span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Recent Interactions List */}
            <div className="card bg-base-100 w-full shadow-sm p-4 md:p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-medium">Recent Interactions</h2>
                    <button className='btn btn-ghost btn-sm'><MdOutlineHistory size={20} />Full History</button>
                </div>

                {/* Recent Interactions History */}
                <div className="space-y-3">
                    {personalHistory.length > 0 ? (
                        personalHistory.map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-4  rounded-xl bg-white shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="text-gray-500">
                                        {item.actionType === 'call' && <MdOutlineWifiCalling3 size={22} />}
                                        {item.actionType === 'text' && <BsChatLeftText size={20} />}
                                        {item.actionType === 'video' && <VscDeviceCameraVideo size={22} />}
                                    </div>
                                    <div>
                                        <p className="font-bold capitalize">{item.actionType}</p>
                                        <p className=" text-gray-500">Asked for career advice</p>
                                    </div>
                                </div>
                                <p className="font-medium text-gray-500">{item.date}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-400 py-6 italic">No recent interactions recorded.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactActions;