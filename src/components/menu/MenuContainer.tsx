import { GrRadialSelected } from "react-icons/gr";
import { menus } from "../../constants";
import { useState } from "react";

export default function MenuContainer() {

  const [selectState, setSelectState] = useState(menus[0]);

  return (
    <>
      <div className='grid grid-cols-4 gap-4 px-10 py-4 w-full'>
        {
          menus.map((menu) => {
            return (
              <div key={menu.id} className={`flex flex-col items-center 
              justify-between p-4 rounded-lg h-25 cursor-pointer ${menu.color}`}
              onClick={() => setSelectState(menu)}>
                <div className='flex items-center justify-between w-full'>
                  <h1 className="text-[#f5f5f5] text-lg font-semibold">{menu.name}</h1>
                  {selectState.id === menu.id && <GrRadialSelected className='text-white' size={20}/>}
                </div>
                <p className="text-[#fafafa] text-sm font-semibold">{menu.items.length} items</p>
              </div>
            )
          })
        }
      </div>

      <hr className="border-[#2a2a2a] border-t-2 mt-4"/>

      <div className='grid grid-cols-4 gap-4 px-10 py-4 mt-4 w-full'>
        {
          selectState.items.map((menu) => {
            return (
              <div key={menu.id} className="flex flex-col bg-[#1a1a1a] items-start 
              justify-between p-4 rounded-lg h-25 cursor-pointer hover:bg-[#2a2a2a]"
              >
                <div className='flex items-center justify-between w-full'>
                  <h1 className="text-[#f5f5f5] text-lg font-semibold">{menu.name}</h1>
                </div>
                <p className="text-[#ababab] text-sm font-semibold">{menu.price.toFixed(2)}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
