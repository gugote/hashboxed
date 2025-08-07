// React / Frameworks
import Image from "next/image"
import Link from "next/link"
// Assets
import Gugo from "../../../public/gugo.png"
import FormosaIcon from "../../../public/formosa.svg"

export default function Footer(){
  return(
    <footer className="flex flex-col md:flex-row justify-between mt-16 mb-16">
      <div className="w-full md:w-[49%] flex flex-row align-middle items-center px-5 py-5 border rounded-xl my-5 md:my-0">
        <div className="w-[25%] mr-[5%]">
          <Link 
            href="https://www.google.com.ar/maps/place/Formosa,+Formosa+Province/@-26.1721517,-58.2299893,13z/data=!3m1!4b1!4m5!3m4!1s0x945ca5e488cf4f05:0xbcaebe65a1bae72!8m2!3d-26.1857768!4d-58.1755669"
            target="_blank"
            rel="noopener">
            <Image
              alt="Formosa - Argentina"
              src={FormosaIcon}
              height={0}
              width={0}
              priority
              className="w-full shadow-sm"
            />
          </Link>
        </div>
        <div className="w-[70%]">I&apos;m based in <Link 
            href="https://www.google.com.ar/maps/place/Formosa,+Formosa+Province/@-26.1721517,-58.2299893,13z/data=!3m1!4b1!4m5!3m4!1s0x945ca5e488cf4f05:0xbcaebe65a1bae72!8m2!3d-26.1857768!4d-58.1755669"
            target="_blank"
            rel="noopener"
            className="font-bold text-orange-500">Formosa</Link>, a small but lovely city in the north of <strong>Argentina</strong>.
        </div>
      </div>
      <div className="w-full md:w-[49%] border dark:bg-dark-cards dark:border dark:border-dark-cards-border rounded-xl px-5 py-5 relative">
        <small className="block uppercase text-xs tracking-tighter font-medium">Get in touch</small>
        <strong className="block font-bold tracking-tighter mb-2">cb@hashboxed.com</strong>
        <span className="text-sm block w-2/3">We will be happy to help you out with your projects.</span>
        <Image
          alt="Gugo"
          src={Gugo}
          height={0}
          width={0}
          priority
          className="w-1/3 max-w-[110px] absolute -top-10 right-3"
        />
      </div>
    </footer>
  )
}