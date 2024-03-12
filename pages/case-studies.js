import Logo from '../components/logo';
import Link from 'next/link';

// IMAGES
import Image from "next/image";
import plc01 from "../public/images/case-studies/ring/plc-app-01.png";
import plc02 from "../public/images/case-studies/ring/plc-app-02.png";
import plc03 from "../public/images/case-studies/ring/plc-app-03.png";
import sessions from "../public/images/case-studies/sessions/sessions.png";

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
          <p><strong>Key Aspects of the Project:</strong> This application empowers Ring customer support agents to deliver enhanced support to users via a user-friendly dashboard. The core objective of the project was to minimize the duration of each customer call. To achieve this, the design focuses on creating easily navigable screens and providing swift access to various sections, contrasting with the previous app's approach of consolidating all information into a single, extensive scrollable screen.</p>
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
          <small>* Can't show detailed samples since it's an internal tool protected by NDA but happy to discuss technical details and other projects @ Ring over a call.</small>
        </div>
        <div className="case-study no-link">
          <h2>Hashboxed</h2>
          <h3 className="title">SESSIONS APP</h3>
          <h4>Designed specifically for professionals who manage their work through sessions and appointments. This app empowers the doctor to effortlessly monitor each patient's progress and the number of sessions remaining.</h4> 
          <p>Featuring a fully customizable calendar tailored to their unique schedule, it also provides a daily digest for an efficient overview of their day. Additionally, it offers instant access to patient data at a glance, ensuring the professional have all the information when they need it. This tool is the ultimate companion for maintaining control and enhancing the management of patient sessions and appointments.</p>
          <ul className="skills-used">
            <li>Product Design</li>
            <li>Product Management</li>
            <li>UX/UI Design of the dashboard</li>
            <li>Frontend Code - Next.js instance tied to a tailored backed</li>
          </ul>
          <div className="case-box-big-with-link">
            <Link href="https://www.figma.com/file/w2OAS1XUJGLovDEk3I1Xrb/Kinesio-App?type=design&node-id=109%3A58&mode=design&t=eVXPHt1P2DzPrvjI-1" target='_blank'>
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
      </section>
    </div>
  )
}