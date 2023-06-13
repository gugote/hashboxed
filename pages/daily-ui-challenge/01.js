import Logo from "../../components/logo";
import SwitchBox from "../../components/switchbox";
import Footer from "../../components/footer";

// IMAGES
import Image from "next/image";
import challenge01 from "../../public/images/daily-ui-challenge/01-sign-up.jpg";

export default function DUI01(){
  return(
    <div className='content daily-ui-challenge'>
      <section className='container'>
        <Logo></Logo>
        <SwitchBox></SwitchBox>
        <h1 className='hero'>Daily UI Challenge</h1>
        <h2 className='title'>Prompt #1: Create a sign up page, modal, form, or app screen related to signing up for something. It could be for a volunteer event, contest registration, a giveaway, or anything you can image.</h2>
        <h3>Solution: Designed a waiting list sign-up form for an Atari console.</h3>
        <div className='case-study-display'>
          <Image 
            src={challenge01}
            alt="#01 - SIGN UP"
            width={700}
            height={800}
          />
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}