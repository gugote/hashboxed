import Logo from "../components/logo";
import SwitchBox from "../components/switchbox";
import Footer from "../components/footer";
import Link from "next/link";

// IMAGES
import Image from "next/image";
import thumb01 from "../public/images/daily-ui-challenge/01-sign-up-thumb.png";

export default function dailyUiChallenge(){
  return (
    <div className='content'>
      <section className='container'>
        <Logo></Logo>
        <SwitchBox></SwitchBox>
        <h1 className='hero'>Hashboxed</h1>
        <h2>Daily UI Challenge</h2>
        <div className='cards-container cf'>
          <Link href="/daily-ui-challenge/01" legacyBehavior>
            <div className='card'>
              <div className='card-image'>
                <Image 
                  src={thumb01},
                  alt="#01 - SIGN UP"
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