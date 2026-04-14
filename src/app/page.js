import { AiOutlinePlus } from "react-icons/ai";
import FriendsPage from "./friends/page";
export const metadata = {
  title: "Home | Create Next App"
};



export default function Home() {

  return (
    <div className=" py-20 space-y-10 bg-base-200">
      <div className="w-10/12 mx-auto justify-center text-center">
        <h2 className="text-5xl font-bold mb-4">Friends to keep close in your life</h2>
        <p className="text-[#64748b]">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br></br>relationships that matter most.</p>
        <button className="btn text-white font-semibold text-[18px] bg-[#244d3f] mt-6"><AiOutlinePlus />
          Add a Friend</button>
        <div className="grid grid-cols-4 justify-between gap-6 mt-10">

          <div className="card bg-white shadow-sm flex flex-1 py-8">
            <h4 className="text-3xl font-bold">10</h4>
            <p className="text-[18px] text-[#64748b]">Total Friends</p>
          </div>
          <div className="card bg-white shadow-sm flex flex-1 py-8 px-4">
            <h4 className="text-3xl font-bold">3</h4>
            <p className="text-[18px] text-[#64748b]">On track</p>
          </div>
          <div className="card bg-white shadow-sm flex flex-1 py-8" >
            <h4 className="text-3xl font-bold">6</h4>
            <p className="text-[18px] text-[#64748b]">Needs Attention</p>
          </div>
          <div className="card bg-white shadow-sm flex flex-1 py-8"   >
            <h4 className="text-3xl font-bold">12</h4>
            <p className="text-[18px] text-[#64748b]">Interactions This Month</p>
          </div>
        </div>
      </div>

      <div className="w-10/12 mx-auto">
        <FriendsPage></FriendsPage>
      </div>
    </div>
  );
}
