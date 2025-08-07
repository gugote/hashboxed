"use client";
// React / Frameworks
import Link from "next/link";
// Components
import LatestUpdate from "./components/LatestUpdate";
import ContentsIndex from "./components/ContentsIndex";
import Footer from "./components/Footer";
import Header from "./components/Header";
// Assets

export default function Home() {
  return (
    <div className="home max-w-[720px] mx-auto">
      <Header layoutClass="pt-10 w-[calc(100%-40px)] max-w-[1000px] mx-auto"/>
      <div className="pt-20 w-[calc(100%-40px)] max-w-[720px] mx-auto">
        <div className="content max-w-[700px] mx-auto relative">
          <p className="mb-5"><strong className="dark:text-white">Hashboxed</strong> is a small UI/UX shop founded in 2008 by me, <span className="text-red-600 font-bold">Carlos Bruscoli</span>. At <strong className="dark:text-white">Hashboxed</strong> I love to build all sorts of things: websites, web apps, mobile apps—you name it. If it shows up on a screen, I&apos;m on it.</p>
          <p className="mb-5">Right now, I&apos;m working as a Designer/Frontend Developer at <Link href="https://www.ring.com/" target="_blank" rel="noopener" className="text-sky-500 font-bold">Ring</Link> while also getting my hands dirty with some personal projects on the side.</p>
          <LatestUpdate />
          <ContentsIndex />        
          <Footer />        
        </div>
      </div>
    </div>
  );
}
