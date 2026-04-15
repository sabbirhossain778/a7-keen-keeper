import React from 'react';
import FriendsCard from '@/components/FriendsCard';

const FriendsPage = ({ friends }) => {
    return (
        <div>
            <h4 className='text-3xl font-bold'>Your Friends</h4>
            <div className='mt-10 grid grid-cols-4 justify-between gap-6'>
                {
                friends.map((friend) => (
                    <FriendsCard key={friend.id} friend={friend}></FriendsCard>
                ))
                }
            </div>
        </div>
    );
};

export default FriendsPage;