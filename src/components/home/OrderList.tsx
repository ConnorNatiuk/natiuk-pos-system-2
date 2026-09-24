import { FaCheckDouble, FaCircle } from "react-icons/fa";

export default function OrderList() {
  return (
    <div className='flex items-center gap-6 mb-4'>
        <button className='bg-[#f6b100] p-4 text-xl font-bold rounded-lg'>AM</button>
        <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-start gap-2">
                <h1 className='text-[#f5f5f5] text-lg font-semibold tracking-wide'>Connor Natiuk</h1>
                <p className="text-[#ababab] text-sm font-medium">6 items</p>
            </div>
            <div>
                <h1 className="text-[#f6b100] font-semibold border border-[#f6b100] rounded-lg p-2">Table No: 3</h1>
            </div>
            <div className="flex flex-col items-end">
                <p className="text-green-700 mb-3"><FaCheckDouble className='inline mr-2' />Ready</p>
                <p className="text-[#ababab] text-sm"><FaCircle className='inline mr-2 text-green-600'/>Ready to serve</p>
            </div>
        </div>
    </div>
  )
}
