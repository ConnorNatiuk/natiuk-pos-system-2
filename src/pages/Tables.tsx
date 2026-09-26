import { useState } from "react";
import { BackButton, BottomNav } from "../components/shared";
import { TableCard } from "../components/tables";
import { tables } from "../constants";

export default function Tables() {

    const [activeButton, setActiveButton] = useState("");
    
    return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
        <div className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center gap-3">
                <BackButton />
                <h1 className="text-[#f5f5f5] text-3xl font-semibold tracking-wider">Tables</h1>
            </div>

            {/* OPTION LIST */}

            <div className="flex items-center justify-around gap-8">
                <button onClick={() => setActiveButton("all")} 
                className={activeButton === "all" 
                    ? "bg-[#F6B100] text-black rounded-lg p-3 w-30"
                    : "bg-[#343434] text-white rounded-lg p-3 w-30"
                }>All</button>

                <button onClick={() => setActiveButton("booked")}
                className={activeButton === "booked" 
                    ? "bg-[#F6B100] text-black rounded-lg p-3 w-30"
                    : "bg-[#343434] text-white rounded-lg p-3 w-30"
                }>Booked</button>

            </div>
        </div>
        <div className="flex content-start flex-wrap h-[calc(100vh-5rem)] 
        gap-6 overflow-y-scroll scrollbar-none px-16 py-10">
            {
                tables.map((table) => {
                    return (
                        <TableCard id={table.id} name={table.name} status={table.status}
                        initial={table.initial} />
                    )
                })
            }
        </div>
        <BottomNav />
    </section>
  )
}
