'use client'
import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
import Link from "next/link"

import { DotIcon, GitlabIcon ,VideoIcon,ChromeIcon} from "./ui/SvgIcons"

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
};

