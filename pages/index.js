import Logo from '../components/logo';
import SwitchBox from '../components/switchbox';
import Footer from '../components/footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='content'>
      <section className='container'>
        <Logo></Logo>
        <SwitchBox></SwitchBox>
        <h1 className='hero'>Hashboxed</h1>
        <p>Hashboxed is a small UI/UX shop founded in 2008 by me, <Link href="/me">Carlos Bruscoli</Link>, where we love to build all sorts of things: websites, web apps, mobile apps, you name it. If it shows up on a screen, we’re on it.</p>
        <p>We are based in <Link href="https://www.google.com.ar/maps/place/Formosa,+Formosa+Province/@-26.1721517,-58.2299893,13z/data=!3m1!4b1!4m5!3m4!1s0x945ca5e488cf4f05:0xbcaebe65a1bae72!8m2!3d-26.1857768!4d-58.1755669" target="_blank" rel="noopener">Formosa</Link>, a small but lovely city on the north of Argentina.</p>
        <p>Right now I’m working as a Design / Frontend Developer @ <Link href="https://ring.com" target="_blank" rel="noopener">Ring</Link> while also getting my hands dirty with some personal projects on the side.</p>
      </section>
      <Footer className="fixed"></Footer>
    </div>
  );
}
