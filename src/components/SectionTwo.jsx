import React from 'react';
import ContactActions from './ContactActions';

const SectionTwo = ({ friend }) => {
    const { days_since_contact, goal, next_due_date } = friend;

    return (
        <div className='space-y-6'>
            
             {/* First Line */}
            <div className='First-Line flex flex-3 justify-between gap-6'>
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

            {/* Second Line */}
            <div className=" card bg-base-100 w-full shadow-sm">
                <div className="card-body">
                    <div className='flex flex-row justify-between items-center'>
                        <h2 className="card-title text-[20px] font-medium">Relationship Goal</h2>
                        <button className="btn">Edit</button>
                    </div>
                    <p className='text-[18px] text-[#64748b]'>Connect every {goal} days</p>
                </div>
            </div>

            {/* Quick Check-In */}
            <ContactActions friend={friend} />
        </div>
    );
};

export default SectionTwo;