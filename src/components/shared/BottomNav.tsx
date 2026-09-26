import { BiSolidDish } from 'react-icons/bi';
import { CiCircleMore } from 'react-icons/ci';
import { FaHome } from 'react-icons/fa';
import { MdOutlineReorder, MdTableBar } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function BottomNav() {

  const navigate = useNavigate();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] h-15 p-2 flex justify-around">
        <button onClick={() => navigate("/")} className="flex items-center justify-center text-[#f1f1f1] bg-[#343434] w-75 rounded-[10px] cursor-pointer"><FaHome className="inline mr-2" size={20} />Home</button>
        <button onClick={() => navigate("/orders")}className="flex items-center justify-center text-[#f1f1f1] bg-[#343434] w-75 rounded-[10px] cursor-pointer"><MdOutlineReorder className="inline mr-2" size={20} />Orders</button>
        <button onClick={() => navigate("/tables")}className="flex items-center justify-center text-[#f1f1f1] bg-[#343434] w-75 rounded-[10px] cursor-pointer"><MdTableBar className="inline mr-2" size={20} />Tables</button>
        <button onClick={() => navigate("/more")}className="flex items-center justify-center text-[#f1f1f1] bg-[#343434] w-75 rounded-[10px] cursor-pointer"><CiCircleMore className="inline mr-2" size={20} />More</button>
        <button className="absolute bottom-5 bg-[#F6B100] text-[#f5f5f5] rounded-full p-3 items-center"><BiSolidDish /></button>    
    </div>
  )
}

