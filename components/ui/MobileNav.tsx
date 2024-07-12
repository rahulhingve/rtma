'use client'
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon, VideoIcon } from 'lucide-react'
import Link from 'next/link'
import { sidebarLinks } from '@/data'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <section className='w-full max-w-[264px]'>

            <Sheet>
                <SheetTrigger>
                    <MenuIcon className='text-white cursor-pointer sm:hidden' />
                </SheetTrigger>
                <SheetContent side="left" className='border-none bg-dark-1'>
                    < Link href="/">
                        <div className="animate-slidein [--slidein-delay:200ms] opacity-0 flex items-center gap-1">
                            <VideoIcon className="h-10 w-10 text-white" />
                            <h1 className="text-2xl font-bold text-white">MeetHub</h1>
                        </div>
                    </Link>

                    <div className='animate-slidein [--slidein-delay:100ms] opacity-0 flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
                        <SheetClose asChild>
                            <section className='flex h-full flex-col gap-6 pt-16 text-white'>
                                {sidebarLinks.map((linker) => {
                                    const IconComponent = linker.imgUrl;
                                    const isActive = pathname === linker.route || pathname.startsWith(linker.route);
                                    return (
                                        <SheetClose asChild key={linker.route}>
                                            <Link href={linker.route}
                                                key={linker.label}
                                                className={cn('flex gap-4 items-center p-4 rounded-lg w-full max-w-60', {
                                                    'bg-blue-1': isActive,
                                                })}
                                            >
                                                {<IconComponent />}
                                                <div className='font-semibold '>
                                                    {linker.label}
                                                </div>


                                            </Link>
                                        </SheetClose>

                                    )
                                })}
                            </section>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>

        </section>
    )
}

export default MobileNav