import Header from "../components/Header"
import Footer from "../components/Footer"
import ProjectCards from "./ProjectCards"

export default function Works() {
  return (
    <>
      <div className="stripes bg-works-bg-stripes w-full h-[170px] bg-cover absolute bottom-[-100px] z-10 hidden lg:inline"></div>
      <div className="works relative w-full bg-zinc-200">
        <div className="background h-dvh bg-works-bg-02 bg-cover bg-bottom">
          <Header layoutClass="container pt-10 w-[calc(100%-40px)] max-w-[1000px] mx-auto"/>
          <div className="container w-[calc(100%-40px)] max-w-[1000px] mx-auto relative">
            <p className="my-5 text-sm text-white bg-red-400 rounded-lg p-3 lg:hidden">While I believe in a mobile-first world, I also believe that the work I do is best appreciated on a big screen for portfolio purposes, so it may not render perfectly here.</p>
            <h1 className="text-[100px] font-extrabold tracking-tighter text-copy mt-[200px] drop-shadow-2xl">Work</h1>
            <p className="mb-[50px] w-full lg:w-1/2 text-[20px] text-copy font-extrabold tracking-tighter drop-shadow-xl">Specializing in MVPs and smart design consulting for startups, I can design smart, modern, and scalable user interfaces. I focus on delivering creative solutions that work efficiently and look great.</p>
            <ProjectCards layoutClass="z-30 relative"/>
            <div className="px-5 pb-8"><Footer /></div>
          </div>
          
        </div>
      </div>
    </>
  )
}
