import { FaCheckDouble, FaCircle } from "react-icons/fa";

export default function OrderCard() {
  return (
    <div className="w-100 bg-[#262626] p-5 rounded-lg mb-4">
        <div className="flex items-center gap-5">
            <button className='bg-[#f6b100] p-4 text-xl font-bold rounded-lg'>AM</button>
            <div className="flex items-center justify-between w-full">
                <div className="flex flex-col items-start gap-2">
                    <h1 className='text-[#f5f5f5] text-lg font-semibold tracking-wide'>Connor Natiuk</h1>
                    <p className="text-[#ababab] text-sm font-medium">#101 / Dine In</p>
                </div>
            
                <div className="flex flex-col items-end gap-2">
                    <p className="text-green-700 bg-[#2e4a40] px-2 py-1 rounded-[5px]"><FaCheckDouble className='inline mr-2' />Ready</p>
                    <p className="text-[#ababab] text-sm"><FaCircle className='inline mr-2 text-green-600'/>Ready to serve</p>
                </div>
            </div>
        </div>
        <div className="flex justify-between items-center mt-4 text-[#ababab]">
            <p>September 24, 2026 11:46 AM</p>
            <p>8 Items</p>
        </div>
        <hr className="w-full mt-4 text-[#ababab] border-gray-500" />
        <div className="flex items-center justify-between mt-5">
            <h1 className="text-[#f5f5f5] text-xl font-semibold">Total</h1>
            <p className="text-[#f5f5f5] text-lg font-semibold">$20</p> 
        </div>
    </div>
  )
}
