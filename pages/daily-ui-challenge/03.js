import Logo from "../../components/logo";
import SwitchBox from "../../components/switchbox";
import Footer from "../../components/footer";

// IMAGES
import Image from "next/image";
import challenge from "../../public/images/daily-ui-challenge/03-landing-page.jpg";

export default function DUI01(){
  return(
    <div className='content daily-ui-challenge'>
      <section className='container'>
        <Logo></Logo>
        <SwitchBox></SwitchBox>
        <h1 className='hero'>Daily UI Challenge</h1>
        <h2 className='title'>Prompt #3: Design a Landing Page - What`&rsquo`s the main focus? Is it for a book, an album, a mobile app, a product? Consider important landing page elements as call-to-actions, clarity, etc.</h2>
        <h3>Solution: Used the design for a donation/NGO landing page im building right now</h3>
      </section>
      <div className='case-study-display'>
        <Image 
          src={challenge}
          alt="#03 - Landing Page"
          width={904}
          height={588}
        />
      </div>
      <Footer></Footer>
    </div>
  )
}