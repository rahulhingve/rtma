'use client'
import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
import Link from "next/link"

export function LoginPage() {



  return (
    <div className="animate-slidein [--slidein-delay:40ms] opacity-0 flex min-h-[100dvh] flex-col items-center justify-center bg-gradient-to-br from-[#eec3e8] to-[#c9ebf7] px-4 py-12 sm:px-6 lg:px-8">
      <div className="animate-slidein [--slidein-delay:100ms] opacity-0 mx-auto max-w-md space-y-6">
        <div className="animate-slidein [--slidein-delay:210ms] opacity-0 flex justify-center">
          <VideoIcon className="animate-slidein [--slidein-delay:220ms] opacity-0 h-12 w-12 " /><DotIcon className="animate-slidein [--slidein-delay:320ms] opacity-0 h-12 w-12 "/>
        </div>
        <div className="space-y-2 text-center">
          <h1 className="animate-slidein [--slidein-delay:330ms] opacity-0 text-3xl font-bold">Welcome to MeetHub</h1>
          <p className="animate-slidein [--slidein-delay:340ms] opacity-0 text-[#2c3844]">Please log in to access your account.</p>
        </div>
        <div className="a space-y-4 ">
          <Button onClick={()=>{signIn("google")}} variant="outline" className="animate-slidein [--slidein-delay:450ms] rounded-xl opacity-0 w-full bg-[#e6f2ff] border-blue-300 hover:bg-[#c9ebf7]">
            <ChromeIcon className="mr-2 h-5 w-5" />
            Sign in with Google
          </Button>
          <Button onClick={()=>{signIn("github")}} variant="outline" className="animate-slidein [--slidein-delay:480ms] rounded-xl opacity-0 w-full bg-[#e6f2ff] border-blue-300 hover:bg-[#c9ebf7]">
            <GitlabIcon className="mr-2 h-5 w-5" />
            Sign in with GitHub
          </Button>
        </div>
        <div className="animate-slidein [--slidein-delay:530ms] opacity-0 text-center text-sm text-[#2c3844]">
          <Link href="#" className="underline" prefetch={false}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}

function ChromeIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
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

function DotIcon(props) {
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
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  )
}


function GitlabIcon(props) {
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
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
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
