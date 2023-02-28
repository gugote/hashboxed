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
        <p>Hashboxed is a small UI/UX company founded in 2008 by me, <Link href="/me">Carlos Bruscoli</Link>, with the main mission of creating Websites, Web apps and Mobile apps, and well.. anything that fits in a screen.</p>
        <p>Hashboxed is based in <Link href="https://www.google.com.ar/maps/place/Formosa,+Formosa+Province/@-26.1721517,-58.2299893,13z/data=!3m1!4b1!4m5!3m4!1s0x945ca5e488cf4f05:0xbcaebe65a1bae72!8m2!3d-26.1857768!4d-58.1755669" target="_blank" rel="noopener">Formosa</Link>, a small but lovely city on the north of Argentina.</p>
        <p>Right now I’m working as a Design Engineer / Frontend Developer @ <Link href="https://ring.com" target="_blank" rel="noopener">Ring</Link> and doing small personal projects.</p>
      </section>
      <Footer className="fixed"></Footer>
    </div>
  );
}
