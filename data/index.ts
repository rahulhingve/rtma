import { VideoIcon , ProjectorIcon , CalendarClock ,CalendarArrowUp ,PlusIcon } from "lucide-react"

export const sidebarLinks = [
    {
        label:"Meetings",
        route:"/meeting/home",
        imgUrl: ProjectorIcon
    },
    {
        label:"Upcoming",
        route:"/meeting/upcoming",
        imgUrl: CalendarClock
    },
    {
        label:"Previous",
        route:"/meeting/previous",
        imgUrl: CalendarArrowUp
    },
    {
        label:"Recordings",
        route:"/meeting/recordings",
        imgUrl: VideoIcon
    },
    {
        label:"Personal Room",
        route:"/meeting/personal-room",
        imgUrl: PlusIcon
    },
]