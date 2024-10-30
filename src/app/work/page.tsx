import Header from "../components/Header"
import ProjectCards from "./ProjectCards"

const badgeColor = '#ccc';
const hashColor = '#ffffff';

export default function Works() {
  return (
    <>
      <div className="stripes bg-works-bg-stripes w-full h-[170px] bg-cover absolute bottom-[-100px] z-10 hidden lg:inline"></div>
      <div className="works relative w-full bg-zinc-200">
        <div className="background bg-works-bg-01 h-dvh bg-cover bg-bottom">
          <Header layoutClass="pt-5 w-[calc(100%-40px)] max-w-[1000px] mx-auto"/>
          <div className="container w-[calc(100%-40px)] max-w-[1000px] mx-auto relative">
            <p className="my-5 text-sm text-white bg-red-400 rounded-lg p-3 lg:hidden">While I believe in a mobile-first world, I also believe that the work I do is best appreciated on a big screen for portfolio purposes, so it may not render perfectly here.</p>
            <h1 className="text-[100px] font-extrabold tracking-tighter text-white mt-[200px] drop-shadow-2xl">Work</h1>
            <p className="mb-[50px] w-full lg:w-1/2 text-[20px] text-white font-extrabold tracking-tighter drop-shadow-xl">I can craft smart, modern, and scalable user interfaces. Specializing in MVPs and smart design consulting, I focus on delivering creative and pixel perfect solutions that work efficiently and look great.</p>
            <ProjectCards layoutClass="z-30 relative"/>
            <div className='footer w-full justify-center flex flex-row my-5 py-5 border-t-[0.5px]'>
              <div className="logo mr-5 mb-5 w-8 h-8 block relative">
                <svg width="40" height="40" viewBox="0 0 46 51" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ fill: badgeColor }}>          
                  <path fillRule="evenodd" clipRule="evenodd" d="M27.3538 1.16659L41.6462 9.41833C44.3403 10.9738 46 13.8484 46 16.9593V33.4628C46 36.5737 44.3403 39.4483 41.6462 41.0038L27.3538 49.2555C24.6597 50.8109 21.3403 50.8109 18.6462 49.2555L4.35379 41.0038C1.65966 39.4483 0 36.5737 0 33.4628V16.9593C0 13.8484 1.65966 10.9738 4.35379 9.41833L18.6462 1.16659C21.3403 -0.388865 24.6597 -0.388865 27.3538 1.16659Z"/>
                </svg>
                <svg width="40" height="40" viewBox="0 0 46 51" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ fill: hashColor }} className="absolute top-0 left-0">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.4591 23.8074L16.1487 19.9517H18.6878L19.3148 16.817H23.484L22.857 19.9517H25.0513L25.6783 16.817H29.8475L29.2205 19.9517H31.791L31.1014 23.8074H28.4995L27.9666 26.566H30.6625L29.9729 30.4217H27.2143L26.6187 33.5564H22.4495L23.0451 30.4217H20.8508L20.2552 33.5564H16.086L16.6816 30.4217H14.3306L15.0202 26.566H17.4339L17.9668 23.8074H15.4591ZM22.136 23.8074L21.6031 26.566H23.7974L24.3303 23.8074H22.136Z"/>
                </svg>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}