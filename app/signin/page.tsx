import { LoginPage } from '@/components/login-page'
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation'

const page = async () => {
    const session = await getServerSession(authOptions);
    if(session){
        redirect("/")
    }
  return (
    <div>
        <LoginPage/>
    </div>
  )
}

export default page