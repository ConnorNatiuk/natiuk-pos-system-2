import type { ReactNode } from "react";

type MiniCardProps = {
  title: string;
  icon: ReactNode;
  number: number | string;
  footerNum: number | string;
}

export default function MiniCard({ title, icon, number, footerNum }: MiniCardProps) {
  return (
    <div className='bg-[#1a1a1a] py-5 px-6 rounded-lg w-[50%]'>
      <div className='flex items-start justify-between'>
        <h1 className='text-[#f5f5f5] text-lg font-semibold tracking-wide'>{title}</h1>
        <button className={`${title === "Total Earnings" ? "bg-[#02ca3a]" : "bg-[#f68100]"}
        p-3 rounded-lg text-[#f5f5f5] text-2xl`}>{icon}</button>
      </div>
      <div>
        <h1 className='text-[#f5f5f5] text-4xl font-bold mt-5'>{title === "Total Earnings" ? `$${number}` : number}</h1>
        <h3 className='text-[#f5f5f5] text-lg mt-2'><span className='text-[#02ca3a]'>{footerNum}%</span> than yesterday</h3>
      </div>
    </div>
  )
}
