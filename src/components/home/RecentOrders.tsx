import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";

export default function RecentOrders() {
  return (
    <div className="px-8 mt-6">
      <div className="bg-[#1a1a1a] w-full h-112.5 rounded-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
            Recent Orders
          </h1>
          <a href="" className="text-[#025caa] text-sm font-semibold">
            View all
          </a>
        </div>

        {/* SEARCH */}
        <div
          className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] 
                        px-8 py-4 mx-6"
        >
          <FaSearch className="text-[#ffffff]" />
          <input
            type="text"
            placeholder="Search recent orders..."
            className="bg-[#1f1f1f] outline-none text-[#f1f1f1]"
          />
        </div>

        {/* ORDER LIST */}
        <div className='mt-4 px-8'>
            <OrderList />
        </div>
      </div>
    </div>
  );
}
