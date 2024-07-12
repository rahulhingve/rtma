
import { Meeting } from '@/components/meeting'
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'


const page = async ({params}:{params:{id: string}}) => {

  

    const session = await getServerSession(authOptions);
    if(!session?.user){
        redirect("/signin")
    }else{
      redirect("/meeting/home")
    }
  }
  

export default page