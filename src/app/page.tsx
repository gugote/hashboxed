"use client";
// React / Frameworks
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"
// Components
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import LatestUpdate from "./components/LatestUpdate";
import ContentsIndex from "./components/ContentsIndex";
import Footer from "./components/Footer";
import ToggleTheme from "./components/ToggleTheme";
// Assets
import FormosaIcon from "../../public/formosa.svg"
import Argentina from "../../public/argentina.gif"

export default function Home() {
  const [argentina, setArgentina] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  
  const handleSpin = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 2000);
  }

  return (
    <div className="app-container pt-5">
      <Header isSpinning={isSpinning}/>
      <Navigation className={'absolute top-7 right-7 w-6 h-6'} />
      <ToggleTheme className={'absolute top-[22px] right-14'}/>
      <div className="content mx-5">
        <p className="mb-5"><strong onClick={handleSpin} className="cursor-pointer dark:text-white">Hashboxed</strong> is a small UI/UX shop founded in 2008 by me, <span className="text-red-600 font-bold">Carlos Bruscoli</span>. At <strong onClick={handleSpin} className="cursor-pointer dark:text-white">Hashboxed</strong> we love to build all sorts of things: websites, web apps, mobile apps—you name it. If it shows up on a screen, we’re on it.</p>
        <p className="mb-5 flex flex-row items-center">
          <span className="w-16 mr-3">
            <Link 
              href="https://www.google.com.ar/maps/place/Formosa,+Formosa+Province/@-26.1721517,-58.2299893,13z/data=!3m1!4b1!4m5!3m4!1s0x945ca5e488cf4f05:0xbcaebe65a1bae72!8m2!3d-26.1857768!4d-58.1755669"
              target="_blank"
              rel="noopener">
              <Image
                alt="Formosa - Argentina"
                src={FormosaIcon}
                height={0}
                width={0}
                className="w-full shadow-sm"
              />
            </Link>
          </span>
          <span>We are based in <Link 
              href="https://www.google.com.ar/maps/place/Formosa,+Formosa+Province/@-26.1721517,-58.2299893,13z/data=!3m1!4b1!4m5!3m4!1s0x945ca5e488cf4f05:0xbcaebe65a1bae72!8m2!3d-26.1857768!4d-58.1755669"
              target="_blank"
              rel="noopener"
              className="font-bold text-orange-500">Formosa</Link>, a small but lovely city in the north of <strong onClick={() => setArgentina(!argentina)}>Argentina</strong>.</span>
        </p>
        <p className="mb-5">Right now, I’m working as a Designer/Frontend Developer at <Link href="https://www.ring.com/" target="_blank" rel="noopener" className="text-sky-500 font-bold">Ring</Link> while also getting my hands dirty with some personal projects on the side.</p>
        <LatestUpdate />
        <ContentsIndex />        
        <Footer />        
      </div>
      {argentina && (
        <motion.div
          animate={{ translateY: [100, 50, 0, 20]}}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <Image
            src={Argentina}
            alt="Campeones del Mundo!"
            height={100}
            width={100}
            className="absolute -bottom-20 right-5 drop-shadow-sm rounded-md border"
          />
        </motion.div>
        ) 
      }
    </div>
  );
}
