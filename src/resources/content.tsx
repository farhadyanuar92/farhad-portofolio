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
  image: `/images/og/home.png`,
  label: "Home",
  title: `${person.name} – Software Engineer`,
  description: `Portfolio of ${person.name}, a software engineer specialising in enterprise web systems, scalable architecture, and full-stack development.`,
  headline: <>Full-stack engineer. Enterprise systems. Production-ready code.</>,
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
      Software engineer with 4+ years building enterprise systems in healthcare and distribution.
      <br />Full-stack across .NET, Node.js, React, and Next.js — from greenfield architecture to production ownership.
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
        I'm a software engineer based in Tangerang, Indonesia with 4+ years building and maintaining
        enterprise web systems — primarily in healthcare and distribution. My work spans the full stack:
        backend services in .NET and Node.js, transactional APIs, and production frontends in React and
        Next.js. I've owned systems end-to-end — from architecture and implementation through to live
        incident response, client communication, and iterative delivery. I write code with the person
        who maintains it in mind. Currently exploring workflow automation with n8n and applied data analysis.
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
        role: "Software Engineer — Lead Maintenance",
        achievements: [
          <>
            Sole engineer responsible for three concurrent Siloam Hospital web applications in production:
            Master Data Management (MDM), Human Capital Management System (HCMS), and Doctor Governance (DDG).
          </>,
          <>
            Primary point of contact between engineering and client — triaging incidents, delivering resolutions,
            and managing every change request and service request from intake through to sign-off.
          </>,
          <>
            Integrated Midtrans payment gateway into the online appointment booking flow, handling
            transaction state, failure recovery, and end-to-end testing in a live production environment.
          </>,
          <>
            Supervised colleagues on RPA (Robotic Process Automation) logic — diagnosing automation
            failures and establishing reliable process flows.
          </>,
          <>
            Delivered monthly maintenance reports via Google Data Studio directly to the COO,
            covering system health, issue resolution rates, and outstanding work.
          </>,
        ],
        images: [],
      },
      {
        company: "Bithealth",
        timeframe: "Jan 2022 – Apr 2024",
        role: "Associate Software Engineer — Fullstack",
        achievements: [
          <>
            Led migration of a legacy Windows desktop healthcare application to a web architecture.
            Rebuilt the backend in .NET (C#) with xUnit unit tests at 90%+ coverage and SonarQube
            enforcing continuous static analysis — every PR gated before merge.
          </>,
          <>
            Built the frontend in Next.js and TypeScript with Jest unit tests on every feature and
            SonarQube quality gates maintained throughout.
          </>,
          <>
            Designed and implemented a ledger transaction system covering patient admission charges,
            billing calculation, and integration with external financial systems — ensuring accurate,
            auditable data flow across all connected services.
          </>,
          <>
            Worked directly with clients to analyse requirements, propose technical approaches, and
            validate implementations — bridging business intent and engineering execution.
          </>,
        ],
        images: [],
      },
      {
        company: "The Court",
        timeframe: "Mar 2024 – Sep 2024",
        role: "Frontend Developer — Part-Time",
        achievements: [
          <>
            Built responsive UI and real-time data logic for a live football match tracking system,
            handling rapid state updates and data entry workflows under live match conditions.
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
            Production interfaces in React and Next.js with TypeScript. Component architecture,
            state management, unit testing with Jest, and continuous quality analysis with SonarQube.
          </>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "typescript" },
          { name: "JavaScript", icon: "javascript" },
        ],
        images: [],
      },
      {
        title: "Backend",
        description: (
          <>
            RESTful API design and service architecture across .NET (C#), Node.js/Express, and
            Laravel (PHP). Unit testing with xUnit. Experience integrating payment gateways,
            third-party APIs, and multi-system financial data flows.
          </>
        ),
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: ".NET", icon: "dotnet" },
          { name: "Laravel", icon: "laravel" },
        ],
        images: [],
      },
      {
        title: "Database & Infrastructure",
        description: (
          <>
            PostgreSQL as the primary database — schema design, transactional integrity, query
            optimisation, and audit trail patterns. Experience with MongoDB and MySQL.
            Containerised deployments with Docker; multi-stage builds for lean production images.
          </>
        ),
        tags: [
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "Docker", icon: "docker" },
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
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Selected engineering work by ${person.name} — enterprise systems, full-stack applications, and technical problem-solving.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
