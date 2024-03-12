import Logo from '../components/logo';
import SwitchBox from '../components/switchbox';
import Footer from '../components/footer';
import Link from 'next/link';

export default function Me() {
  return (
    <div className="content">
      <section className="container">
        <div className="nav">
          <Link href="/me" className='active'>Read about me</Link>  
          <Link href="/case-studies">Case Studies</Link>  
        </div>
        <Logo hasButton='has-button'></Logo>
        <SwitchBox></SwitchBox>
        <h1 className='hero hero-button'>About Me</h1>
        <h2>Introduction</h2>
        <p>Ever since I kicked off my professional journey, I've dived into a whole bunch of cool projects. I'm talking websites, intricate web apps, mobile apps (both the native kind and those optimized for iOS and Android), e-commerce platforms, digital newspapers, even the .nic registry in Argentina, and some wild fingerprint UI projects for Windows. A lot of this stuff is under wraps due to a bunch of NDAs.</p>
        <h2>Work Highlights</h2>
        <h3 className='title'>Devego</h3>
        <small>2007 - 2011</small>
        <p>Co-founded Devego, a bespoke software development company, serving international clients, where working as a Product Designer / Art Director managed diverse projects, significantly enhancing business growth before successfully exiting.</p>
        <h3 className='title'>Hashboxed</h3>
        <small>2011 - Today</small>
        <p>Established Hashboxed, providing UI/UX design and frontend development services to startups globally, where I directed projects across E-commerce, digital newspapers, and unique UI solutions for Windows. CMS's, SPA, Landing Pages, Blogs, Full Fledge websites, you name it we probably did it.</p>
        <h3 className='title'>Ring.com</h3>
        <small>2014 - Today</small>
        <p>In 2014 I joined <Link href="http://ring.com/" target="_blank" rel="noopener">Ring.com</Link> (employee number 10), an IoT company which was acquired by Amazon in 2018. I was hired initially as a UI/UX designer and worked on the first design of the mobile app, first version of the website, creation of a styleguide, internal admin tools and billing/user accounts for 4 years. My role evolved and today I am a Frontend Developer / Design Engineer for all the Ecommerce portion of the site, working alongside the Design Team to help them reach the design interaction they want without forcing or compromising the code by doing crazy stuff to achieve those objectives and focusing on UX and UI improvements.</p>
        <h2>Personal Info</h2>
        <p>I live in Formosa, a small town in the nort of Argentina, father to three incredible kids and the proud owner of Zelda, the grumpiest puppy you'll ever meet, and Whisky, our cat who's convinced she's the real boss of the house.</p>
        <p>About my language, I can speak/write fluent English and Spanish.</p>
      </section>
        <Footer></Footer>
    </div>
  );
}