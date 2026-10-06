import { useState } from 'react';
import { BiSolidDish } from 'react-icons/bi';
import { CiCircleMore } from 'react-icons/ci';
import { FaHome } from 'react-icons/fa';
import { MdOutlineReorder, MdTableBar } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Modal } from '.';

export default function BottomNav() {

  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guestState, setGuestState] = useState(0);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const decrement = () => {
    if (guestState == 0) {
      return
    }
    setGuestState((prev) => prev - 1)
  };

  const increment = () => {
    if (guestState == 8) {
      return
    }
    setGuestState((prev) => prev + 1)
  };
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] h-15 p-2 flex justify-around">
        <button onClick={() => {
          setActiveButton(""); 
          navigate("/")
        }}
        className={activeButton === "" 
          ? "flex items-center justify-center text-[#f1f1f1] bg-[#343434] w-75 rounded-[10px] cursor-pointer"
          : "flex items-center justify-center text-[#f1f1f1] w-75 rounded-[10px] cursor-pointer"}>
            <FaHome className="inline mr-2" size={20} />Home</button>
        
        <button onClick={() => {
          setActiveButton("orders"); 
          navigate("/orders")
        }}
        className={activeButton === "orders" 
          ? "flex items-center justify-center text-[#f1f1f1] bg-[#343434] w-75 rounded-[10px] cursor-pointer"
          : "flex items-center justify-center text-[#f1f1f1] w-75 rounded-[10px] cursor-pointer"}>
        <MdOutlineReorder className="inline mr-2" size={20} />Orders</button>

        <button onClick={() => {
          setActiveButton("tables"); 
          navigate("/tables")
        }}
        className={activeButton === "tables" 
          ? "flex items-center justify-center text-[#f1f1f1] bg-[#343434] w-75 rounded-[10px] cursor-pointer"
          : "flex items-center justify-center text-[#f1f1f1] w-75 rounded-[10px] cursor-pointer"}><MdTableBar className="inline mr-2" size={20} />Tables</button>

        <button onClick={() => {
          setActiveButton("more"); 
          navigate("/more")
        }}
        className={activeButton === "more" 
          ? "flex items-center justify-center text-[#f1f1f1] bg-[#343434] w-75 rounded-[10px] cursor-pointer"
          : "flex items-center justify-center text-[#f1f1f1] w-75 rounded-[10px] cursor-pointer"}>
            <CiCircleMore className="inline mr-2" size={20} />More</button>
        <button 
        onClick={openModal}
        className="absolute bottom-5 bg-[#F6B100] text-[#f5f5f5] cursor-pointer hover:bg-[#cf9500]
        rounded-full p-3 items-center">
          <BiSolidDish />
        </button>

        <Modal title="Create Order" 
          isOpen={isModalOpen} 
          onClose={closeModal}>
          <div>
            <label className='block text-[#ababab] mb-2 mt-3 text-sm font-medium'>Customer Name</label>
            <div className='flex items-center rounded-lg px-3 py-4 bg-[#1f1f1f]'>
              <input type="text" name="" placeholder="Enter customer name" id=""
              className="bg-transparent flex-1 text-white focus:outline-none"/>
            </div>
          </div>
          <div>
            <label className='block text-[#ababab] mb-2 mt-3 text-sm font-medium'>Customer Phone</label>
            <div className='flex items-center rounded-lg px-3 py-4 bg-[#1f1f1f]'>
              <input type="tel" name="phone" placeholder="555-555-5555" id=""
              className="bg-transparent flex-1 text-white focus:outline-none"/>
            </div>
          </div>
          <div>
            <label className='block mb-2 mt-3 text-sm font-medium text-[#ababab]'>Guest</label>
            <div className='flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg'>
              <button onClick={decrement} className='text-yellow-500 text-2xl px-2 py-1 cursor-pointer'>
                &minus;
              </button>
              <span className="text-white">{guestState} People</span>
              <button onClick={increment} className='text-yellow-500 text-2xl px-2 py-1 cursor-pointer'>
                &#43;
              </button>
            </div>
          </div>
          <button onClick={() => navigate("/tables")} className='w-full bg-[#f6b100] text-[#f5f5f5] rounded-lg py-3 mt-6 hover:text-yellow-700 cursor-pointer'>
            Create Order
          </button>
        </Modal>
    </div>
  )
}

