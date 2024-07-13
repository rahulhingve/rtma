import { cn } from '@/lib/utils';

import React from 'react'
interface HomeCradProps {
    className: string,
    img: React.ComponentType,
    title: string,
    desc: string,
    handleClick: () => void;
}
const HomeCard = ({ className, img: IconComponent, title, desc, handleClick }: HomeCradProps) => {

    return (
        <div className={cn(' px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer', className)} onClick={handleClick}>
            <div className="flex-centerr glassmorphism size-12 rounded-[12px]">

                {<IconComponent />}

            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-lg font-normal">{desc}</p>
            </div>

        </div>
    )
}

export default HomeCard