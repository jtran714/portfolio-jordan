// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaLinkedin
} from "react-icons/fa";
import { 
  SiJavascript,
  SiRedux,
  SiPostgresql,
  SiDjango,
  SiFastapi,
  SiRabbitmq,
  SiPython,
  SiDocker,
} from "react-icons/si";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

export const githubUsername = "jtran714";

// Blog link icon (imported above)
export const Blog = <FaLinkedin />;
export const moreInfo = "Hello, Welcome to my page! I'm a computer programmer aspiring to contribute and make an impact in the tech industry. I'm a Full Stack Software Engineer who appreciates clean and concise code. I'm a Hack Reactor Coding Bootcamp graduate that's passionate about building, and designing applications to their full potential. My prior experience helped me transition into technology and provided me with valuable skills and traits to integrate smoothly into my future here in the tech industry."

export const skillData = [
  {
    id: 1,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <SiPython className="display-4" />,
    name: "Python",
  },
  {
    id: 5,
    skill: <FaBootstrap className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 6,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 7,
    skill: <SiRedux className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 10,
    skill: <SiPostgresql className="display-4" />,
    name: "PostgreSQL",
  },
  {
    id: 11,
    skill: <SiDjango className="display-4" />,
    name: "Django 4",
  },
  {
    id: 12,
    skill: <SiFastapi className="display-4" />,
    name: "FastAPI",
  },
  {
    id: 13,
    skill: <SiRabbitmq className="display-4" />,
    name: "RabbitMQ,"
  },
  {
    id: 14,
    skill: <SiDocker className="display-4" />,
    name: "Docker",
  },
];

// Resume link (string - "https://YourResumeUrl")
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

export const formspreeUrl = "https://formspree.io/f/xeqwakjr";
