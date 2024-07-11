'use client'
import Image from "next/image"

import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { signOut, useSession } from "next-auth/react"
import { authOptions } from "../(pages)/api/auth/[...nextauth]/options"

export default function LandingPage() {
  const { data: session } = useSession(authOptions);

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <VideoIcon className="h-8 w-8" />
            <span className="text-xl font-bold">MeetHub</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Features
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Testimonials
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <div className="">
            {session ? <div className="flex items-center gap-2">Hello&nbsp;<b>{session.user?.name}</b>  <Avatar ><AvatarImage className="rounded-lg" src={session.user?.image}/><AvatarFallback>{session.user?.name[0]}</AvatarFallback></Avatar> <Button onClick={()=>{
              signOut()
            }}>Logout</Button>  </div> : <div className=" flex items-center gap-2"><Link
              href="/signin"
              className="rounded-md  bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Log in
            </Link>
              <Link
                href="/signin"
                className="rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                prefetch={false}
              >
                Sign up
              </Link></div>}
          </div>
        </div>
      </header>
      <main>
        <section className="bg-gradient-to-r from-primary to-secondary py-20 text-primary-foreground">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-6 motion-safe:animate-fadeInLeft">
                <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">Simplify Your Meetings with MeetHub</h1>
                <p className="text-lg">
                  Experience seamless video conferencing, real-time collaboration, and effortless meeting management
                  with MeetHub.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="rounded-md border bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-colors   hover:border hover:text-foreground hover:bg-primary hover:border-primary-foreground "
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md border border-primary-foreground px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center motion-safe:animate-fadeInRight">
                <img
                  src="landingImg.jpg"
                  alt="MeetHub Hero Image"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="bg-muted py-20 motion-safe:animate-fadeInUp">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8 text-center">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl">Powerful Features for Seamless Meetings</h2>
                <p className="mt-4 text-muted-foreground">
                  MeetHub offers a comprehensive suite of tools to enhance your virtual meetings.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-background p-6 shadow-lg motion-safe:animate-fadeInUp">
                  <VideoIcon className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 text-xl font-bold">Seamless Video Calls</h3>
                  <p className="mt-2 text-muted-foreground">
                    Enjoy high-quality video and audio for your virtual meetings, with support for up to 100
                    participants.
                  </p>
                </div>
                <div className="rounded-lg bg-background p-6 shadow-lg motion-safe:animate-fadeInUp">
                  <CalendarIcon className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 text-xl font-bold">Easy Scheduling</h3>
                  <p className="mt-2 text-muted-foreground">
                    Seamlessly integrate MeetHub with your calendar to schedule and manage meetings with ease.
                  </p>
                </div>
                <div className="rounded-lg bg-background p-6 shadow-lg motion-safe:animate-fadeInUp">
                  <ShareIcon className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 text-xl font-bold">Screen Sharing</h3>
                  <p className="mt-2 text-muted-foreground">
                    Share your screen, collaborate on documents, and present ideas in real-time during your meetings.
                  </p>
                </div>
                <div className="rounded-lg bg-background p-6 shadow-lg motion-safe:animate-fadeInUp">
                  <WebcamIcon className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 text-xl font-bold">Real-Time Collaboration</h3>
                  <p className="mt-2 text-muted-foreground">
                    Engage in real-time chat, share files, and collaborate seamlessly with your team during meetings.
                  </p>
                </div>
                <div className="rounded-lg bg-background p-6 shadow-lg motion-safe:animate-fadeInUp">
                  <RepeatIcon className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 text-xl font-bold">Meeting Recording</h3>
                  <p className="mt-2 text-muted-foreground">
                    Record your meetings and access them later for review or to share with team members.
                  </p>
                </div>
                <div className="rounded-lg bg-background p-6 shadow-lg motion-safe:animate-fadeInUp">
                  <LockIcon className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 text-xl font-bold">Secure Authentication</h3>
                  <p className="mt-2 text-muted-foreground">
                    Ensure the privacy and security of your meetings with robust user authentication and access
                    controls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="bg-background py-20 motion-safe:animate-fadeInUp">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8 text-center">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl">What Our Users Say</h2>
                <p className="mt-4 text-muted-foreground">
                  Hear from our satisfied customers about their experience with MeetHub.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-muted p-6 shadow-lg motion-safe:animate-fadeInUp">
                  <blockquote className="space-y-4">
                    <p className="text-lg font-medium">
                      &quot;MeetHub has been a game-changer for our team. The seamless\n video and collaboration features
                      have made our remote\n meetings much more productive.&quot;
                    </p>
                    <div className="flex items-center">
                      <Avatar>
                        {/* <AvatarImage src="/avatar-1.png" /> */}
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <p className="text-sm font-medium">John Doe</p>
                        <p className="text-sm text-muted-foreground">CEO, Acme Inc.</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
                <div className="rounded-lg bg-muted p-6 shadow-lg motion-safe:animate-fadeInUp">
                  <blockquote className="space-y-4">
                    <p className="text-lg font-medium">
                      &quot;MeetHub has streamlined our meeting management process.\n The scheduling and recording features
                      have been a\n lifesaver for our team.&quot;
                    </p>
                    <div className="flex items-center">
                      <Avatar>
                        {/* <AvatarImage src="/placeholder-user.jpg" /> */}
                        <AvatarFallback>SM</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <p className="text-sm font-medium">Sarah Miller</p>
                        <p className="text-sm text-muted-foreground">Project Manager, Acme Inc.</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
                <div className="rounded-lg bg-muted p-6 shadow-lg motion-safe:animate-fadeInUp">
                  <blockquote className="space-y-4">
                    <p className="text-lg font-medium">
                      &quot;MeetHub has transformed the way we collaborate as a team.\n The real-time chat and screen sharing
                      features have\n been invaluable.&quot;
                    </p>
                    <div className="flex items-center">
                      <Avatar>
                        {/* <AvatarImage src="/placeholder-user.jpg" /> */}
                        <AvatarFallback>LW</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <p className="text-sm font-medium">Lisa Wang</p>
                        <p className="text-sm text-muted-foreground">Product Manager, Acme Inc.</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="bg-muted py-20 motion-safe:animate-fadeInUp">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8 text-center">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl">Flexible Pricing for Your Needs</h2>
                <p className="mt-4 text-muted-foreground">Choose the plan that best suits your team&apos;s requirements.</p>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-background p-6 shadow-lg motion-safe:animate-fadeInUp">
                  <h3 className="text-xl font-bold">Starter</h3>
                  <p className="mt-4 text-4xl font-bold">$9</p>
                  <p className="mt-2 text-muted-foreground">per user/month</p>
                  <ul className="mt-6 space-y-4 text-left">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                      <span>Up to 10 participants</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                      <span>1 GB cloud storage</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                      <span>Basic meeting features</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full">Get Started</Button>
                </div>
                <div className="rounded-lg bg-background p-6 shadow-lg motion-safe:animate-fadeInUp">
                  <h3 className="text-xl font-bold">Pro</h3>
                  <p className="mt-4 text-4xl font-bold">$19</p>
                  <p className="mt-2 text-muted-foreground">per user/month</p>
                  <ul className="mt-6 space-y-4 text-left">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                      <span>Up to 50 participants</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                      <span>10 GB cloud storage</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                      <span>Advanced meeting features</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full">Get Started</Button>
                </div>
                <div className="rounded-lg bg-background p-6 shadow-lg motion-safe:animate-fadeInUp">
                  <h3 className="text-xl font-bold">Unlimited</h3>
                  <p className="mt-4 text-4xl font-bold">get price</p>
                  <p className="mt-2 text-muted-foreground">per user/month</p>
                  <ul className="mt-6 space-y-4 text-left">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                      <span>Custum range of  participants</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                      <span>Unlimited cloud storage</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                      <span>Advanced meeting features</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full">Get Started</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
              <p className="text-muted-foreground text-lg md:text-xl">Have questions or need help? Contact our team.</p>
            </div>
            <form className="max-w-md mx-auto space-y-4">
              <Input type="text" placeholder="Name" className="w-full" />
              <Input type="email" placeholder="Email" className="w-full" />
              <Textarea placeholder="Message" className="w-full" />
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground px-4 lg:px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <VideoIcon className="h-6 w-6" />
          <span className="text-xl font-bold">MeetHub</span>
        </div>
        <nav className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Support
          </Link>
        </nav>
        <p className="text-sm mt-4 md:mt-0">Made with ❤️ by Rahul</p>
        <p className="text-sm mt-4 md:mt-0">&copy; 2024 MeetHub. All rights reserved.</p>
      </footer>
    </div>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}





function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function RepeatIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </svg>
  )
}


function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}


function VideoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  )
}


function WebcamIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="10" r="8" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 22h10" />
      <path d="M12 22v-4" />
    </svg>
  )
}