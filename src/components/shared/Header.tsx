import Logo from '../../assets/logo.png';
import { FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 px-8 bg-[#1a1a1a]">
        {/* LOGO */}
        <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="h-8 w-8" />
            <h1 className="text-xl font-semibold text-[#ffffff]">My Restaurant</h1>
        </div>

        {/* SEARCH */}
        <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] 
            w-125 px-5 py-2">
            <FaSearch className="text-[#ffffff]" />
            <input type="text" placeholder="Search..."
            className="bg-[#1f1f1f] outline-none text-[#f1f1f1]"
            />
        </div>

        {/* LOGGED USER */}
        <div className="flex items-center gap-4">
            <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
                <FaBell className="text-[#f5f5f5] text-2xl" />
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
                <FaUserCircle className="text-[#f5f5f5] text-4xl" />
                <div className="flex flex-col items-start">
                    <h1 className="text-md text-[#f5f5f5] font-semibold">Connor N</h1>
                    <p className="text-xs text-[#ababab] font-medium">Admin</p>
                </div>
            </div>
        </div>
    </header>
  )
}
