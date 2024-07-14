'use client'
import Link from 'next/link'
import React from 'react'
import { BellIcon, VideoIcon } from './ui/SvgIcons'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { signOut, useSession } from 'next-auth/react'
import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { format } from 'date-fns'
import MobileNav from './ui/MobileNav'

const Navbar = () => {
    const { data: session } = useSession(authOptions);
    const currentdate = new Date();

    const formatDate = (date) => {


        return format(date, "HH:mm '•' EEE, dd MMM");
    };


    return (
        <nav className='flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
            <Link href="/">
                <div className="animate-slidein [--slidein-delay:200ms] opacity-0 flex items-center gap-1">
                    <VideoIcon className="h-10 w-10 text-white" />
                    <h1 className="text-2xl font-bold text-white">MeetHub</h1>
                </div>
            </Link>
            <div className=' '>
                <header className=" flex items-center justify-between w-full max-w-4xl    max-lg:hidden  ">


                    <div className=" animate-slidein [--slidein-delay:200ms] opacity-0 flex items-center space-x-4">
                        <span className="text-sm text-white">{formatDate(currentdate)}</span>
                        <div className="flex items-center space-x-2">
                            <BellIcon className="w-5 h-5 text-white" />
                            {/* <SettingsIcon className="w-5 h-5 text-gray-500" /> */}
                            <Avatar>

                                <AvatarImage src={session?.user?.image || undefined} className="rounded-lg" />
                                <AvatarFallback>{session?.user?.name ? session?.user?.name[0] : null}</AvatarFallback>
                            </Avatar>
                            <div className='text-white'>{session?.user?.name}</div>
                            <Button className="rounded-xl bg-[#c9ebf7] px-4 py-2 text-sm font-medium text-[#2c3844] transition-colors hover:bg-[#c9ebf7]/90 focus:outline-none focus:ring-2 focus:ring-[#c9ebf7] focus:ring-offset-2" onClick={() => {
                                signOut()
                            }} >Logout</Button>
                        </div>
                    </div>
                </header>
                <MobileNav />
            </div>

        </nav>
        // <div className="bg-dark-2 flex flex-col items-center justify-center p-4 ">
        //     <header className=" flex items-center justify-between w-full max-w-4xl p-4">


        //     <div className=" animate-slidein [--slidein-delay:200ms] opacity-0 flex items-center space-x-4">
        //       <span className="text-sm text-white">{formatDate(currentdate)}</span>
        //       <div className="flex items-center space-x-2">
        //         <BellIcon className="w-5 h-5 text-white" />
        //         {/* <SettingsIcon className="w-5 h-5 text-gray-500" /> */}
        //         <Avatar>

        //           <AvatarImage src={session?.user?.image || undefined} className="rounded-lg" />
        //           <AvatarFallback>{session?.user?.name ? session?.user?.name[0] : null}!</AvatarFallback>
        //         </Avatar>
        //         <div className='text-white'>{session?.user?.name}</div>
        //         <Button className="rounded-xl bg-[#c9ebf7] px-4 py-2 text-sm font-medium text-[#2c3844] transition-colors hover:bg-[#c9ebf7]/90 focus:outline-none focus:ring-2 focus:ring-[#c9ebf7] focus:ring-offset-2" onClick={() => {
        //           signOut()
        //         }} >Logout</Button>
        //       </div>
        //     </div>
        //   </header>
        // </div>
    )
}

export default Navbar