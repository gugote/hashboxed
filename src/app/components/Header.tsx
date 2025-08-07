"use client"
import { motion } from "motion/react";
import { useTheme } from "./ThemeProvider";
import Navigation from "./Navigation";
import ToggleTheme from "./ToggleTheme";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
interface HeaderProps {
  layoutClass?: string;
  isWorks?: boolean;
}

export default function Header({ layoutClass }: HeaderProps){
  const [isHovered, setIsHovered] = useState(false);

  useEffect(()=>{
    setIsHovered(true);
    const timer = setTimeout(()=>{
      setIsHovered(false);
    }, 1000);
    return() => {
      clearTimeout(timer);
    };
  }, []);

  const spinTransition = {
    loop: Infinity,
    ease: "linear" as const,
    duration: 0.5,
  }

  const { theme } = useTheme();
  const badgeColor = theme === 'light' ? '#000000' : '#ffffff';
  const hashColor = theme === 'light' ? '#ffffff' : '#000000';

  const isWorks = usePathname().includes('work');

  console.log('header' + isWorks);

  const router = useRouter();
  const goHome = () => {
    router.push('/')
  }

  return (
    <header className={`${layoutClass} relative flex flex-row align-middle justify-between`}>
      <div onClick={goHome} className="flex flex-row cursor-pointer w-4/5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="logo mr-5 w-8 h-8 block relative">
          <motion.div
            className="boxed w-[40px]"
            animate = {(isHovered) ? { rotate: [0, 10, 20, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 340, 350, 360] } : { rotate: 0 }}
            transition={(isHovered) ? spinTransition : { duration: 0 }}
          >
            <svg width="40" height="40" viewBox="0 0 46 51" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ fill: badgeColor }}>          
              <path fillRule="evenodd" clipRule="evenodd" d="M27.3538 1.16659L41.6462 9.41833C44.3403 10.9738 46 13.8484 46 16.9593V33.4628C46 36.5737 44.3403 39.4483 41.6462 41.0038L27.3538 49.2555C24.6597 50.8109 21.3403 50.8109 18.6462 49.2555L4.35379 41.0038C1.65966 39.4483 0 36.5737 0 33.4628V16.9593C0 13.8484 1.65966 10.9738 4.35379 9.41833L18.6462 1.16659C21.3403 -0.388865 24.6597 -0.388865 27.3538 1.16659Z"/>
            </svg>
          </motion.div>
          <svg width="40" height="40" viewBox="0 0 46 51" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ fill: hashColor }} className="absolute top-0 left-0">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.4591 23.8074L16.1487 19.9517H18.6878L19.3148 16.817H23.484L22.857 19.9517H25.0513L25.6783 16.817H29.8475L29.2205 19.9517H31.791L31.1014 23.8074H28.4995L27.9666 26.566H30.6625L29.9729 30.4217H27.2143L26.6187 33.5564H22.4495L23.0451 30.4217H20.8508L20.2552 33.5564H16.086L16.6816 30.4217H14.3306L15.0202 26.566H17.4339L17.9668 23.8074H15.4591ZM22.136 23.8074L21.6031 26.566H23.7974L24.3303 23.8074H22.136Z"/>
          </svg>
        </div>
        <h1 className="tracking-tighter font-extrabold text-3xl mt-[3px] dark:text-white">Hashboxed</h1>
      </div>
      <div className="w-1/5 flex flex-row items-end justify-end">
        {!isWorks &&(
          <ToggleTheme />
        )}
        <Navigation isWorks={isWorks} />
      </div>
    </header>
  )
}