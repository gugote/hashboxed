import Logo from "../components/logo";
import SwitchBox from "../components/switchbox";
import Footer from "../components/footer";
import Link from "next/link";

// IMAGES
import Image from "next/image";
import thumb01 from "../public/images/daily-ui-challenge/01-sign-up-thumb.jpg";
import thumb02 from "../public/images/daily-ui-challenge/02-credit-card-checkout-thumb.jpg";
import thumb03 from "../public/images/daily-ui-challenge/03-landing-page-thumb.jpg";
import thumb04 from "../public/images/daily-ui-challenge/04-calculator-app-thumb.jpg";

export default function dailyUiChallenge(){
  return (
    <div className='content daily-ui-challenge'>
      <section className='container'>
        <Logo></Logo>
        <SwitchBox></SwitchBox>
        <h1 className='hero'>Daily UI Challenge</h1>
        <h2 className='title'>Daily UI Challenge is a design challenge to inspire and challenge designers around the world.</h2>
        <h3>The challenge consist on getting a design prompt with an open theme and you should create something daily. I did it because it was fun to quickly put together some concepts and try new techniques on design.</h3>
        <h4>
          <a href="https://www.dailyui.co/" rel="noopener noreferrer" target='_blank'>https://www.dailyui.co/</a>
        </h4>
        <div className='cards-container cf'>
          <Link href="/daily-ui-challenge/01" legacyBehavior>
            <div className='card'>
              <div className='card-image'>
                <Image 
                  src={thumb01}
                  alt="#01 - SIGN UP"
                  width={200}
                  height={200}
                />
              </div>
              <div className="card-copy">
                <span>#01</span>
                <h3>Sign Up</h3>
              </div>
            </div>
          </Link>
          <Link href="/daily-ui-challenge/02" legacyBehavior>
            <div className='card'>
              <div className='card-image'>
                <Image 
                  src={thumb02}
                  alt="#02 - CREDIT CARD CHECKOUT"
                  width={200}
                  height={200}
                />
              </div>
              <div className="card-copy">
                <span>#02</span>
                <h3>Credit Card Checkout</h3>
              </div>
            </div>
          </Link>
          <Link href="/daily-ui-challenge/03" legacyBehavior>
            <div className='card'>
              <div className='card-image'>
                <Image 
                  src={thumb03}
                  alt="#03 - Landing Page"
                  width={200}
                  height={200}
                />
              </div>
              <div className="card-copy">
                <span>#03</span>
                <h3>Landing Page</h3>
              </div>
            </div>
          </Link>
          <Link href="/daily-ui-challenge/04" legacyBehavior>
            <div className='card'>
              <div className='card-image'>
                <Image 
                  src={thumb04}
                  alt="#04 - Calculator App"
                  width={200}
                  height={200}
                />
              </div>
              <div className="card-copy">
                <span>#04</span>
                <h3>Calculator App</h3>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}