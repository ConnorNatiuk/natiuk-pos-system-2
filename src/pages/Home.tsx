import { BsCashCoin } from "react-icons/bs";
import { Greetings, MiniCard, PopularDishes, RecentOrders } from "../components/home";
import { GrInProgress } from "react-icons/gr";

export default function Home() {
  return (
    <div className="bg-[#1a1a1a] h-[calc(100vh-5rem)] overflow-hidden flex">
        {/* LEFT DIV */}
        <div className="flex-3 bg-[#1f1f1f]">

          <Greetings />
          <div className='flex items-center w-full gap-3 px-8 mt-8'>
            <MiniCard title="Total Earnings" icon={<BsCashCoin />} number={512} footerNum={1.6} />
            <MiniCard title="In Progress" icon={<GrInProgress />} number={512} footerNum={1.6}/>
          </div>
          <RecentOrders />
        </div>

        {/* RIGHT DIV */}
        <div className="flex-2 bg-[#1f1f1f]">
          <PopularDishes />
        </div>
    </div>
  )
}
