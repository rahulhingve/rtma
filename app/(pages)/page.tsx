
import { Meeting } from '@/components/meeting'
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation'


const page = async () => {

  

    const session = await getServerSession(authOptions);
    if(session?.user){
        redirect("/home")
    }else{
      redirect("/signin")
    }
  }
  

export default page