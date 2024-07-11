'use client'
import { signOut, useSession } from "next-auth/react"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu"
import { Input } from "./ui/input"
import { authOptions } from "../(pages)/api/auth/[...nextauth]/options"
 import { format } from 'date-fns';

export  function Meeting() {

  const currentdate = new Date();

const formatDate = (date) => {
  

  return format(date, "HH:mm '•' EEE, dd MMM");
};

  const {data:session}= useSession(authOptions)
  return (
    <div className="bg-red-100 flex flex-col items-center justify-center min-h-screen p-4 ">
      <header className="flex items-center justify-between w-full max-w-4xl p-4">
        <div className="animate-slidein [--slidein-delay:200ms] opacity-0 flex items-center space-x-2">
          <VideoIcon className="h-10 w-10" />
          <h1 className="text-2xl font-bold">MeetHub</h1>
        </div>
        <div className=" animate-slidein [--slidein-delay:200ms] opacity-0 flex items-center space-x-4">
          <span className="text-sm text-gray-700">{formatDate(currentdate)}</span>
          <div className="flex items-center space-x-2">
            <BellIcon className="w-5 h-5 text-gray-500" />
            {/* <SettingsIcon className="w-5 h-5 text-gray-500" /> */}
            <Avatar>
              
              <AvatarImage src={session?.user?.image} className="rounded-lg" />
              <AvatarFallback>{session?.user?.name[0]}</AvatarFallback>
            </Avatar>
            <div>{session?.user?.name}</div>
            <Button className="rounded-xl bg-[#c9ebf7] px-4 py-2 text-sm font-medium text-[#2c3844] transition-colors hover:bg-[#c9ebf7]/90 focus:outline-none focus:ring-2 focus:ring-[#c9ebf7] focus:ring-offset-2" onClick={()=>{
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
        <div className="animate-slidein [--slidein-delay:400ms] opacity-0 flex flex-col items-start space-y-6">
          <Button className=" ">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span>New Meeting</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Start an Instant Meeting</DropdownMenuItem>
                <DropdownMenuItem>Create a Meeting for Later</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Button>
          <div className="flex items-center w-full max-w-xs space-x-2">
            <Input placeholder="Enter Meeting Code or Link" className="flex-1" />
            <Button className="bg-gray-200 text-gray-600">Join</Button>
          </div>
        </div>
        <div className="animate-slidein [--slidein-delay:500ms] opacity-0 flex items-center justify-center w-full max-w-md p-4 bg-white rounded-lg shadow">
          <div className="flex items-center justify-between w-full">
            <ChevronLeftIcon className="w-6 h-6 text-gray-500" />
            <img src="/placeholder.svg" alt="Current Meetings" className="h-40 w-40" />
            <ChevronRightIcon className="w-6 h-6 text-gray-500" />
          </div>
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

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

function VideoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  )
}
