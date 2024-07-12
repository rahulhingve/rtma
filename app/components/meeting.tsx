'use client'
import { signOut, useSession } from "next-auth/react"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu"
import { Input } from "./ui/input"
import { authOptions } from "../(pages)/api/auth/[...nextauth]/options"
import { format } from 'date-fns';
import Link from "next/link"
import { BellIcon, VideoIcon } from "./ui/SvgIcons"

export function Meeting() {

  const currentdate = new Date();

  const formatDate = (date) => {


    return format(date, "HH:mm '•' EEE, dd MMM");
  };
  formatDate(currentdate)
  const { data: session } = useSession(authOptions)
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen p-4 ">
      <header className="flex items-center justify-between w-full max-w-4xl p-4">
        <Link href="/">
          <div className="animate-slidein [--slidein-delay:200ms] opacity-0 flex items-center space-x-2">
            <VideoIcon className="h-10 w-10" />
            <h1 className="text-2xl font-bold">MeetHub</h1>
          </div>
        </Link>

        <div className=" animate-slidein [--slidein-delay:200ms] opacity-0 flex items-center space-x-4">
          <span className="text-sm text-gray-700">{formatDate(currentdate)}</span>
          <div className="flex items-center space-x-2">
            <BellIcon className="w-5 h-5 text-gray-500" />
            {/* <SettingsIcon className="w-5 h-5 text-gray-500" /> */}
            <Avatar>

              <AvatarImage src={session?.user?.image || undefined} className="rounded-lg" />
              <AvatarFallback>{session?.user?.name ? session?.user?.name[0] : null}!</AvatarFallback>
            </Avatar>
            <div>{session?.user?.name}</div>
            <Button className="rounded-xl bg-[#c9ebf7] px-4 py-2 text-sm font-medium text-[#2c3844] transition-colors hover:bg-[#c9ebf7]/90 focus:outline-none focus:ring-2 focus:ring-[#c9ebf7] focus:ring-offset-2" onClick={() => {
              signOut()
            }} >Logout</Button>
          </div>
        </div>
      </header>
      <main className=" flex flex-col items-center justify-center flex-1 w-full max-w-4xl space-y-8">
        <div className="animate-slidein [--slidein-delay:300ms] opacity-0 text-center">
          <h2 className="text-3xl font-bold">Your Meetings</h2>
          <p className="mt-2 text-lg text-gray-600">Connect, collaborate and celebrate from anywhere with MeetHub</p>
        </div>
        <div className="animate-slidein [--slidein-delay:400ms] opacity-0 flex flex-col items-center ">
          <Button className=" ">
            <DropdownMenu>

              <DropdownMenuTrigger asChild className="flex bg-blue-400 text-gray-100 hover:bg-blue-300 p-2.5 rounded-xl">
                <div> <VideoIcon className="w-5 pb-1" /><span>&nbsp;New Meeting</span></div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-300 ">
                <DropdownMenuItem className="hover:bg-slate-200">Start an Instant Meeting</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-200">Create a Meeting for Later</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Button>
          <br />
          <div className="flex items-center">
            OR
          </div>
        </div>
        <div className="animate-slidein [--slidein-delay:450ms] opacity-0  flex items-center w-full max-w-xs space-x-2">
          <Input placeholder="Enter Meeting Code or Link" className="flex-1" />
          <Button className="bg-gray-200 text-gray-600">Join</Button>
        </div>

        <p className="animate-slidein [--slidein-delay:600ms] opacity-0 text-center text-gray-600">
          Get a link that you can share
          <br />
          Click <span className="font-semibold">New Meeting</span> to get a link that you can send to people that you
          want to meet with
        </p>
      </main>
    </div>
  )
}


