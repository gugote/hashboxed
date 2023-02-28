import Logo from '../components/logo';
import SwitchBox from '../components/switchbox';
import Footer from '../components/footer';
import Link from 'next/link';

export default function Me() {
  return (
    <div className="content">
      <section className="container">
        <Logo></Logo>
        <SwitchBox></SwitchBox>
        <h1 className='hero'>About Me</h1>
        <h2>TL;DR: I&apos;m a designer focusing mostly on UI/UX, paying a lot of attention to usability and accessibility that loves working on startups and startup culture. I also have a ton (really) of experience coding on frontend.</h2>
        <h3 className="title">Introduction</h3>
        <p>Since I started my professional career I have worded on Websites, Complex Web Apps, Mobile Apps (native stuff and web optimized for iOS and Android), Ecommerce, Newspapers, the .nic register in argentina and some crazy fingerprint UI for windows most of which is living behind a several amount of NDAs.</p>
        <h3 className="title">Work Highlights</h3>
        <p>During a 4 year period (2007/2011), I was the Founder/CTO/ArtDirector of Devego a small software factory based in Buenos Aires where we worked with clients in the UK and the US. In 2011 I sold my share of the company to my other partners.</p>
        <p>In 2014 I joined <Link href="http://ring.com/" target="_blank" rel="noopener">Ring.com</Link> (employee number 10), an IoT company which was acquired by Amazon in 2018. I was hired initially as a UI/UX designer and worked on the first design of the mobile app, first version of the website, creation of a styleguide, internal admin tools and billing/user accounts for 4 years. My role evolved and today I am a Frontend Developer / Design Engineer for all the Ecommerce portion of the site, working alongside the Design Team to help them reach the design interaction they want without forcing or compromising the code by doing crazy stuff to achieve those objectives and focusing on UX and UI improvements.</p>
        <p>Also during all these years I&apos;ve been working at my own small agency <strong>Hashboxed</strong> working with a TON of startups (from everywhere) along the way.</p>
        <h3 className="title">Personal Info</h3>
        <p>I live in Formosa, a small town in the nort of Argentina, father of 3 awesome kids and best friend of the most grumpy puppie I know (Zelda)</p>
        <p>About my language, I can speak/write fluent English and Spanish.</p>
        <p>All the usual geek stuff is involved: Comics, Movies and Series, Videogames, Music</p>

      </section>
        <Footer></Footer>
    </div>
  );
}