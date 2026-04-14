import React from 'react';
import { toast } from 'react-toastify';
import { MdOutlineHistory } from "react-icons/md";
import ContactActions from './ContactActions';


const SectionTwo = ({ friend }) => {
    const { days_since_contact, goal, next_due_date } = friend;
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

            <div className="card bg-base-100 w-full shadow-sm space-y-4">
                <div className="card-body flex flex-row justify-between items-center">
                    <h2 className="card-title text-[20px] font-medium">Recent Interactions</h2>
                    <button className='btn btn-soft font-medium'><MdOutlineHistory size={20} />Full History</button>
                </div>
            </div>

        </div>
    );
};

export default SectionTwo;