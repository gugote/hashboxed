import Header from "../components/Header"
import Footer from "../components/Footer"
import ProjectCards from "./ProjectCards"

export default function Works() {
  return (
    <>
      <div className="stripes bg-works-bg-stripes w-full h-[170px] bg-cover absolute bottom-[-100px] z-10 hidden lg:inline"></div>
      <div className="works relative w-full bg-zinc-200">
        <div className="background min-h-dvh bg-works-bg-02 bg-[length:auto_100dvh] bg-top bg-no-repeat lg:h-dvh lg:min-h-0 lg:bg-cover lg:bg-bottom">
          <Header layoutClass="container pt-10 w-[calc(100%-40px)] max-w-[1000px] mx-auto"/>
          <div className="container w-[calc(100%-40px)] max-w-[1000px] mx-auto relative">
            <h1 className="mt-24 text-[clamp(4rem,22vw,6.25rem)] font-extrabold tracking-tighter text-copy drop-shadow-2xl lg:mt-[200px]">Work</h1>
            <p className="mb-10 w-full text-lg font-extrabold tracking-tighter text-copy drop-shadow-xl lg:mb-[50px] lg:w-1/2 lg:text-[20px]">Specializing in MVPs and smart design consulting for startups, I can design smart, modern, and scalable user interfaces. I focus on delivering creative solutions that work efficiently and look great.</p>
            <ProjectCards layoutClass="z-30 relative"/>
            <div className="pb-8 sm:px-5"><Footer /></div>
          </div>
          
        </div>
      </div>
    </>
  )
}
