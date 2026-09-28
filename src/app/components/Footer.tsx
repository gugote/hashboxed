import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const mapUrl = "https://www.google.com.ar/maps/place/Formosa,+Formosa+Province/@-26.1721517,-58.2299893,13z/data=!3m1!4b1!4m5!3m4!1s0x945ca5e488cf4f05:0xbcaebe65a1bae72!8m2!3d-26.1857768!4d-58.1755669";

export default function Footer() {
  return (
    <footer className="mb-8 mt-16 pt-8 text-[#252525] md:mb-10 md:mt-24">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <p className="text-lg font-bold tracking-tight">
          Have a project in mind? <span className="text-zinc-500">cb@hashboxed.com</span>
        </p>
        <Link
          href="https://www.linkedin.com/in/cbruscoli/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-1.5 text-sm font-bold transition-colors hover:text-orange-600 active:scale-[0.97]"
        >
          LinkedIn <ArrowUpRight size={14} />
        </Link>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-5 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <nav aria-label="Footer navigation" className="flex items-center gap-5">
          <Link href="/" className="transition-colors hover:text-zinc-950">Home</Link>
          <Link href="/work" className="transition-colors hover:text-zinc-950">Work</Link>
          <Link href="/about" className="transition-colors hover:text-zinc-950">About</Link>
        </nav>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link href={mapUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-zinc-950">Formosa, Argentina</Link>
          <span>© {new Date().getFullYear()} Hashboxed</span>
        </div>
      </div>
    </footer>
  );
}
