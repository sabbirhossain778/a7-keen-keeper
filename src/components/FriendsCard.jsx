import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendsCard = ({ friend }) => {
    const { name, days_since_contact, tags, status,picture } = friend;

    const statusColors = {
    "overdue": "bg-red-500",
    "almost due": "bg-yellow-500",
    "on-track": "bg-green-600",
  };

    return (
        <Link href={`/friends/${friend.id}`} className="card bg-base-100  shadow-sm">  
            <div className="card bg-base-100  shadow-sm">
                <figure className="px-10 pt-10">
                    <Image
                        src={picture}
                        alt={name} width={80} height={80}
                        className="rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl">{name}</h2>
                    <p>{days_since_contact}d ago</p>
                    <p className='bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm font-medium'>{tags}</p>
                    
                    <p className={`${statusColors[status.toLowerCase()]} px-2 py-1 rounded-full text-sm text-white`}>{status}</p>
                </div>

            </div>
            </Link>
    );
};

export default FriendsCard;