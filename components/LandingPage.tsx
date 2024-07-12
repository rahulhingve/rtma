'use client'
import Image from "next/image"

import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { signOut, useSession } from "next-auth/react"
import { authOptions } from "@/app/(pages)/api/auth/[...nextauth]/options"
import { CalendarIcon, CheckIcon, LockIcon, RepeatIcon, ShareIcon, VideoIcon, WebcamIcon } from "./ui/SvgIcons"

export default function LandingPage() {
  const { data: session } = useSession(authOptions);

  return (
    <div className="flex min-h-[100dvh] flex-col bg-[#f0f7ff]">
      <header className="sticky top-0 z-50 bg-[#f0f7ff]/90 backdrop-blur-sm">
        <div className="animate-slidein [--slidein-delay:100ms] opacity-0 container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <VideoIcon className="h-8 w-8" />
            <span className="text-xl font-bold">MeetHub</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link
              href="#features"
              className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-[#e6f2ff] hover:text-[#3d2930]"
              prefetch={false}
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-[#e6f2ff] hover:text-[#3d2930]"
              prefetch={false}
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-[#e6f2ff] hover:text-[#3d2930]"
              prefetch={false}
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-[#e6f2ff] hover:text-[#3d2930]"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <div className="">
            {session ? <div className="flex items-center gap-2">Hello&nbsp;<b>{session.user?.name}</b>  <Avatar ><AvatarImage className="rounded-lg" src={session.user?.image || undefined} /><AvatarFallback>{session.user?.name ? session.user?.name[0] : ""}</AvatarFallback></Avatar> <Button className="rounded-xl bg-[#c9ebf7] px-4 py-2 text-sm font-medium text-[#2c3844] transition-colors hover:bg-[#c9ebf7]/90 focus:outline-none focus:ring-2 focus:ring-[#c9ebf7] focus:ring-offset-2" onClick={() => {
              signOut()
            }}>Logout</Button>  </div> : <div className=" flex items-center gap-2"><Link
              href="/signin"
              className="rounded-xl  bg-[#eec3e8] px-4 py-2 text-sm font-medium text-[#2c3844] transition-colors hover:bg-[#eec3e8]/90 focus:outline-none focus:ring-2 focus:ring-[#eec3e8] focus:ring-offset-2"
              prefetch={false}
            >
              Log in
            </Link>
              <Link
                href="/signin"
                className="rounded-xl bg-[#c9ebf7] px-4 py-2 text-sm font-medium text-[#2c3844] transition-colors hover:bg-[#c9ebf7]/90 focus:outline-none focus:ring-2 focus:ring-[#c9ebf7] focus:ring-offset-2"
                prefetch={false}
              >
                Sign up
              </Link></div>}
          </div>
        </div>
      </header>
      <main>
        <section className="animate-slidein [--slidein-delay:100ms] opacity-0 bg-gradient-to-r from-[#eec3e8] to-[#c9ebf7] py-20 text-[#2c3844]">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-6 motion-safe:animate-fadeInLeft">
                <h1 className="animate-slidein [--slidein-delay:300ms] opacity-0 text-4xl font-bold sm:text-5xl lg:text-6xl">Simplify Your Meetings with MeetHub</h1>
                <p className="animate-slidein [--slidein-delay:500ms] opacity-0  text-lg ">
                  Experience seamless video conferencing, real-time collaboration, and effortless meeting management
                  with MeetHub.
                </p>
                <div className="animate-slidein [--slidein-delay:700ms] opacity-0 flex gap-4">
                  <Link
                    href="/meeting"
                    className="rounded-xl border bg-[#2c3844] px-6 py-3 text-sm font-medium text-[#eec3e8] transition-colors   hover:border hover:text-[#3d2930] hover:bg-[#eec3e8] hover:border-[#2c3844] "
                    prefetch={false}
                  >
                    Start Meeting
                  </Link>
                  <Link
                    href="#"
                    className="rounded-xl border border-[#2c3844] px-6 py-3 text-sm font-medium text-[#2c3844] transition-colors hover:bg-[#2c3844] hover:text-[#eec3e8] focus:outline-none focus:ring-2 focus:ring-[#eec3e8] focus:ring-offset-2"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="animate-slidein [--slidein-delay:400ms] opacity-0 flex items-center justify-center motion-safe:animate-fadeInRight">
                <img
                  src="/LandingImg.jpg"
                  alt="MeetHub Hero Image"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="bg-[#e6f2ff] py-20 motion-safe:animate-fadeInUp">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="animate-slidein [--slidein-delay:100ms] opacity-0 space-y-8 text-center">
              <div>
                <h2 className="animate-slidein [--slidein-delay:300ms] opacity-0 text-3xl font-bold sm:text-4xl">Powerful Features for Seamless Meetings</h2>
                <p className="animate-slidein [--slidein-delay:350ms] opacity-0 mt-4 text-[#2c3844]">
                  MeetHub offers a comprehensive suite of tools to enhance your virtual meetings.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="animate-slidein [--slidein-delay:500ms] opacity-0 rounded-lg bg-[#f0f7ff] p-6 shadow-lg motion-safe:animate-fadeInUp">
                  <VideoIcon className="h-8 w-8 text-[#eec3e8]" />
                  <h3 className="mt-4 text-xl font-bold">Seamless Video Calls</h3>
                  <p className="mt-2 text-[#2c3844]">
                    Enjoy high-quality video and audio for your virtual meetings, with support for up to 100
                    participants.
                  </p>
                </div>
                <div className="animate-slidein [--slidein-delay:500ms] opacity-0 rounded-lg bg-[#f0f7ff] p-6 shadow-lg motion-safe:animate-fadeInUp">
                  <CalendarIcon className="h-8 w-8 text-[#eec3e8]" />
                  <h3 className="mt-4 text-xl font-bold">Easy Scheduling</h3>
                  <p className="mt-2 text-[#2c3844]">
                    Seamlessly integrate MeetHub with your calendar to schedule and manage meetings with ease.
                  </p>
                </div>
                <div className="animate-slidein [--slidein-delay:500ms] opacity-0 rounded-lg bg-[#f0f7ff] p-6 shadow-lg motion-safe:animate-fadeInUp">
                  <ShareIcon className="h-8 w-8 text-[#eec3e8]" />
                  <h3 className="mt-4 text-xl font-bold">Screen Sharing</h3>
                  <p className="mt-2 text-[#2c3844]">
                    Share your screen, collaborate on documents, and present ideas in real-time during your meetings.
                  </p>
                </div>
                <div className="animate-slidein [--slidein-delay:500ms] opacity-0 rounded-lg bg-[#f0f7ff] p-6 shadow-lg motion-safe:animate-fadeInUp">
                  <WebcamIcon className="h-8 w-8 text-[#eec3e8]" />
                  <h3 className="mt-4 text-xl font-bold">Real-Time Collaboration</h3>
                  <p className="mt-2 text-[#2c3844]">
                    Engage in real-time chat, share files, and collaborate seamlessly with your team during meetings.
                  </p>
                </div>
                <div className="animate-slidein [--slidein-delay:500ms] opacity-0 rounded-lg bg-[#f0f7ff] p-6 shadow-lg motion-safe:animate-fadeInUp">
                  <RepeatIcon className="h-8 w-8 text-[#eec3e8]" />
                  <h3 className="mt-4 text-xl font-bold">Meeting Recording</h3>
                  <p className="mt-2 text-[#2c3844]">
                    Record your meetings and access them later for review or to share with team members.
                  </p>
                </div>
                <div className="animate-slidein [--slidein-delay:500ms] opacity-0 rounded-lg bg-[#f0f7ff] p-6 shadow-lg motion-safe:animate-fadeInUp">
                  <LockIcon className="h-8 w-8 text-[#eec3e8]" />
                  <h3 className="mt-4 text-xl font-bold">Secure Authentication</h3>
                  <p className="mt-2 text-[#2c3844]">
                    Ensure the privacy and security of your meetings with robust user authentication and access
                    controls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="animate-slidein [--slidein-delay:500ms] opacity-0 bg-[#f0f7ff] py-20 motion-safe:animate-fadeInUp">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8 text-center">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl">What Our Users Say</h2>
                <p className="mt-4 text-[#2c3844]">
                  Hear from our satisfied customers about their experience with MeetHub.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-[#e6f2ff] p-6 shadow-lg motion-safe:animate-fadeInUp">
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
                        <p className="text-sm text-[#2c3844]">CEO, Acme Inc.</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
                <div className="rounded-lg bg-[#e6f2ff] p-6 shadow-lg motion-safe:animate-fadeInUp">
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
                        <p className="text-sm text-[#2c3844]">Project Manager, Acme Inc.</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
                <div className="rounded-lg bg-[#e6f2ff]  p-6 shadow-lg motion-safe:animate-fadeInUp">
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
                        <p className="text-sm text-[#2c3844]">Product Manager, Acme Inc.</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="animate-slidein [--slidein-delay:500ms] opacity-0 bg-[#e6f2ff] py-20 motion-safe:animate-fadeInUp">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8 text-center">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl">Flexible Pricing for Your Needs</h2>
                <p className="mt-4 text-[#2c3844]">Choose the plan that best suits your team&apos;s requirements.</p>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-[#f0f7ff] p-6 shadow-lg motion-safe:animate-fadeInUp">
                  <h3 className="text-xl font-bold">Starter</h3>
                  <p className="mt-4 text-4xl font-bold">$9</p>
                  <p className="mt-2 text-[#2c3844]">per user/month</p>
                  <ul className="mt-6 space-y-4 text-left">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-[#eec3e8]" />
                      <span>Up to 10 participants</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-[#eec3e8]" />
                      <span>1 GB cloud storage</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-[#eec3e8]" />
                      <span>Basic meeting features</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full rounded-xl  bg-[#eec3e8] px-4 py-2 text-sm font-medium text-[#2c3844] transition-colors hover:bg-[#eec3e8]/90 focus:outline-none focus:ring-2 focus:ring-[#eec3e8] focus:ring-offset-2">Get Started</Button>
                </div>
                <div className="rounded-lg bg-[#f0f7ff]  p-6 shadow-lg motion-safe:animate-fadeInUp">
                  <h3 className="text-xl font-bold">Pro</h3>
                  <p className="mt-4 text-4xl font-bold">$19</p>
                  <p className="mt-2 text-[#2c3844]">per user/month</p>
                  <ul className="mt-6 space-y-4 text-left">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-[#eec3e8]" />
                      <span>Up to 50 participants</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-[#eec3e8]" />
                      <span>10 GB cloud storage</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-[#eec3e8]" />
                      <span>Advanced meeting features</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full rounded-xl  bg-[#eec3e8] px-4 py-2 text-sm font-medium text-[#2c3844] transition-colors hover:bg-[#eec3e8]/90 focus:outline-none focus:ring-2 focus:ring-[#eec3e8] focus:ring-offset-2">Get Started</Button>
                </div>
                <div className="rounded-lg bg-[#f0f7ff] p-6 shadow-lg motion-safe:animate-fadeInUp">
                  <h3 className="text-xl font-bold">Unlimited</h3>
                  <p className="mt-4 text-4xl font-bold">get price</p>
                  <p className="mt-2 text-[#2c3844]">per user/month</p>
                  <ul className="mt-6 space-y-4 text-left">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-[#eec3e8]" />
                      <span>Custum range of  participants</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-[#eec3e8]" />
                      <span>Unlimited cloud storage</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-[#eec3e8]" />
                      <span>Advanced meeting features</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full rounded-xl  bg-[#eec3e8] px-4 py-2 text-sm font-medium text-[#2c3844] transition-colors hover:bg-[#eec3e8]/90 focus:outline-none focus:ring-2 focus:ring-[#eec3e8] focus:ring-offset-2">Get Started</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="animate-slidein [--slidein-delay:300ms] opacity-0 bg-[#e6f2ff] py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
              <p className="text-[#2c3844] text-lg md:text-xl">Have questions or need help? Contact our team.</p>
            </div>
            <form className="max-w-md  mx-auto space-y-4">
              <Input type="text" placeholder="Name" className="w-full border  bg-[#f0f7ff] border-[#628FBC] rounded-xl" />
              <Input type="email" placeholder="Email" className="w-full border bg-[#f0f7ff] border-[#628FBC] rounded-xl" />
              <Textarea placeholder="Message" className="w-full border bg-[#f0f7ff] border-[#628FBC] rounded-xl" />
              <Button type="submit" className="rounded-xl  bg-[#eec3e8] px-4 py-2 text-sm font-medium text-[#2c3844] transition-colors hover:bg-[#eec3e8]/90 focus:outline-none focus:ring-2 focus:ring-[#eec3e8] focus:ring-offset-2">Submit</Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-[#eec3e8] text-[#2c3844] px-4 lg:px-6 py-6 flex flex-col md:flex-row items-center justify-between">
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
};