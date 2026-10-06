import { useNavigate } from "react-router-dom";
import { getRandomBG } from "../../utils/getRandomBG";

type TableCardProps = {
    id: number,
    name: string,
    status: string,
    initial: string
};

export default function TableCard({id, name, status, initial}: TableCardProps) {

    const navigate = useNavigate()

    const handleClick = () => {
        if(status == "Booked") {
            return;
        };
        navigate("/menu")
    }
    
  return (
    <div onClick={handleClick} key={id} className="w-75 max-h-50 bg-[#262626] hover:bg-[#3a3a3a]
    p-4 rounded-lg cursor-pointer">
        <div className="flex items-center justify-between px-2">
            <h1 className="text-[#f5f5f5] text-xl font-semibold">
                {name}
            </h1>
            <p className={`${status === "Booked" ? "text-green-600 bg-[#2e4a40]" : "bg-[#8d6c00] text-white"} px-2 py-1 rounded-lg`}>
                {status}
            </p>
        </div>
        <div className="flex items-center justify-center mt-5 mb-7">
            <h1 className={`${getRandomBG()} text-white rounded-full p-5 text-xl`}>
                {initial}
            </h1>
        </div>
    </div>
  )
}
