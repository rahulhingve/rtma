'use client'
import { tokenProvider } from '@/actions/stream.actions';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import Loader from '@/components/Loader';
import { StreamVideo, StreamVideoClient } from '@stream-io/video-react-sdk';
import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import { ReactNode, useEffect, useState } from 'react';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;







export default function StreamVideoProvider({ children }: { children: ReactNode }) {
    const [videoClient, setvideoClient] = useState<StreamVideoClient>()
    const { data: session } = useSession(authOptions);
    useEffect(() => {
        if (!session) return;
        if (!apiKey) throw new Error("api key gayab")
        const client = new StreamVideoClient({
            apiKey,
            user: {
                id:session.user?.id ,
                name:session.user?.name,
                image:session.user?.image,


            },
            tokenProvider,
        })
        setvideoClient(client)
    }, [session , session?.user])

      if(!videoClient) return <Loader/>

    return (
        <StreamVideo client={videoClient}>
            {children}
        </StreamVideo>
    );
}
