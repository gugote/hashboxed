import Image from "next/image"
import Gugo from "../../../public/gugo.png"

export default function Footer(){
  return(
    <footer className="flex flex-col mt-16 mb-16">
      <p className="bg-zinc-200 dark:bg-white rounded-xl px-5 py-5 relative">
        <small className="block uppercase text-xs tracking-tighter font-medium">Get in touch</small>
        <strong className="block font-bold tracking-tighter mb-2">cb@hashboxed.com</strong>
        <span className="text-sm block w-2/3">We will be happy to help you out with your projects.</span>
        <Image
          alt="Gugo"
          src={Gugo}
          height={0}
          width={0}
          className="w-1/3 max-w-[110px] absolute -top-10 right-3"
        />
      </p>
    </footer>
  )
}