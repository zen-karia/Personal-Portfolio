import React, { useState, useEffect, use } from 'react';
import { MdOutlineArrowDownward } from "react-icons/md";

export default function HeroPic() {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(true);
    }, []);
    return (
        <div className='h-full flex items-center justify-center mr-5'>
            <img src="../../images/ZenilKaria.jpg" alt="Zenil Karia" className={`max-h-[350px] w-auto mt-5 transition-all duration-700 rounded-full ${ isOpen ? 'scale-100' : 'scale-y-0'}`} />
        </div>
    )
}
