import Logo from "../components/logo";
import SwitchBox from "../components/switchbox";
import Footer from "../components/footer";
import Link from "next/link";

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
              <div className='card-image'></div>
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