
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { getServerSession } from 'next-auth'
import React, { ReactNode } from 'react'
import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation'
import StreamVideoProvider from '@/providers/StreamClientProvider'
import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css'




const layout = async ({ children }: { children: ReactNode }) => {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
        redirect("/signin")
    }

    return (
       

       
        <main className='realtive bg-dark-2'>

            <Navbar />

            <div className='flex'>
                <Sidebar />
                <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pd-14 sm:px-14 '>
                    <div className='w-full '></div>
                    <StreamVideoProvider>
                    
                        {children}
                        
                    </StreamVideoProvider>

                </section>
            </div>
        </main>
       
    )
}

export default layout