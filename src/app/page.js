import { AiOutlinePlus } from "react-icons/ai";
import FriendsPage from "./friends/page";
import { Suspense } from "react";



const Home = async () => {

  const res = await fetch('http://localhost:3000/friends.json');
  const friends = await res.json();

  return (
    <div className="py-8 md:py-20 space-y-8 bg-base-200">
      <div className="w-11/12 md:w-10/12 mx-auto justify-center text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Friends to keep close in your life</h2>
        <p className="text-[#64748b]">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br></br>relationships that matter most.</p>
        <button className="btn text-white font-semibold text-[18px] bg-[#244d3f]  mt-4 md:mt-6"><AiOutlinePlus />
          Add a Friend</button>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 justify-between gap-4 md:gap-6 mt-6 md:mt-10">

          <div className="card bg-white shadow-sm flex flex-1 py-8 px-2">
            <h4 className="text-2xl md:text-3xl font-bold">10</h4>
            <p className="text-[18px] text-[#64748b]">Total Friends</p>
          </div>
          <div className="card bg-white shadow-sm flex flex-1 py-8 px-2">
            <h4 className="text-2xl md:text-3xl font-bold">3</h4>
            <p className="text-[18px] text-[#64748b]">On track</p>
          </div>
          <div className="card bg-white shadow-sm flex flex-1 py-8 px-2 " >
            <h4 className="text-2xl md:text-3xl font-bold">6</h4>
            <p className="text-[18px] text-[#64748b]">Needs Attention</p>
          </div>
          <div className="card bg-white shadow-sm flex flex-1 py-8 px-2">
            <h4 className="text-2xl md:text-3xl font-bold">12</h4>
            <p className="text-[18px] text-[#64748b]">Interactions This Month</p>
          </div>
        </div>
      </div>

      <div className="divider w-[80%] mb-4 md:mb-6 flex mx-auto"></div>

      {/* All friends section */}
      <div className="w-11/12 md:w-10/12 mx-auto">
        <Suspense fallback={<div className="flex h-64 justify-center items-center w-full">
          <span className="loading loading-infinity w-20 text-primary"></span>
        </div>}>
          <FriendsPage friends={friends}></FriendsPage>
        </Suspense>
      </div>
    </div>
  );
}

export default Home;