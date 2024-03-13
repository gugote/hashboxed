import Logo from '../components/logo';
import Link from 'next/link';

// IMAGES
import Image from "next/image";
import plc01 from "../public/images/case-studies/ring/plc-app-01.png";
import plc02 from "../public/images/case-studies/ring/plc-app-02.png";
import plc03 from "../public/images/case-studies/ring/plc-app-03.png";
import sessions from "../public/images/case-studies/sessions/sessions.png";
import arcosule from "../public/images/case-studies/arcosule/arcosule.png";

export default function CaseStudies() {
  return (
    <div className="content">
      <section className="container">
        <div className="nav">
          <Link href="/me">Read about me</Link>  
          <Link href="/case-studies" className='active'>Case Studies</Link>  
        </div>
        <Logo hasButton='has-button'></Logo>
        <h1 className='hero hero-button'>Case Studies</h1>
        <div className="case-study no-link">
          <h2>Ring.com</h2>
          <h3 className="title">INTERNAL DASHBOARD</h3>
          <h4>Internal dashboard for devices administration</h4>
          <p>This application empowers Ring customer support agents to deliver enhanced support to users via a user-friendly dashboard. The core objective of the project was to minimize the duration of each customer call. To achieve this, the design focuses on creating easily navigable screens and providing swift access to various sections, contrasting with the previous app&apos;s approach of consolidating all information into a single, extensive scrollable screen.</p>
          <ul className="skills-used">
            <li>UX/UI Design of the dashboard</li>
            <li>Frontend Code: Vue.js with Element+ for styling base of some components like forms</li>
          </ul>
          <div className="case-box">
            <Image 
              src={plc01}
              alt="Internal Dashboard"
              width={220}
              height={145}
            />
          </div>
          <div className="case-box">
            <Image 
              src={plc02}
              alt="Internal Dashboard"
              width={220}
              height={145}
            />
          </div>
          <div className="case-box">
            <Image 
              src={plc03}
              alt="Internal Dashboard"
              width={220}
              height={145}
            />
          </div>
          <small>* Can&apos;t show detailed samples since it&apos;s an internal tool protected by NDA but happy to discuss technical details and other projects @ Ring over a call.</small>
        </div>
        <div className="case-study no-link">
          <h2>Hashboxed</h2>
          <h3 className="title">SESSIONS APP</h3>
          <h4>Designed specifically for professionals who manage their work through sessions and appointments. This app empowers the doctor to effortlessly monitor each patient&apos;s progress and the number of sessions remaining.</h4> 
          <p>Featuring a fully customizable calendar tailored to their unique schedule, it also provides a daily digest for an efficient overview of their day. Additionally, it offers instant access to patient data at a glance, ensuring the professional have all the information when they need it. This tool is the ultimate companion for maintaining control and enhancing the management of patient sessions and appointments.</p>
          <ul className="skills-used">
            <li>Product Design</li>
            <li>Product Management</li>
            <li>UX/UI Design of the dashboard</li>
            <li>Frontend Code - Next.js instance tied to a tailored backend in node.js</li>
          </ul>
          <div className="case-box-big-with-link">
            <Link href="https://www.figma.com/file/w2OAS1XUJGLovDEk3I1Xrb/Kinesio-App?type=design&node-id=109%3A58&mode=design&t=eVXPHt1P2DzPrvjI-1" target="_blank" rel="noopener">
              <Image 
                src={sessions}
                alt="Sessions App"
                width={660}
                height={300}
              />
              <span></span>
              <small>View Full Figma Project</small>
            </Link>
          </div>
        </div>
        <div className="case-study no-link">
          <h2>Hashboxed</h2>
          <h3 className="title">ARCOSULE</h3>
          <h4>In designing the landing page for the Arcosule, my focus was on encapsulating the essence of their cutting-edge technology and expertise within a visually appealing digital storefront.</h4> 
          <p>Adopting a modern and clear design direction, the landing page aimed to reflect the innovative spirit of the company while prioritizing an intuitive user experience. Emphasizing readability and seamless navigation through a minimalist aesthetic, the design ensured the company&apos;s solutions and services were the focal point. Crucially, support for responsive design was introduced organically into the project, guaranteeing that the user experience remained consistent and engaging across all devices, an essential consideration for the tech-savvy audience targeted by the company.</p>
          <ul className="skills-used">
            <li>Project Management</li>
            <li>UX/UI Design of the dashboard</li>
            <li>Frontend Code - Static Vanilla HTML</li>
          </ul>
          <div className="case-box-big-with-link">
            <Link href="https://www.figma.com/file/Rcnz6XpDXG0GJiCm9lCXfr/Arcosule?type=design&node-id=0%3A1&mode=design&t=KwbnlRpQYlfGg7EP-1" target="_blank" rel="noopener">
              <Image 
                src={arcosule}
                alt="Arcosule"
                width={660}
                height={300}
              />
              <span></span>
              <small>View Full Figma Project</small>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}