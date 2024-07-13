'use client'

import { useState } from "react";
import HomeCard from "./HomeCard"
import { useRouter } from "next/navigation";
import { CalendarCheckIcon, PlusIcon, UserPlusIcon, VideoIcon } from "lucide-react";
import MeetingModal from "./MeetingModal";



const MeetingTypeList = () => {
    const router = useRouter();
    const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>();


    const createMeeting =()=>{

    }
    return (
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
                handleClick={() => router.push("/meeting/recordings")}
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
    )
}

export default MeetingTypeList