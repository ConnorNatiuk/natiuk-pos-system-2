import { useState } from "react";
import { BackButton, BottomNav } from "../components/shared";
import { OrderCard } from "../components/orders";

export default function Orders() {
  const [activeButton, setActiveButton] = useState("all");

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-3">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-3xl font-semibold tracking-wider">Orders</h1>
        </div>

        {/* OPTION LIST */}

        <div className="flex items-center gap-8">
          <button onClick={() => setActiveButton("all")} 
          className={activeButton === "all" 
            ? "bg-[#F6B100] text-black rounded-lg p-3 w-30"
            : "bg-[#343434] text-white rounded-lg p-3 w-30"
          }>All</button>

          <button onClick={() => setActiveButton("progress")}
          className={activeButton === "progress" 
            ? "bg-[#F6B100] text-black rounded-lg p-3 w-30"
            : "bg-[#343434] text-white rounded-lg p-3 w-30"
          }>In Progress</button>

          <button onClick={() => setActiveButton("ready")}
          className={activeButton === "ready" 
            ? "bg-[#F6B100] text-black rounded-lg p-3 w-30"
            : "bg-[#343434] text-white rounded-lg p-3 w-30"
          }>Ready</button>

          <button onClick={() => setActiveButton("completed")}
          className={activeButton === "completed" 
            ? "bg-[#F6B100] text-black rounded-lg p-3 w-30"
            : "bg-[#343434] text-white rounded-lg p-3 w-30"
          }>Completed</button>

        </div>
      </div>

      <div className="flex content-start flex-wrap h-[calc(100vh-5rem)] gap-6 justify-center overflow-y-scroll scrollbar-none px-8 py-10">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>

      <BottomNav />
    </section>
  )
}
