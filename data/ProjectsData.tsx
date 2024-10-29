export interface ProjectsDataTypes {
  title: string;
  href?: string;
  task: string;
  description: string;
  tech?: string[];
  images?: {url: string, bigUrl: string, description?: string}[];
  hasCS?: boolean;
  CSLink?: string;
  hasNDA?: boolean;
  active: boolean;
}

export const ProjectsData: ProjectsDataTypes[] = [
  {
    active: true,
    title: "Alphacast",
    href: "https://www.alphacast.io",
    task: "User Navigation - UX Redesign",
    description: "We focused on improving user navigation within the app, making it easier for users to locate their repositories and clearly understand their current position and objectives.<br><br> We made design adjustments to the UI, using the same elements but adjusting spacing and title weights to enhance readability, along with minor visual refinements.",
    tech: [
      'Figma', 
      'Pen and Paper',
      'User Interviews',
      'User Experience',
      'Smart Design Service'
    ],
    hasCS: false,
    CSLink: 'alphacast',
    hasNDA: false,
    images: [
      {
        url: "alphacast/01.jpg",
        bigUrl: "alphacast/01b.jpg",
        description: "Old Homepage"
      },
      {
        url: "alphacast/02.jpg",
        bigUrl: "alphacast/02b.jpg",
        description: "Redesigned Homepage with focus on the general navigation and layout improvement."
      },
      {
        url: "alphacast/03.jpg",
        bigUrl: "alphacast/03b.jpg",
        description: "New Teams page with all the related info at a single glance."
      },
      {
        url: "alphacast/04.jpg",
        bigUrl: "alphacast/04b.jpg",
        description: "Redesigned cards giving them better readability and easy access to the card tools and status."
      },
    ],
  },
  {
    active: true,
    title: "Ring",
    href: "https://www.ring.com",
    task: "Design Engineering and Frontend Development",
    description: "Working from the direction and original concepts provided by the Design Team, I led the team that built much of the Ring website between 2014 and 2019, acting as a bridge between developers and designers to help achieve the best possible outcome for each feature.<br><br>After 2019, I transitioned to my current role on the Ventures team, where I assist with design and frontend development for internal apps.",
    tech: [
      'Sketch', 
      'Pen and Paper',
      'React + Vue + TailwindCSS',
    ],
    hasCS: false,
    CSLink: '',
    hasNDA: true,
    images: [
      {
        url: "ring/ring01.jpg",
        bigUrl: "",
        description: "Web Implementation and maintenance of the Base Ring UI Kit / Design System during my time at the Billing Team"
      },
      {
        url: "ring/ring02.jpg",
        bigUrl: "",
        description: "User Main Dashboard Video Events Redesign / Frontend Implementation"
      },
      {
        url: "ring/ring03.jpg",
        bigUrl: "",
        description: "User Main Dashboard Billing and Plans Redesign / Frontend Implementation"
      },
      {
        url: "ring/ring04.jpg",
        bigUrl: "",
        description: "User Main Dashboard Billing and Plans Redesign / Frontend Implementation"
      },
    ],
  },
  {
    active: true,
    title: "Prode",
    href: "",
    task: "UI Design / Frontend Code",
    description: "A simple landing page for a Prode app that's refreshed for every major fútbol event. It features original logos and textures from the Copa America identity and includes a small tribute to Diego Maradona.",
    tech: [
      'Pen and Paper',
      'Figma', 
      'NextJS',
      'TailwindCSS',
    ],
    hasCS: false,
    CSLink: '',
    hasNDA: false,
    images: [
      {
        url: "prode/desktop.jpg",
        bigUrl: "prode/desktop.jpg",
        description: "Landing Page for desktops"
      }
    ]
  },
  {
    active: true,
    title: "Connect Rocket",
    href: "https://www.connectrocket.com",
    task: "Design Study / Frontend Code",
    description: "It’s always a pleasure to work with Hugh and Adam. This time, they were adding a new multi-step process to the app, so based on the initial concept, I conducted a quick study on the best way to display the steps of this new process and then implemented it on the site.",
    tech: [
      'Figma', 
      'Ruby on Rails',
      'Haml',
    ],
    hasCS: false,
    CSLink: '',
    hasNDA: false,
    images: [
      {
        url: "connectrocket/steps-study.jpg",
        bigUrl: "connectrocket/steps-study.jpg",
        description: "Multi-Step study for a new process on ConnectRocket.com"
      }
    ]
  },
  {
    active: true,
    title: "Arcosule",
    href: "https://www.arcosule.com/",
    task: "Full Website - UI / Frontend",
    description: "Designed the Arcosule website to convey a playful, modern, and tech-forward approach to typically outdated systems (like ATM software) while maintaining transparency and a strong sense of security. The site was built in Jekyll using a theme created from scratch, and each section can be easily updated using a markdown file.",
    tech: [
      'Figma', 
      'Jekyll',
      'Progressive Enahncement',
      'Mobile First'
    ],
    hasCS: false,
    CSLink: '',
    hasNDA: false,
    images: [
      {
        url: "arcosule/landing-arcosule.jpg",
        bigUrl: "arcosule/landing-arcosule.jpg",
        description: "A more playful, modern and tech-forward approach."
      }
    ]
  },
]