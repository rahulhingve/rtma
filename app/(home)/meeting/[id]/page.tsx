'use client'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { authOptions } from '@/app/(pages)/api/auth/[...nextauth]/options'
import MeetingSetup from '@/components/MeetingSetup'
import MeetingRoom from '@/components/MeetingRoom'
import { useCallById } from '@/hooks/useGetCallById'
import Loader from '@/components/Loader'

const Page = ({params}:{params:{id: string}}) => {
const {data: session} = useSession(authOptions);
const [isSetupComplete , setIsSetupComplete] = useState(false);
const {call , callLoading} = useCallById(params.id)
if(!session?.user||callLoading) return <Loader/>

  return (
    <main className='h-screen w-full text-white'>Meeting id id :{params.id}
    
    <StreamCall call={call}>
      <StreamTheme>
{!isSetupComplete ? (
  <MeetingSetup/>
):(
  <MeetingRoom/>

)}

      </StreamTheme>
    </StreamCall>
    
    
    
    </main>
  )
}

export default Page