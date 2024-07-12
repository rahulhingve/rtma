'use client'
import { sidebarLinks } from '@/data'
import { cn } from '@/lib/utils';
import { CalendarClock } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'




const Sidebar = () => {


    const pathname = usePathname();
    return (
        <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>

            <div className='flex flex-1 flex-col gap-6'>
                {sidebarLinks.map((linker) => {
                    const IconComponent = linker.imgUrl;
                    const isActive = pathname === linker.route || pathname.startsWith(`${linker.route}/`);
                    return (
                        <Link href={linker.route}
                            key={linker.label}
                            className={cn('flex gap-4 items-center p-4 rounded-lg justify-start', {
                                'bg-blue-1': isActive,
                            })}
                        >
                            {<IconComponent />}
                            <div className='text-lg font-semibold max-lg:hidden'>
                                {linker.label}
                            </div>


                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Sidebar