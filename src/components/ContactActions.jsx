'use client';
import React from 'react';
import { toast } from 'react-toastify';
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { BsChatLeftText } from "react-icons/bs";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import { useContact } from '@/context/ContactContext';


const ContactActions = ({ friend }) => {
    const { setSelectedContacts } = useContact();
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
        <div className='flex flex-3 justify-between gap-6'>
            <button onClick={() => handleClick('call')} className='flex-1 active:scale-95'>
                <div className="card bg-base-200 shadow-sm">
                    <div className="card-body text-center items-center">
                        <h2 className="card-title"><MdOutlineWifiCalling3 size={20} /></h2>
                        <p className='text-[#64748b] text-[18px]'>Call</p>
                    </div>
                </div>
            </button>

            <button onClick={() => handleClick('text')} className='flex-1 active:scale-95'>
                <div className="card bg-base-200 flex-1 shadow-sm">
                    <div className="card-body text-center items-center">
                        <h2 className="card-title"><BsChatLeftText size={20} /></h2>
                        <p className='text-[#64748b] text-[18px]'>Text</p>
                    </div>
                </div>
            </button>

            <button onClick={() => handleClick('video')} className='flex-1 active:scale-95'>
                <div className="card bg-base-200 flex-1 shadow-sm">
                    <div className="card-body text-center items-center">
                        <h2 className="card-title"><VscDeviceCameraVideo size={25} /></h2>
                        <p className='text-[#64748b] text-[18px]'>Video</p>
                    </div>
                </div>
            </button>
        </div>
    );
};

export default ContactActions;