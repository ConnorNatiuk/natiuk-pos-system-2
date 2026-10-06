import { MenuContainer } from "../components/menu";
import { BackButton, BottomNav } from "../components/shared";
import { MdRestaurantMenu } from "react-icons/md";

export default function Menu() {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* LEFT DIV */}
      <div className="flex-3">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-3">
            <BackButton />
            <h1 className="text-[#f5f5f5] text-3xl font-semibold tracking-wider">Menu</h1>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 cursor-pointer">
              <MdRestaurantMenu className="text-[#f5f5f5] text-4xl" />
              <div className="flex flex-col items-start">
                <h1 className="text-md text-[#f5f5f5] font-semibold">Customer Name</h1>
                <p className="text-xs text-[#ababab] font-medium">Table No: #</p>
              </div>
            </div>
          </div>
        </div>
        <MenuContainer />


      </div>

      {/* RIGHT DIV */}
      <div className="flex-1 bg-blue-500"></div>

    </section>
  );
}
