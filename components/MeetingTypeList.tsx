'use client'

import { useState } from "react";
import HomeCard from "./HomeCard"
import { useRouter } from "next/navigation";
import { CalendarCheckIcon, PlusIcon, UserPlusIcon, VideoIcon } from "lucide-react";
import MeetingModal from "./MeetingModal";
import { useSession } from "next-auth/react";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { Textarea } from "./ui/textarea";

import ReactDatePicker from 'react-datepicker';
import Image from "next/image";





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

    const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`
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
            {!callDetails ?(
               <MeetingModal
               isOpen={meetingState === 'isScheduleMeeting'}
               onClose={() => setMeetingState(undefined)}
               title="Create Meeting"
               buttonText="Start Meeting"
               handleClick={createMeeting}
           > 
           <div className="flex flex-col gap-2.5">
           <label className="text-base font-normal leading-[22.4px] text-sky-300">
              Add a description
            </label>
            <Textarea
              className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
           </div>
           <div className="flex w-full flex-col gap-2.5">
            <label className="text-base font-normal leading-[22.4px] text-sky-200">
              Select Date and Time
            </label>
            <ReactDatePicker
              selected={values.dateTime}
              onChange={(date) => setValues({ ...values, dateTime: date! })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full rounded bg-dark-3 p-2 focus:outline-none"
            />
          </div>
           </MeetingModal>
            ):(
                <MeetingModal
                isOpen={meetingState === 'isScheduleMeeting'}
                onClose={() => setMeetingState(undefined)}
                title="Meeting Created"
                className="text-center"
                handleClick={() => {
                    navigator.clipboard.writeText(meetingLink);
                    
                  }}
                image={'/icons/copy.svg'}
                buttonIcon="/icons/copy.svg"
                buttonText="Copy Meeting Link"
            />
            )}
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