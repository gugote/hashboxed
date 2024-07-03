import Image from "next/image"
import Hashboxed from "../../public/images/hashboxed-dark.svg"

export default function Alphacast(){
  return(
    <div className="bg-dots-pattern h-svh">
      <div className="container m-0 mx-auto">
        <div className="header">
          <div className="logo">
            <Image 
              src={Hashboxed}
              alt="Hashboxed"
              width={46}
              height={50}
            />
            <div>
              <p>Hashboxed</p>
              <p>Case Study</p>
            </div>
          </div>
          <div className="case-file">
            <p><strong>DATE:</strong> 05/2024 - <strong>CLIENT:</strong> ALPHACAST</p>
          </div>
        </div>
        <h1>How we improved navigation and overall layout for Alphacast</h1>
        <hr />
        <div className="the-challenge">
          <div className="leftCol">
            <h2>The Challenge</h2>
            <p>In this case study, we explore alphacast.io, a rapidly growing startup revolutionizing the way Economic & Financial data is used.</p>
            <p>alphacast.io is a dynamic startup focused on providing ready-to-use Economic & Financial data for integration into models, dashboards, and reports.</p>
            <p>As a rapid growth, very technical, and fast-paced startup, alphacast.io did not have a dedicated design team. The development team started building and piling up features, delivering tools and features but losing design direction.</p>
            <p>After heavy client use, they identified that content creators found it difficult to understand where their projects were saved. Additionally, if a user was part of a team of creators, they had to click four times to reach their team content, making the user experience inefficient and time consuming.</p>
          </div>
          <div className="rightCol">
            <Image 
              src={Alphacast}
              alt="Alphacast.io"
              width={}
              height={}
            />
            <Image 
              src={AlphacastOld}
              alt="Alphacast - Old Site"
              width={}
              height={}
            />
            <div>
              <p>Old Alphacast Site</p>
              <Image 
                src={IconZoom}
                alt="Alphacast - Old Site - View Larger"
                width={}
                height={}
                onClick={}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="the-solution">
          <h2>The Solution</h2>
          <p>After thorough thinking and a couple of calls with the alphacast team to understand how the app works, what the usual behavior of the users is, and how much we can change without involving a huge effort on the tech side, we came up with the following steps to reach a quick solution:</p>
          <div className="huge-screen">
            <Image 
              src={AlphacastNewSite}
              alt="Alphacast.io"
              width={}
              height={}
            />
            <span className="pink-dot"></span>
            <span className="pink-dot"></span>
            <span className="pink-dot"></span>
            <span className="pink-dot"></span>
          </div>
          <div className="solution-cards">
            <div className="card">
              <dl>
                <dt>Rename the section from Home to Dashboard:</dt>
                <dd>Now, users land on a dashboard where they can see all the latest projects they were working on and what has been shared with them. The result is a 'hub' or a 'place' that feels more natural for users to find their active projects.</dd>
              </dl>
            </div>
            <div className="card">
              <dl>
                <dt>Sidebar Improvements:</dt>
                <dd>We tweaked a few details on the sidebar by re-categorizing the sections and simplifying the UX, saving two clicks each time a user wants to access a repository. We reduced the number of repositories shown, since the average user has 2-3 repositories. A new 'view all' link was added, which leads to a list of all repositories the user has access to.</dd>
              </dl>
            </div>
            <div className="card">
              <dl>
                <dt>Context, Content and Title Weight:</dt>
                <dd>Small cosmetic changes were made to differentiate context from content on the sidebar and header, and we improved the title/text weight for better readability. The main content cards were redesigned to ensure uniform size and format, making the content easier to identify and more organized.</dd>
              </dl>
            </div>
            <div className="card">
              <dl>
                <dt>Team Page Access:</dt>
                <dd>The problem of accessing the team page was resolved by combining Team Info and Team Homepage into one single page and placing the links directly on the sidebar. Also each repo now features a full picture of the belonging team and a link to reach the team files.</dd>
              </dl>
            </div>
          </div>
        </div>
        <hr />
        <div className="the-results">
          <h2>The Results</h2>
          <div className="left-col">
            <p>After a month, we identified significant improvements.</p>
            <p>The changes reduced questions about file and project location by 80% and questions about how to reach the team page by 25%.</p>
            <p>As a side effect, the Client Onboarding team reported a smoother and better experience when introducing clients to the app's navigation and functionality.</p>
          </div>
          <div className="right-col">
            <div className="results-card">
              <p>80%</p>
              <p>Reduction on questions about navigation or app use.</p>
            </div>
            <div className="results-card">
              <Image></Image>
              <p>Improved overall user and customer team satisfaction.</p>
            </div>
          </div>
          <div className="testimonials">
            <div className="testimonial-card">
              <Image></Image>
              <p>Miguel Angel Saez</p>
              <p>Co-Founder / CTO</p>
              <blockquote>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quas doloremque nam necessitatibus neque quo optio numquam, maxime nulla blanditiis harum voluptatum! Voluptatibus perspiciatis, itaque voluptatem ut delectus corrupti nisi!</blockquote>
            </div>
            <div className="testimonial-card">
              <Image></Image>
              <p>Luciano Cohan</p>
              <p>Co-Founder / CEO</p>
              <blockquote>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quas doloremque nam necessitatibus neque quo optio numquam, maxime nulla blanditiis harum voluptatum! Voluptatibus perspiciatis, itaque voluptatem ut delectus corrupti nisi!</blockquote>
            </div>
          </div>
        </div>
        <hr />
        <div className="hashboxed">
          <h2>Ready to get Hashboxed? Get in touch.</h2>
          <p>We're pumped to help you take your project to the next level. Get in touch with us, and let's make something awesome together!</p>
          <div className="contact-card">
            <Image></Image>
            <p>Carlos Bruscoli</p>
            <p>cb@hashboxed.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}