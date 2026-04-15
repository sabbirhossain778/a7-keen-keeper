import React from 'react';
import friendsData from "../../../../public/friends.json";
import Image from 'next/image';
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsArchive } from "react-icons/bs";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import SectionTwo from '@/components/SectionTwo';
import Link from 'next/link';


const FriendsDetailPage = async ({ params }) => {
    const { id } = await params;

    const friend = friendsData.find(frd => frd.id === parseInt(id));

    const { name, days_since_contact, tags, status, picture, bio, email } = friend;
 
    const statusColors = {
        "overdue": "bg-red-500",
        "almost due": "bg-orange-400",
        "on-track": "bg-green-600",
    };

    return (
        <div className='py-20 space-y-10 bg-base-200 w-full'>
            <div className='w-10/12 mx-auto flex justify-between gap-8'>
                <div className='w-88 space-y-4'>
                    <div className="card bg-base-100 shadow-sm">
                        <figure className="px-10 pt-10">
                            <Image
                                src={picture}
                                alt={name} width={80} height={80}
                                className="rounded-full" />
                        </figure>
                        <div className="card-body pt-2 items-center text-center">
                            <h2 className="card-title text-xl">{name}</h2>
                            <p>{days_since_contact}d ago</p>
                            <p className='bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm font-medium'>{tags}</p>

                            <p className={`${statusColors[status.toLowerCase()]} px-2 py-1 rounded-full text-sm text-white`}>{status}</p>
                            <p className='font-medium text-[#64748b] italic'>{bio}</p>
                            <p className='font-medium text-[#64748b]'>{email}</p>
                        </div>

                    </div>

                    <div className="custom-card">
                        <RiNotificationSnoozeLine />
                        <span className='text-[18px] font-medium'>Snooze 2 weeks</span>
                    </div>
                    <div className="custom-card">
                        <BsArchive />
                        <span className='text-[18px] font-medium'>Archive</span>
                    </div>
                    <Link href='/' className="custom-card">
                        <RiDeleteBin6Line className="text-red-500" />
                        <span className='text-[18px] font-medium'>Delete</span>
                    </Link>
                </div>

                <div className='flex-1'>
                   <SectionTwo friend={friend} />
                </div>
            </div>
        </div>
    );
};

export default FriendsDetailPage;