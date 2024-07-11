import { Meeting } from '@/app/components/meeting'
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'

const page = async () => {
    const session = await getServerSession(authOptions);
    if(!session?.user){
        redirect("/signin")
    }
  return (
    <div>
        <Meeting/>
    </div>
  )
}

export default page