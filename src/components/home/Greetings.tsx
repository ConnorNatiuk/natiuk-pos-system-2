import { useEffect, useState } from "react"

export default function Greetings() {
    const [dateTime, setDateTime] = useState(new Date());
    
    useEffect(() => {
        const timer = setInterval(() => setDateTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatDate = (date: Date) => {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')},
        ${date.getFullYear()}`;
    };

    const formatTime = (date: Date) => `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;

    return (
    <div className="flex justify-between items-center px-8 mt-5">
        <div className="flex flex-col justify-center items-start">
            <h1 className='text-[#f5f5f5] text-2xl font-semibold tracking-wide'>Good morning!</h1>
            <p className='text-[#ababab] text-sm font-medium'>Let's freakin rock this boat</p>
        </div>
        <div className="flex flex-col justify-center items-end">
            <h1 className='text-[#f5f5f5] text-3xl font-bold tracking-wide'>{formatTime(dateTime)}</h1>
            <p className='text-[#ababab] text-sm font-semibold'>{formatDate(dateTime)}</p>
        </div>
    </div>
  )
}
