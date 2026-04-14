import React from 'react';
import friendsData from "../../../../public/friends.json";

// const friendsPromise = async function () {
//     const res = await fetch("/friends.json");
//     const friends = await res.json();
//     return friends;
// }

const FriendsDetailPage = async({params}) => {
    const {id} = await params;
    console.log('Friend ID:', id);
    
    const friend = friendsData.find(frd =>frd.id === parseInt(id));
    console.log('Friend Details:', friend);
    // console.log(friendsData);
    

    // const friends = friendsPromise();
    // console.log(friends);
    
    return (
        <div className='flex flex-col items-center justify-center pt-10'>
            <h4 className='text-3xl font-bold'>Friend Details {id}</h4>
            <h3 className='text-3xl font-bold'>Friend name:{}</h3>
        </div>
    );
};

export default FriendsDetailPage;