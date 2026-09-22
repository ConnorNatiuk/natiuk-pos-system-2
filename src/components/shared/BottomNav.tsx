import { CiCircleMore } from 'react-icons/ci';
import { FaHome } from 'react-icons/fa';
import { MdOutlineReorder, MdTableBar } from 'react-icons/md';

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] h-15 p-2 flex justify-around">
        <button className="text-[#f1f1f1]"><FaHome className="inline mr-4 size={15}"/>Home</button>
        <button className="text-[#f1f1f1]"><MdOutlineReorder className="inline mr-4 size={15}"/>Orders</button>
        <button className="text-[#f1f1f1]"><MdTableBar className="inline mr-4 size={15}"/>Tables</button>
        <button className="text-[#f1f1f1]"><CiCircleMore className="inline mr-4 size={15}"/>More</button>
    </div>
  )
}

