import Image from "next/image";
import Header from "../components/Header";
import LatestUpdate from "../components/LatestUpdate";
import Footer from "../components/Footer";
import Gugo from "../../../public/gugo-2026.png";

export default function About() {
  return (
    <main className="min-h-screen bg-[#f5f3ee]">
      <div className="mx-auto w-[calc(100%-40px)] max-w-[900px]">
        <Header layoutClass="pt-8" />
        <section className="py-20 md:py-28">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-orange-600">About</p>
          <h1 className="mb-10 text-6xl font-black leading-[0.95] tracking-[-0.06em] md:text-8xl">Designing the useful parts of the internet since 2008.</h1>
          <div className="grid items-start gap-10 md:grid-cols-[1.1fr_.9fr] md:gap-14">
            <div>
              <div className="space-y-6 text-lg leading-relaxed text-zinc-700">
                <p><strong className="text-zinc-950">Hashboxed</strong> is the independent practice of Carlos Bruscoli, a product designer and frontend developer based in Formosa, Argentina.</p>
                <p>I work where product thinking, interface design, and code meet—helping teams simplify complex workflows and ship thoughtful experiences without losing momentum.</p>
              </div>
              <div className="mt-16"><LatestUpdate /></div>
            </div>
            <figure className="h-[240px] w-full max-w-[240px] justify-self-end overflow-hidden rounded-[1.5rem] bg-[#fafafa]">
              <Image
                src={Gugo}
                alt="Credits to Ale Vizio prompting skills"
                priority
                className="h-full w-full object-cover object-top"
              />
            </figure>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
