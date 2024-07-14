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