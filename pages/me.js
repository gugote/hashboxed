import Logo from '../components/logo';
import Footer from '../components/footer';
import Link from 'next/link';

export default function Me() {
  return (
    <div className="content">
      <section className="container">
        <Logo></Logo>
        <div className="nav">
          <Link href="/me" className='active'>Read about me</Link>  
          <Link href="/case-studies">Case Studies</Link>  
        </div>
        <h1 className='hero hero-button'>About Me</h1>
        <h2>Introduction</h2>
        <p>Ever since I kicked off my professional journey, I&apos;ve dived into a whole bunch of cool projects. I&apos;m talking websites, intricate web apps, mobile apps (both the native kind and those optimized for iOS and Android), e-commerce platforms, digital newspapers, even the .nic registry in Argentina, and some wild fingerprint UI projects for Windows. A lot of this stuff is under wraps due to a bunch of NDAs.</p>
        <h2>Work Highlights</h2>
        <h3 className='title'>Devego</h3>
        <small>2007 - 2011</small>
        <p>Co-founded Devego, a bespoke software development company, serving international clients, where working as a Product Designer / Art Director managed diverse projects, significantly enhancing business growth before successfully exiting.</p>
        <h3 className='title'>Hashboxed</h3>
        <small>2011 - Today</small>
        <p>Established Hashboxed, providing UI/UX design and frontend development services to startups globally, where I directed projects across E-commerce, digital newspapers, and unique UI solutions for Windows. CMS&apos;s, SPA, Landing Pages, Blogs, Full Fledge websites, you name it we probably did it.</p>
        <h3 className='title'>Ring.com</h3>
        <small>2014 - Today</small>
        <p>In 2014, I became the tenth employee at <Link href="http://ring.com/" target="_blank" rel="noopener">Ring.com</Link>, an IoT company later acquired by Amazon in 2018. Initially brought on board as a UI/UX designer, my responsibilities included designing of new features on the mobile app, developing the website&apos;s first iteration, establishing a comprehensive style guide, and enhancing e-commerce and billing/user accounts for over six years. My role has since evolved; I now serve as a Frontend Developer / Design Engineer for the Internal Admin section of the site. In collaboration with the Design Team, I am committed to achieving optimal design interaction without compromising the integrity of the code, all while concentrating on UX and UI enhancements. Notably, my most recent project contributed to over $4 million in savings for the company, underscoring the impactful and strategic nature of my work.</p>
        <h2>Personal Info</h2>
        <p>I live in Formosa, a small town in the nort of Argentina, father to three incredible kids and the proud owner of Zelda, the grumpiest puppy you&apos;ll ever meet, and Whisky, our cat who&apos;s convinced she&apos;s the real boss of the house.</p>
        <p>About my language, I can speak/write fluent English and Spanish.</p>
      </section>
        <Footer></Footer>
    </div>
  );
}