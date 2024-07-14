'use client'

import { useState } from "react";
import HomeCard from "./HomeCard"
import { useRouter } from "next/navigation";
import { CalendarCheckIcon, PlusIcon, UserPlusIcon, VideoIcon } from "lucide-react";
import MeetingModal from "./MeetingModal";
import { useSession } from "next-auth/react";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";







const MeetingTypeList = () => {
    const router = useRouter();
    const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>();
    const { data: session } = useSession();
    const client = useStreamVideoClient();
    const [values, setValues] = useState({
        dateTime: new Date(),
        description: '',
        link: ''
    })
    const [callDetails, setcallDetails] = useState<Call>()


    const createMeeting = async () => {
       
        if (!client || !session?.user) return;
        try {
            if (!values.dateTime) {
                console.error("Please select a date and time")
                return;
            }

            const id = crypto.randomUUID();
            const call = client.call('default', id);
            if (!call) throw new Error('failed to create call');
            const startAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
            const description = values.description || 'Instant meeting';
            await call.getOrCreate({
                data: {
                    starts_at: startAt,
                    custom: {
                        description
                    }
                }
            })
            setcallDetails(call);
            if (!values.description) {
                router.push(`/meeting/${call.id}`)
            }
            console.error("Meeting created")
        } catch (error) {
            console.log(error);
            console.error("Failed to create meeting")
        }
    }
    return (
        <div>
                
           
        <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
            
            <HomeCard img={PlusIcon}
                title="New Meeting"
                desc="Start an Instant meeting"
                handleClick={() => setMeetingState('isInstantMeeting')}
                className="bg-[#ff742e]"
            />
            <HomeCard img={CalendarCheckIcon}
                title="Schedule Meeting"
                desc="Plan your  meeting"
                handleClick={() => setMeetingState('isScheduleMeeting')}
                className="bg-blue-300" />
            <HomeCard img={VideoIcon}
                title="View Recordings"
                desc="Check out Your Recording"
                handleClick={() => router.push("/recordings")}
                className="bg-purple-300" />
            <HomeCard img={UserPlusIcon}
                title="Join Meeting"
                desc="Join via invitation link "
                handleClick={() => setMeetingState('isJoiningMeeting')}
                className="bg-yellow-300" />

            <MeetingModal
                isOpen={meetingState === 'isInstantMeeting'}
                onClose={() => setMeetingState(undefined)}
                title="Start an Instant Meeting"
                className="text-center"
                buttonText="Start Meeting"
                handleClick={createMeeting}
            />
        </section>
        </div>
    )
}

export default MeetingTypeList