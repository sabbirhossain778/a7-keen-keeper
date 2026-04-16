import React from 'react';
import FriendsCard from '@/components/FriendsCard';

const FriendsPage = ({ friends }) => {
    return (
        <div>
            <h4 className='text-2xl md:text-3xl font-bold'>Your Friends</h4>
            <div className='mt-6 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-4 md:gap-6'>
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