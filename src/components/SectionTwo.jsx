'use client';
import React from 'react';
import { toast } from 'react-toastify';
import { MdOutlineHistory } from "react-icons/md";
import ContactActions from './ContactActions';
import { useContact } from '@/context/ContactContext';
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { BsChatLeftText } from "react-icons/bs";
import { VscDeviceCameraVideo } from "react-icons/vsc";

const SectionTwo = ({ friend }) => {
    const { days_since_contact, goal, next_due_date } = friend;

    const { selectedContacts } = useContact();
    const personalHistory = selectedContacts.filter(item => item.id === friend.id);

    const handleClick = (action) => {
        if (action === 'call') {
            toast.success(`Calling ${friend.name}...`);
        }
        else if (action === 'text') {
            toast.success(`Texting ${friend.name}...`);
        }
        else if (action === 'video') {
            toast.success(`Video calling ${friend.name}...`);
        }
    };

    return (
        <div className='space-y-6'>

            <div className='flex flex-3 justify-between gap-6'>
                <div className="card bg-base-100 shadow-sm flex-1">
                    <div className="card-body text-center items-center">
                        <h2 className="card-title text-3xl font-semibold">{days_since_contact}</h2>
                        <p className='text-[#64748b] text-[18px]'>Days Since Contact</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm flex-1">
                    <div className="card-body text-center items-center">
                        <h2 className="card-title text-3xl font-semibold">{goal}</h2>
                        <p className='text-[#64748b] text-[18px]'>Goal (Days)</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm flex-1">
                    <div className="card-body text-center items-center">
                        <h2 className="card-title text-3xl font-semibold">{next_due_date}</h2>
                        <p className='text-[#64748b] text-[18px]'>Next Due</p>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 w-full shadow-sm">
                <div className="card-body">
                    <div className='flex flex-row justify-between items-center'>
                        <h2 className="card-title text-[20px] font-medium">Relationship Goal</h2>
                        <button className="btn ">Edit</button>
                    </div>
                    <p className='text-[18px] text-[#64748b]'>Connect every {goal} days</p>
                </div>
            </div>

            <div className="card bg-base-100 w-full shadow-sm">
                <div className="card-body">
                    <h2 className="card-title text-[20px] font-medium">Quick Check-In</h2>
                    <ContactActions friend={friend} />
                </div>
            </div>

            <div className="card bg-base-100 w-full shadow-sm">
                <div className="card-body space-y-4">
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="card-title text-[20px] font-medium">Recent Interactions</h2>
                        <button className='btn btn-soft font-medium'><MdOutlineHistory size={20} />Full History</button>
                    </div>

                    <div className="space-y-2">
                        {personalHistory.length > 0 ? (
                            personalHistory.map((item, index) => (
                                <div key={index} className="flex items-center justify-between py-4 px-2 border-2 rounded-2xl border-base-300 ">
                                    <div className="flex items-center gap-4 flex-1">
                                        <div className="text-gray-500">
                                            {item.actionType === 'call' && <MdOutlineWifiCalling3 size={22} />}
                                            {item.actionType === 'text' && <BsChatLeftText size={20} />}
                                            {item.actionType === 'video' && <VscDeviceCameraVideo size={22} />}
                                        </div>

                                        <div className="flex-1">
                                            <p className="font-medium capitalize text-[18px] leading-tight">{item.actionType}</p>
                                            <p className="text-gray-500">Asked for career advice</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="font-medium">
                                            {item.date}
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-400 py-4 italic">No recent interactions with {friend.name}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;