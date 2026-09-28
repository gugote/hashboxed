import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f3ee] text-[#252525]">
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1180px]">
        <Header layoutClass="pt-8" />
        <section className="flex min-h-[620px] flex-col justify-center py-20 lg:py-28">
          <div className="hero-title-wrap relative w-full">
            <span className="hero-selection" aria-hidden="true" />
            <h1 className="hero-title relative z-[1] w-full text-[clamp(3.4rem,9vw,8.5rem)] font-black leading-[0.88]">I make complex products feel clear.</h1>
            <svg className="hero-cursor" aria-hidden="true" viewBox="0 0 28 32" fill="none">
              <path d="M2 1.5 25 18l-10.4 1.3L9.5 30 2 1.5Z" fill="white" stroke="#111" strokeWidth="2.5" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="mt-10 w-full md:w-3/5">
            <p className="w-full text-xl font-medium leading-relaxed tracking-tight text-zinc-700">I’m Carlos Bruscoli, an independent product designer and frontend developer.<br />I help startups turn complicated workflows into useful, scalable interfaces.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="inline-flex items-center gap-2 rounded-full bg-[#252525] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-600" href="/work">Explore the work <ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-[#252525] py-24 text-white">
        <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1180px] gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div className="flex flex-col justify-between">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-violet-400">Featured case study</p>
              <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.055em] md:text-7xl">Less confusion. Fewer questions.</h2>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-zinc-300">A focused redesign of Alphacast’s navigation and dashboard helped users find their work faster and cut customer questions by more than 80%.</p>
            </div>
            <Link href="/work/alphacast" className="mt-10 inline-flex w-fit items-center gap-2 border-b border-violet-400 pb-1 font-bold text-violet-300 transition hover:text-white">Read the Alphacast case study <ArrowRight size={17} /></Link>
          </div>
          <Link href="/work/alphacast" className="group relative overflow-hidden rounded-[2rem] bg-[#513edf] p-3 shadow-2xl shadow-black/25">
            <Image src="/projects/alphacast/02b.jpg" alt="Redesigned Alphacast dashboard" width={1462} height={802} className="h-full min-h-[360px] w-full rounded-[1.35rem] object-cover object-left-top transition duration-700 group-hover:scale-[1.015]" priority />
            <span className="absolute bottom-7 right-7 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-wider text-[#252525]">UX redesign</span>
          </Link>
        </div>
      </section>

      <section className="border-y border-black/10 bg-orange-600 py-20 text-white">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1180px]">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-orange-100">Selected projects are just the start</p>
          <h2 className="w-full text-[clamp(3rem,6vw,5rem)] font-black leading-none tracking-[-0.055em] lg:whitespace-nowrap">Explore more of my work.</h2>
          <Link href="/work" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-orange-700 transition-[transform,background-color] duration-150 hover:-translate-y-0.5 hover:bg-orange-50 active:scale-[0.97]">
            See all work <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1180px]"><Footer /></div>
    </main>
  );
}
