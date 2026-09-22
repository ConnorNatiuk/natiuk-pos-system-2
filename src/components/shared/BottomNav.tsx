import { BiSolidDish } from 'react-icons/bi';
import { CiCircleMore } from 'react-icons/ci';
import { FaHome } from 'react-icons/fa';
import { MdOutlineReorder, MdTableBar } from 'react-icons/md';

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] h-15 p-2 flex justify-around">
        <button className="flex items-center justify-center text-[#f1f1f1] bg-[#343434] w-75 rounded-[10px]"><FaHome className="inline mr-2" size={20} />Home</button>
        <button className="flex items-center justify-center text-[#f1f1f1] bg-[#343434] w-75 rounded-[10px]"><MdOutlineReorder className="inline mr-2" size={20} />Orders</button>
        <button className="flex items-center justify-center text-[#f1f1f1] bg-[#343434] w-75 rounded-[10px]"><MdTableBar className="inline mr-2" size={20} />Tables</button>
        <button className="flex items-center justify-center text-[#f1f1f1] bg-[#343434] w-75 rounded-[10px]"><CiCircleMore className="inline mr-2" size={20} />More</button>
        <button className="absolute bottom-5 bg-[#F6B100] text-[#f5f5f5] rounded-full p-3 items-center"><BiSolidDish /></button>    
    </div>
  )
}

