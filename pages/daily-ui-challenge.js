import Logo from "../components/logo";
import SwitchBox from "../components/switchbox";
import Footer from "../components/footer";
import Link from "next/link";

// IMAGES
import Image from "next/image";
import thumb01 from "../public/images/daily-ui-challenge/01-sign-up-thumb.jpg";

export default function dailyUiChallenge(){
  return (
    <div className='content daily-ui-challenge'>
      <section className='container'>
        <Logo></Logo>
        <SwitchBox></SwitchBox>
        <h1 className='hero'>Daily UI Challenge</h1>
        <h2 className='title'>Daily UI Challenge is a design challenge to inspire and challenge designers around the world.</h2>
        <h3>The challenge consist on getting a design prompt with an open theme and you should create something daily.</h3>
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
        </div>
      </section>
      <Footer className="fixed"></Footer>
    </div>
  );
}