import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)} className="bg-[#027aff] p-3 text-xl font-bold rounded-full cursor-pointer text-white"><IoMdArrowRoundBack/></button>
    </div>
  )
}
