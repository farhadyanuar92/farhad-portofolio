import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Farhad",
  lastName: "Yanuar",
  name: `Farhad Yanuar`,
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "farhadyanuar92@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa Indonesia"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Occasional writing on software engineering, system design, and building things that last.</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/farhadyanuar92",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/farhad-yanuar/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/_kamikaaze/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@_kamikaaze",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} – Software Engineer`,
  description: `Portfolio of ${person.name}, a software engineer specialising in enterprise web systems, scalable architecture, and full-stack development.`,
  headline: <>Engineering systems that scale, last, and matter</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">ERP System Backend</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/erp-system-backend-multi-warehouse",
  },
  subline: (
    <>
      I'm Farhad, a software engineer based in Jakarta with 4+ years building enterprise-grade systems.
      <br /> I focus on clean architecture, maintainable code, and shipping solutions that actually hold up in production.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `${person.name} is a software engineer based in Tangerang, Indonesia with 4+ years of experience building enterprise web systems across healthcare, finance, and distribution.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://wa.me/628116602998?text=Hi%2C%20Farhad%20introduce%20yourself.",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a software engineer based in Tangerang, Indonesia with 4+ years of experience across enterprise
        healthcare systems. I work across the full stack — from .NET and Node.js backends to React and
        Next.js frontends — and I've owned everything from production incidents and change requests to
        greenfield system design. I care about writing code that's maintainable long after the sprint ends,
        and I communicate directly with clients to make sure what we build actually solves the right problem.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Bithealth",
        timeframe: "Apr 2024 – Present",
        role: "Software Engineer (Lead Maintenance Support)",
        achievements: [
          <>
            Lead maintenance for Siloam Hospital's web applications — autonomously owning three concurrent
            projects: Master Data Management (MDM), Human Capital Management System (HCMS), and Doctor
            Governance (DDG).
          </>,
          <>
            Sole point of contact for production issues — triaging, resolving, and communicating directly
            with clients on every incident, change request, and service request through to closure.
          </>,
          <>
            Integrated Midtrans payment gateway for online appointment booking, delivering a secure and
            seamless transaction flow end-to-end.
          </>,
          <>
            Assist and supervise colleagues on RPA (Robotic Process Automation) logic issues.
          </>,
          <>
            Own monthly maintenance reporting with Google Data Studio, with direct reports delivered to the COO.
          </>,
        ],
        images: [],
      },
      {
        company: "Bithealth",
        timeframe: "Jan 2022 – Apr 2024",
        role: "Associate Software Engineer (Fullstack)",
        achievements: [
          <>
            Analysed an existing Windows desktop system and led the migration to a web-based architecture —
            rebuilding the backend in .NET with 90%+ unit test coverage via xUnit, and continuous code
            quality analysis through SonarQube.
          </>,
          <>
            Built a responsive, maintainable frontend in Next.js and TypeScript with comprehensive Jest
            unit tests maintained alongside every feature.
          </>,
          <>
            Designed and implemented a ledger transaction system covering admission, billing calculation,
            and integration with external financial systems — ensuring accurate data flow across all
            connected services.
          </>,
          <>
            Analysed customer requirements and translated them into technical specifications, proposing
            architecture and implementation approaches directly to stakeholders.
          </>,
        ],
        images: [],
      },
      {
        company: "The Court",
        timeframe: "Mar 2024 – Sep 2024",
        role: "Frontend Developer (Part-Time)",
        achievements: [
          <>
            Built and maintained the UI for a real-time football match tracking system — creating
            responsive pages and robust real-time data logic for live match input and analysis.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Universitas Teknologi Yogyakarta",
        description: <>Bachelor's Degree — graduated with a 3.77 GPA.</>,
      },
      {
        name: "Hacktiv8 Bootcamp",
        description: <>Fullstack JavaScript intensive — HTML/CSS, JavaScript, Node.js, Express, React, Redux, and Vue. Final grade: 78.20.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend",
        description: (
          <>
            Building performant, accessible interfaces with React and Next.js. Focused on component
            architecture, state management, and delivering a consistent user experience at scale.
          </>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "typescript" },
        ],
        images: [],
      },
      {
        title: "Backend & Database",
        description: (
          <>
            Designing and maintaining robust server-side systems using Node.js, .NET, and Laravel.
            Strong experience with PostgreSQL — schema design, query optimisation, and data integrity
            for high-stakes transactional systems.
          </>
        ),
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "JavaScript", icon: "javascript" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing on software engineering and system design",
  description: `Thoughts from ${person.name} on building scalable systems, maintainable code, and engineering practice.`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Selected engineering work by ${person.name} — enterprise systems, full-stack applications, and technical problem-solving.`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
