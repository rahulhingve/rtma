import { VideoIcon , ProjectorIcon , CalendarClock ,CalendarArrowUp ,PlusIcon } from "lucide-react"

export const sidebarLinks = [
    {
        label:"Meetings",
        route:"/home",
        imgUrl: ProjectorIcon
    },
    {
        label:"Upcoming",
        route:"/upcoming",
        imgUrl: CalendarClock
    },
    {
        label:"Previous",
        route:"/previous",
        imgUrl: CalendarArrowUp
    },
    {
        label:"Recordings",
        route:"/recordings",
        imgUrl: VideoIcon
    },
    {
        label:"Personal Room",
        route:"/personal-room",
        imgUrl: PlusIcon
    },
]

export const avatarImages = [
    '/images/avatar-1.jpeg',
    '/images/avatar-2.jpeg',
    '/images/avatar-3.png',
    '/images/avatar-4.png',
    '/images/avatar-5.png',
  ];