import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Farhad",
  lastName: "Yanuar",
  name: `Farhad Yanuar`,
  role: "Software Engineer",
  avatar: "/images/avatar.png",
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
  image: `/images/og/home-v2.png`,
  label: "Home",
  title: `${person.name} – Software Engineer`,
  description: `Portfolio of ${person.name}, a software engineer specialising in enterprise web systems, scalable architecture, and full-stack development.`,
  headline: <>Enterprise systems. Production ownership. Full-stack engineering.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Kairos Finance Ledger</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/kairos-finance-ledger",
  },
  subline: (
    <>
      Full-stack software engineer specialising in enterprise systems, scalable backend architecture, and production-grade web applications.
      <br />4+ years across healthcare and operational platforms — from greenfield architecture to live production ownership.
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
        I'm Farhad Yanuar, a full-stack software engineer specialising in enterprise systems, scalable
        backend architecture, and production-grade web applications. After graduating from Hacktiv8's
        Fullstack JavaScript program, I've worked across healthcare and operational platforms using React,
        Next.js, Node.js, PostgreSQL, and .NET.
        <br /><br />
        Previously, I served as Lead Maintenance Support, independently overseeing three enterprise systems
        simultaneously. My responsibilities ranged from diagnosing critical production issues and identifying
        root causes to coordinating temporary operational workarounds and implementing permanent long-term fixes
        — ensuring business continuity while supporting daily operational workflows.
        <br /><br />
        Solving real-world operational problems has shaped the way I approach engineering. Working closely
        with users, mentoring colleagues, and learning from experienced managers broadened my perspective:
        software engineering is not only about writing code — it's about understanding problems, communicating
        effectively, and building solutions that genuinely help users and business operations.
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
    display: false,
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
