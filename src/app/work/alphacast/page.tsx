'use client';

import Header from "@/app/components/Header"
import Image from "next/image"
import { Link as LinkIcon } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { useState, useEffect, useRef } from "react"

const caseStudy = {
  client: "Alphacast",
  date: "October 2024",
}

const alphacast = {
  color: '#513edf',
}

// Mock data for the dots
const interactivePoints = [
  {
    id: 1,
    x: 50,
    y: 3,
    title: "Header",
    description: "By introducing a background to the header, we created a clear visual separation from the rest of the page, making navigation more distinct and improving overall readability.",
  },
  {
    id: 2,
    x: 12,
    y: 12,
    title: "Create New Button",
    description: "Separating the “Create New” button from the user elements made it easier to locate and gave it clearer context, allowing users to focus on the task at hand without confusion.",
  },
  {
    id: 3,
    x: 21,
    y: 15,
    title: "Clips Button",
    description: "The “Clips” button was separated from the “Create New” button, highlighting it as one of the most frequently used features and allowing users to access it more quickly and efficiently.",
  },
  {
    id: 4,
    x: 20,
    y: 50,
    title: "Repositories Navigation",
    description: "By improving text hierarchy and readability, we created a much clearer and more enjoyable experience for users. Additionally, establishing an explicit division between personal and shared repositories made it easier to understand where to locate data.",
  },
  { 
    id: 5,
    x: 10,
    y: 55,
    title: "View All button",
    description: "Reduced the number of visible repositories to the last three accessed and added a “View All” button, improving focus on recent work while still providing quick access to the complete list when needed.",
  },
  { 
    id: 6,
    x: 0.5,
    y: 90,
    title: "Repositories Search",
    description: "Added a dedicated search box for repositories, providing clearer context and making it easier to find repos compared to the main search, which also includes other assets.",
  },
  { 
    id: 7,
    x: 32,
    y: 36,
    title: "Asset Cards",
    description: "Improved the asset cards by adding icons to quickly identify asset types and placing the interaction buttons (edit, share, continue working) in a more contextual, intuitive location for easier access.",
  },
]

