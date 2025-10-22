import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"outline"} size={"sm"}>
            View Source
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS: { [key: string]: Skill } = {
  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "Prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  threejs: {
    title: "Three.js",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  framer: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShadCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
};

type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "mineral-3d-platform",
    category: "3D Visualization & Education",
    title: "Interactive Mineral 3D Platform",
    src: "/assets/projects-screenshots/codingducks/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.threejs,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framer,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.python,
      ],
    },
    live: "https://deanshen.site/minerals",
    github: "https://github.com/Dean-999/mineral-platform",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Bringing Geology to Life Through Interactive 3D Technology
          </TypographyP>
          <TypographyP className="font-mono ">
            An immersive educational platform that transforms mineral science into an engaging 3D experience. 
            Explore crystal structures, chemical compositions, and geological formations through cutting-edge 
            web technologies. Perfect for students, researchers, and mineral enthusiasts worldwide.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">3D Crystal Structures</TypographyH3>
          <p className="font-mono mb-2">
            High-fidelity 3D models of crystal structures rendered using Three.js and WebGL. 
            Features real-time rotation, zoom, and multi-angle viewing with scientifically accurate representations.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/problems.png`,
              `${BASE_PATH}/codingducks/problem.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">Comprehensive Mineral Database</TypographyH3>
          <p className="font-mono mb-2">
            Extensive database featuring over 500 minerals with detailed information including chemical formulas, 
            physical properties, geological occurrence, and historical significance.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/ducklets.png`,
              `${BASE_PATH}/codingducks/ducklet1.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">Interactive Learning Modules</TypographyH3>
          <p className="font-mono mb-2">
            Gamified educational content with quizzes, interactive challenges, and progress tracking. 
            Learn crystallography, mineralogy, and petrology through hands-on 3D exploration.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/css-battles.png`,
              `${BASE_PATH}/codingducks/css-battle.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">Virtual Mineral Museum</TypographyH3>
          <p className="font-mono mb-2">
            Curated collection of rare and beautiful specimens from around the world. 
            Virtual gallery experience with detailed descriptions and high-resolution 3D scans.
          </p>
          <SlideShow images={[`${BASE_PATH}/codingducks/contests.png`]} />
        </div>
      );
    },
  },
  {
    id: "swimming-analytics",
    category: "Sports Performance & Analytics",
    title: "Swimming Performance Tracker",
    src: "/assets/projects-screenshots/couponluxury/landing.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "https://deanshen.site/swimming",
    github: "https://github.com/Dean-999/swimming-tracker",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.prisma,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            A comprehensive analytics platform designed for competitive swimmers to track performance, 
            analyze progress, and optimize training. Features real-time data visualization, 
            personalized insights, and advanced statistical analysis.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Performance Tracking</TypographyH3>
          <p className="font-mono mb-2">
            Track times across all strokes and distances. Record splits, turns, and underwater times 
            with millisecond precision. Compare performances across different competitions and training sessions.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/couponluxury/landing.png`,
              `${BASE_PATH}/couponluxury/1.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">Data Visualization</TypographyH3>
          <p className="font-mono mb-2">
            Interactive charts and graphs showing progress over time. Visualize improvements in different metrics 
            including speed, endurance, and technique. Identify trends and patterns in your training data.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/couponluxury/2.png`,
              `${BASE_PATH}/couponluxury/3.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">Goal Setting & Achievement</TypographyH3>
          <p className="font-mono mb-2">
            Set personal records and competition goals. Track progress towards targets with visual indicators. 
            Celebrate milestones and achievements with shareable accomplishment badges.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/couponluxury/4.png`,
              `${BASE_PATH}/couponluxury/5.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "robotics-design",
    category: "Robotics & Engineering",
    title: "Robotics Design Portfolio",
    src: "/assets/projects-screenshots/the-booking-desk/landing.png",
    screenshots: ["landing.png"],
    live: "https://deanshen.site/robotics",
    github: "https://github.com/Dean-999/robotics-portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.threejs,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Showcase of robotics projects featuring mechanical design, electronics integration, 
            and autonomous systems. Documenting the journey from concept sketches to working prototypes, 
            with detailed technical specifications and design processes.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Interactive 3D Models</TypographyH3>
          <p className="font-mono mb-2">
            Explore robot designs in 3D with interactive CAD models. View assemblies, exploded views, 
            and motion simulations directly in your browser.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/the-booking-desk/landing.png`,
              `${BASE_PATH}/the-booking-desk/1.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">Design Documentation</TypographyH3>
          <p className="font-mono mb-2">
            Comprehensive documentation including design rationale, material selection, 
            circuit diagrams, and programming logic. Learn from detailed build logs and troubleshooting notes.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/the-booking-desk/2.png`,
              `${BASE_PATH}/the-booking-desk/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "uiux-portfolio",
    category: "UI/UX Design",
    title: "UI/UX Design Showcase",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    live: "https://deanshen.site/design",
    github: "https://github.com/Dean-999/design-portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framer,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Collection of UI/UX design work showcasing user-centered design principles, 
            modern aesthetics, and intuitive user experiences. From wireframes to high-fidelity prototypes, 
            each project demonstrates a thoughtful approach to solving user problems.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Design System</TypographyH3>
          <p className="font-mono mb-2">
            Comprehensive design system with reusable components, color palettes, typography scales, 
            and spacing guidelines. Built for consistency and scalability across multiple projects.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/1.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">Case Studies</TypographyH3>
          <p className="font-mono mb-2">
            Detailed case studies showing the complete design process from user research to final implementation. 
            Includes user personas, journey maps, wireframes, and usability testing results.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/2.png`,
              `${BASE_PATH}/portfolio/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "music-platform",
    category: "Music & Creative Arts",
    title: "Guitar Learning Platform",
    src: "/assets/projects-screenshots/ghostchat/1.png",
    screenshots: ["1.png"],
    live: "https://deanshen.site/music",
    github: "https://github.com/Dean-999/guitar-platform",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Interactive guitar learning platform with chord diagrams, tab notation, 
            and playback features. Combines my passion for music with web development 
            to create an engaging learning experience.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Interactive Chord Library</TypographyH3>
          <p className="font-mono mb-2">
            Comprehensive chord library with visual diagrams and audio playback. 
            Learn finger positions and transitions with step-by-step guidance.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/ghostchat/1.png`,
              `${BASE_PATH}/ghostchat/2.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "math-visualizer",
    category: "Mathematics & Education",
    title: "Interactive Math Visualizer",
    src: "/assets/projects-screenshots/jra/1.png",
    screenshots: ["1.png"],
    live: "https://deanshen.site/math",
    github: "https://github.com/Dean-999/math-visualizer",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.threejs,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Mathematical concepts brought to life through interactive 3D visualizations. 
            Explore calculus, linear algebra, and geometry with dynamic animations and 
            real-time parameter adjustments.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">3D Function Plotter</TypographyH3>
          <p className="font-mono mb-2">
            Visualize mathematical functions in 3D space. Plot surfaces, parametric equations, 
            and vector fields with interactive controls and real-time updates.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/jra/1.png`,
              `${BASE_PATH}/jra/2.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">Interactive Tutorials</TypographyH3>
          <p className="font-mono mb-2">
            Step-by-step tutorials explaining complex mathematical concepts through 
            visual demonstrations. Perfect for students and educators alike.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/jra/3.png`,
              `${BASE_PATH}/jra/4.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "academic-portfolio",
    category: "Academic & Research",
    title: "Academic Portfolio",
    src: "/assets/projects-screenshots/codingducks/landing.png",
    screenshots: ["landing.png"],
    live: "/pages/academic/",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Comprehensive showcase of academic achievements, research projects, and scholarly work. 
            View my complete academic journey, publications, and research contributions.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyP className="font-mono mt-4">
            Click "Visit Website" to explore my full academic portfolio.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "sports-achievements",
    category: "Sports & Athletics",
    title: "Sports Achievements",
    src: "/assets/projects-screenshots/couponluxury/landing.png",
    screenshots: ["landing.png"],
    live: "/pages/sport/",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Complete documentation of my athletic journey, including swimming records, 
            competition results, and training achievements. Featuring videos, photos, 
            and detailed performance statistics.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyP className="font-mono mt-4">
            Click "Visit Website" to view my full sports portfolio.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "extracurricular-activities",
    category: "Leadership & Activities",
    title: "Extracurricular Activities",
    src: "/assets/projects-screenshots/the-booking-desk/landing.png",
    screenshots: ["landing.png"],
    live: "/pages/activities/",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Showcase of leadership roles, club activities, community service, and 
            extracurricular involvement. Documenting my contributions beyond academics 
            and athletics.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyP className="font-mono mt-4">
            Click "Visit Website" to explore my activities portfolio.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "personal-interests",
    category: "Personal & Hobbies",
    title: "Personal Interests",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    live: "/pages/personal/",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Personal blog, hobbies, interests, and creative projects. A glimpse into 
            my life outside of academics and sports, including music, photography, 
            and other passions.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyP className="font-mono mt-4">
            Click "Visit Website" to explore my personal page.
          </TypographyP>
        </div>
      );
    },
  },
];

export default projects;

