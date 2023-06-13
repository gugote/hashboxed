import Logo from "../../components/logo";
import SwitchBox from "../../components/switchbox";
import Footer from "../../components/footer";

// IMAGES
import Image from "next/image";
import challenge from "../../public/images/daily-ui-challenge/02-credit-card-checkout.jpg";

export default function DUI01(){
  return(
    <div className='content daily-ui-challenge'>
      <section className='container'>
        <Logo></Logo>
        <SwitchBox></SwitchBox>
        <h1 className='hero'>Daily UI Challenge</h1>
        <h2 className='title'>Prompt #2: Design a credit card checkout form or page. Don`&rsquo`t forget the important elements such as the numbers, dates, security numbers, etc..</h2>
        <h3>Solution: Designed a checkout flow, showing all relevant details for the card, checkout step, billing information and a small summary of the purchase.</h3>
      </section>
      <div className='case-study-display'>
        <Image 
          src={challenge}
          alt="#02 - Credit Card Checkout"
          width={700}
          height={720}
        />
      </div>
      <Footer></Footer>
    </div>
  )
}