export default function Alphacast(){
  const [imageLoadedStates, setImageLoadedStates] = useState<Record<string, boolean>>({});

  const setImageLoaded = (imageKey: string) => {
    setImageLoadedStates(prev => ({ ...prev, [imageKey]: true }));
  };
  const [isInView, setIsInView] = useState(false)
  const dashboardRef = useRef<HTMLDivElement>(null)
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      {
        threshold: 0.05, // Trigger when ~5% of the element is visible (earlier)
        rootMargin: "0px 0px -20% 0px", // Start earlier without needing much scroll
      },
    );

    const current = dashboardRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);
  return(
    <>
      <div className="case-study-body w-full">
        <Header layoutClass="pt-10 w-[calc(100%-40px)] max-w-[1280px] mx-auto mb-5 flex flex-row justify-between items-center" caseStudy={caseStudy}/>
        <p className="container my-30 text-sm text-white bg-red-300 rounded-lg p-3 lg:hidden">While I believe in a mobile-first world, I also believe that the work I do is best appreciated on a big screen for portfolio purposes, so it may not render perfectly here.</p>
        <section className="container mx-auto">
          <h1 className="font-black tracking-tighter text-5xl leading-tight my-20">How We Cut Customer Questions by Over 80% and Improved Navigation & Overall Experience by Redesigning Alphacast&apos;s Main Page.</h1>
        </section>
        <section className="container flex flex-row justify-between mb-10 mx-auto">
          <div className="w-[calc(60%-20px)]">
            <h2 className="text-4xl font-black tracking-tight mb-5">The Client</h2>
            <p className="mb-20">In this case study, we explore <strong style={{ color: alphacast.color }}>Alphacast</strong>, a rapidly growing startup revolutionizing the way Economic & Financial data is used. The platform focuses on providing ready-to-use data for integration into models, dashboards, and reports.</p>
            <h2 className="text-4xl font-black tracking-tight mb-5">The Problem</h2>
            <p className="mb-2">As a fast-paced, highly technical startup, <strong style={{ color: alphacast.color }}>Alphacast</strong> did not have a dedicated design team. The development team had been quickly shipping features and tools, but without a clear design direction.</p>
            <p className="mb-20">After heavy client usage, they discovered that content creators struggled to understand where their projects were saved. Additionally, users working in teams had to click at least four times to reach their team content, making the experience inefficient and time-consuming.</p>
          </div>
          <div className="w-[calc(35%-20px)]">
            <div className="card">
              <Image
                src="/projects/alphacast/alphacast.svg"
                alt="Alphacast.io"
                width={300}
                height={100}
                className="w-full h-auto mb-2"
              />
              <p className="font-bold mb-5">Economic & Financial data ready to use in your models, dashboards and reports.</p>
              <p className="tag text-sm items-center mb-5"><LinkIcon size={12} className="inline"/> http://alphacast.io</p>
              <hr className="w-full mx-auto mb-5"/>
              <p className="font-bold uppercase mb-2 text-lg">Tasks:</p>
              <dl>
                <dd className="mb-2">- Design Direction</dd>
                <dd className="mb-2">- Product Design</dd>
                <dd className="mb-2">- Figma Mockups</dd>
                <dd className="mb-2">- Small Frontend Code Additions</dd>
              </dl>
            </div>
          </div>
        </section>
        <section className="container mx-auto mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-10">UI Problems Before the Redesign</h2>
          <div className="w-full flex flex-row justify-between gap-5 mx-auto mb-20">
            <div className="relative h-fit w-[250px]">
              {!imageLoadedStates['01'] && (
                <Skeleton className="absolute inset-0 h-[200px] w-[250px] bg-slate-100 rounded" />
              )}
              <div>
                <Image
                  src="/projects/alphacast/alphacast-cs-01.png"
                  alt="Alphacast Case Study Screenshot"
                  width={250}
                  height={200}
                  className={`h-[200px] w-[250px] object-cover bg-slate-100 rounded border shadow-sm transition-all duration-300 hover:scale-[1.02] transform-gpu will-change-transform ${
                    imageLoadedStates['01'] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImageLoaded('01')}
                />
                <p className="text-xs mt-3 text-left px-1">No visual distinction between the header, sidebar, and content area.</p>
              </div>
            </div>
            <div className="relative h-fit w-[250px]">
              {!imageLoadedStates['02'] && (
                <Skeleton className="absolute inset-0 h-[200px] w-[250px] bg-slate-100 rounded" />
              )}
              <div>
                <Image
                  src="/projects/alphacast/alphacast-cs-02.png"
                  alt="Alphacast Case Study Screenshot"
                  width={250}
                  height={200}
                  className={`h-[200px] w-[250px] object-cover bg-slate-100 rounded border shadow-sm transition-all duration-300 hover:scale-[1.02] transform-gpu will-change-transform ${
                    imageLoadedStates['02'] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImageLoaded('02')}
                />
                <p className="text-xs mt-3 text-left px-1">No hierarchy between elements; everything looked the same.</p>
              </div>
            </div>
            <div className="relative h-fit w-[250px]">
              {!imageLoadedStates['03'] && (
                <Skeleton className="absolute inset-0 h-[200px] w-[250px] bg-slate-100 rounded" />
              )}
              <div>
                <Image
                  src="/projects/alphacast/alphacast-cs-03.png"
                  alt="Alphacast Case Study Screenshot"
                  width={250}
                  height={200}
                  className={`h-[200px] w-[250px] object-cover bg-slate-100 rounded border shadow-sm transition-all duration-300 hover:scale-[1.02] transform-gpu will-change-transform ${
                    imageLoadedStates['03'] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImageLoaded('03')}
                />
                <p className="text-xs mt-3 text-left px-1">No visual cues for identifying owned vs shared repositories.</p>
              </div>
            </div>
            <div className="relative h-fit w-[250px]">
              {!imageLoadedStates['04'] && (
                <Skeleton className="absolute inset-0 h-[200px] w-[250px] bg-slate-100 rounded" />
              )}
              <div>
                <Image
                  src="/projects/alphacast/alphacast-cs-04.png"
                  alt="Alphacast Case Study Screenshot"
                  width={250}
                  height={200}
                  className={`h-[200px] w-[250px] object-cover bg-slate-100 rounded border shadow-sm transition-all duration-300 hover:scale-[1.02] transform-gpu will-change-transform ${
                    imageLoadedStates['04'] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImageLoaded('04')}
                />
                <p className="text-xs mt-3 text-left px-1">The &quot;Create New&quot; button was buried in the header, mixed with account-related elements, which caused confusion and broke context.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto mb-20">
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-5">The Solution</h2>
            <p className="mb-20">After a few strategic calls with the Alphacast team to understand how the app worked, how users behaved, and what changes we could implement without a major technical effort, we proposed the following updates:</p>
          </div>
          <div ref={dashboardRef} className="relative ">
            <div
              className={`transition-all duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isInView ? "translate-y-0 skew-y-0 opacity-100" : "translate-y-10 skew-y-2 opacity-0"
              }`}
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="mb-20">
                {!imageLoadedStates['05'] && (
                  <Skeleton className="absolute inset-0 h-[200px] w-[1280px] bg-slate-100 rounded" />
                )}
                <Image
                  src="/projects/alphacast/alphacast-cs-05.png"
                  alt="Alphacast Case Study Screenshot"
                  width={1280}
                  height={200}
                  className={`h-[] w-full object-cover bg-slate-100 rounded transition-opacity duration-300 border shadow-sm ${
                    imageLoadedStates['05'] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImageLoaded('05')}
                />
              </div>
              {/* Interactive Points */}
              {interactivePoints.map((point) => (
                <div
                  key={point.id}
                  className="absolute"
                  style={{ left: `${point.x}%`, top: `${point.y}%` }}
                  onMouseEnter={() => setHoveredPoint(point.id)}
                  onMouseLeave={() => setHoveredPoint(null)}
                >
                  {/* Pulsating dot */}
                  <div className="relative">
                    <div className="w-4 h-4 bg-purple-600 rounded-full animate-pulse cursor-pointer relative z-10"></div>
                    <div className="absolute inset-0 w-4 h-4 bg-purple-600 rounded-full animate-ping opacity-30"></div>
                  </div>

                  {/* Tooltip */}
                  {hoveredPoint === point.id && (
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl border p-4 w-64 z-20">
                      <h4 className="font-semibold text-sm text-gray-900 mb-1">{point.title}</h4>
                      <p className="text-xs text-gray-600">{point.description}</p>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                    </div>
                  )}
                </div>
              ))} 
            </div>
          </div>
          <div className="mb-20 flex flex-row flex-wrap justify-between gap-5">
            <div className="w-[calc(50%-40px)] mb-5">
              <h4 className="font-bold text-xl mb-2">1. Rename “Home” to “Dashboard”</h4>
              <p className="mb-2">Users now land on a dashboard where they can instantly see the latest projects they’ve worked on and what’s been shared with them.</p>
              <p className="mb-2">This change created a more natural and intuitive entry point—something users immediately understood as a hub for their work.</p>
            </div>
            <div className="w-[calc(50%-40px)] mb-5">
              <h4 className="font-bold text-xl mb-2">2. Sidebar Improvements</h4>
              <p className="mb-2">We restructured the sidebar, simplifying navigation and saving two clicks each time a user accessed a repository. We also limited the number of repositories shown (since most users only have 2–3), and added a “View All” link to access the complete list.</p>
            </div>
            <div className="w-[calc(50%-40px)] mb-5">
              <h4 className="font-bold text-xl mb-2">3. Context, Content & Title Weight</h4>
              <p className="mb-2">We made small visual tweaks to better separate context from content in both the sidebar and the header. We also refined typography for improved readability.</p>
              <p className="mb-2">Main content cards were redesigned for consistent sizing and formatting, making them easier to scan and understand.</p>
            </div>
            <div className="w-[calc(50%-40px)] mb-5">
              <h4 className="font-bold text-xl mb-2">4. Improved Team Page Access</h4>
              <p className="mb-2">We merged the “Team Info” and “Team Homepage” into a single view and placed direct links in the sidebar. Now, each repository clearly shows the owning team, along with a link to access the team files.</p>
            </div>
          </div>
        </section>
        <section className="container mx-auto mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-10">More UI Refinements</h2>
          <div className="w-full flex flex-row justify-between gap-5 mx-auto mb-20">
            <div className="relative h-fit w-[250px]">
              {!imageLoadedStates['06'] && (
                <Skeleton className="absolute inset-0 h-[200px] w-[250px] bg-slate-100 rounded" />
              )}
              <div>
                <Image
                  src="/projects/alphacast/alphacast-cs-06.png"
                  alt="Alphacast Case Study Screenshot"
                  width={250}
                  height={200}
                  className={`h-[200px] w-[250px] object-cover bg-slate-100 rounded border shadow-sm transition-all duration-300 hover:scale-[1.02] transform-gpu will-change-transform ${
                    imageLoadedStates['06'] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImageLoaded('06')}
                />
                <p className="text-xs mt-3 text-left px-1">Enhanced asset card design for consistency, clarity, and better interaction.</p>
              </div>
            </div>
            <div className="relative h-fit w-[250px]">
              {!imageLoadedStates['07'] && (
                <Skeleton className="absolute inset-0 h-[200px] w-[250px] bg-slate-100 rounded" />
              )}
              <div>
                <Image
                  src="/projects/alphacast/alphacast-cs-07.png"
                  alt="Alphacast Case Study Screenshot"
                  width={250}
                  height={200}
                  className={`h-[200px] w-[250px] object-cover bg-slate-100 rounded border shadow-sm transition-all duration-300 hover:scale-[1.02] transform-gpu will-change-transform ${
                    imageLoadedStates['07'] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImageLoaded('07')}
                />
                <p className="text-xs mt-3 text-left px-1">Moved internal tab navigation to a more contextual top-level position.</p>
              </div>
            </div>
            <div className="relative h-fit w-[250px]">
              {!imageLoadedStates['08'] && (
                <Skeleton className="absolute inset-0 h-[200px] w-[250px] bg-slate-100 rounded" />
              )}
              <div>
                <Image
                  src="/projects/alphacast/alphacast-cs-08.png"
                  alt="Alphacast Case Study Screenshot"
                  width={250}
                  height={200}
                  className={`h-[200px] w-[250px] object-cover bg-slate-100 rounded border shadow-sm transition-all duration-300 hover:scale-[1.02] transform-gpu will-change-transform ${
                    imageLoadedStates['08'] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImageLoaded('08')}
                />
                <p className="text-xs mt-3 text-left px-1">On team pages, added clearer visual cues to identify team-owned repositories, including a “Follow” button and icons to indicate access level.</p>
              </div>
            </div>
            <div className="relative h-fit w-[250px]">
              {!imageLoadedStates['09'] && (
                <Skeleton className="absolute inset-0 h-[200px] w-[250px] bg-slate-100 rounded" />
              )}
              <div>
                <Image
                  src="/projects/alphacast/alphacast-cs-09.png"
                  alt="Alphacast Case Study Screenshot"
                  width={250}
                  height={200}
                  className={`h-[200px] w-[250px] object-cover bg-slate-100 rounded border shadow-sm transition-all duration-300 hover:scale-[1.02] transform-gpu will-change-transform ${
                    imageLoadedStates['09'] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImageLoaded('09')}
                />
                <p className="text-xs mt-3 text-left px-1">Simplified team cards by relocating metadata to a side panel and grouping team members in a compact layout.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="container mx-auto mb-20 flex flex-row justify-between gap-5">
          <div className="w-[calc(50%-20px)]">
            <h2 className="text-4xl font-black tracking-tight mb-5">The Results</h2>
            <p className="mb-5">Within one month of deployment, we saw measurable improvements in both user satisfaction and operational efficiency:</p>
            <p className="mb-5">83% reduction in support questions related to file and project location.</p>
            <p className="mb-5">22% reduction in questions about accessing team pages.</p>
            <p className="mb-5">Additionally, the Client Onboarding team reported a smoother, faster onboarding flow, making it easier to present the platform’s structure and features clearly. These improvements led to stronger daily workflows and helped increase platform adoption and trust.</p>
          </div>
          <div className="w-[calc(40%-20px)]">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 text-center relative overflow-hidden shadow-sm mb-5 group transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-125 group-hover:opacity-80 transition-transform duration-300"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100 rounded-full translate-y-12 -translate-x-12 opacity-50  group-hover:scale-125 group-hover:opacity-80 transition-transform duration-300"></div>
              <div className="flex flex-row items-center justify-between text-left w-[100%] mx-auto">
                <div className="w-1/2 text-6xl text-right pr-5 font-bold tracking-tighter" style={{ color: alphacast.color }}>-83%</div>
                <div className="w-1/2 font-semibold ">questions about navigation or app usage</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 text-center group duration-300 shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300" style={{ background: alphacast.color }}>
                  <svg className="w-6 h-6 text-white rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 7H3m0 0v8m0-8l8 8 4-4 6 6"
                    />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">-22%</div>
                <div className="text-sm font-semibold">questions about team access</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 text-center group transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-5 group-hover:scale-110 transition-transform duration-300" style={{ background: alphacast.color }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <p className="font-semibold">Increased user and team satisfaction</p>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto pb-40 relative overflow-hidden">
          <h2 className="text-4xl font-black tracking-tight mb-5">We can help you too.</h2>
          <h2>Get in touch and let&apos;s make something awesome together!</h2>
          <p>We&apos;re pumped to help you take your project to the next level.</p>
          <p className="mt-10 inline-block group transition-all duration-300 hover:rotate-[-1deg] hover:shadow-md"><a href="mailto:cb@hashboxed.com" className="px-8 py-4 text-2xl font-bold tracking-tighter text-white rounded-full" style={{ background: alphacast.color }}>cb@hashboxed.com</a></p>
          <Image
            src="/projects/alphacast/pencil.png"
            alt="Hashboxed Smart Design Consulting"
            width={250}
            height={200}
            className="h-[500px] w-[500px] absolute bottom-[-200px] right-10 opacity-45 rotate-[15deg]"
          />
        </section>
      </div>
    </>    
  )
}
