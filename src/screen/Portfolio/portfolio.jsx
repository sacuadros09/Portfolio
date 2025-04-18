import "./portfolio.css";
import { Home } from "../../components/Home/home";
import { Carrousel } from "../../components/Carrousel/carrousel";
import { Projects } from "../../components/Projects/projects";
import { Experience } from "../../components/Experience/work_experience";
import { AboutMe } from "../../components/About Me/about_me";
import { Copyright } from "../../components/CopyRight/Copyright";

export default function Portfolio() {
  const titles = {
    title1: "Hi, I am",
    title2: "Santiago Cuadros",
  };

  const subtitles = [
    { content: "UX/FrontEnd Developer", className: "main-subtitle" },
  ];

  const descriptions = [
    { content: "Interactive Media Designer specialized in web development and UX, focused on creating intuitive and engaging digital experiences.", className: "description" },
  ];

  const buttons = [
    { text: "Start your project", className: "home-button-start", onClick: () => alert("Starting your project...") },
    { icon: <img src="/download-icon.png" alt="Download Icon" className="button-icon-img" />, text: "See my CV", className: "home-button-cv", onClick: () => alert("Downloading CV...") },
  ];

  const image = {
    src: "/cuadros-img.png",
    alt: "Santiago Cuadros",
  };

  const carrouselItems = [
    { icon: "/react-logo.png", text: "React", className: "icon-react" },
    { icon: "/typescript-logo.png", text: "Typescript", className: "icon-typescript" },
    { icon: "/javascript-logo.png", text: "Javascript", className: "icon-javascript" },
    { icon: "/html-logo.png", text: "HTML", className: "icon-html" },
    { icon: "/css-logo.png", text: "CSS", className: "icon-css" },
    { icon: "/figma-logo.png", text: "Figma", className: "icon-figma" },
    { icon: "/postgresql-logo.png", text: "PostgreSQL", className: "icon-postgresql" },
    { icon: "/blender-logo.png", text: "Blender", className: "icon-blender" },
    { icon: "/premier-logo.png", text: "Premier", className: "icon-premier" },
    { icon: "/python-logo.png", text: "Python", className: "icon-python" },
  ];

  const projects = [
    {
      image: "/One Party.png",
      footerButtons: [
        {
          icon: "/behance-icon.png",
          text: "Behance",
          link: "https://www.behance.net/gallery/208285097/One-Party-Board-Game",
        },
      ],
      title: "One Party",
      description: "The purpose of One Party is to create a board game that combines competitiveness, fun, and teamwork, offering players engaging.",
      category: ["UI Design", "UX", "All"],
    },
    {
      image: "/Tumerque.png",
      footerButtons: [
        {
          icon: "/behance-icon.png",
          text: "Behance",
          link: "https://www.behance.net/gallery/210954129/TURMEQUE-REDESIGN",
        },
      ],
      title: "Tumerqué",
      description: "Redesign of the Tumerqué website, supported by usability tests and case analysis to assess the feasibility of the new version.",
      category: ["UI Design", "UX", "All"],
    },
    {
      image: "/Bancoldex.png",
      footerButtons: [
        {
          icon: "/behance-icon.png",
          text: "Behance",
          link: "https://www.behance.net/gallery/213372503/Conecta-Digital-UX-UI",
        },
      ],
      title: "Bancoldex",
      description: "Worked with Bancóldex to create a high-fidelity prototype for their Conecta Digital platform, focusing on enhancing and user engagement.",
      category: ["UI Design", "UX", "All"],
    },
    {
      image: "/zenvo.img.png",
      footerButtons: [
        {
          icon: "/behance-icon.png",
          text: "Behance",
          link: "https://www.behance.net/gallery/195383185/Zenvo-Studio-portfolio",
        },
        {
          icon: "/git-icon.png",
          text: "GitHub",
          link: "https://github.com/sacuadros09/Zenvo",
        },
      ],
      title: "Zenvo",
      description: "Group project focused on designing and developing digital portfolios. We collaborated to create a cohesive visual experience, named Zenvo",
      category: ["UI Design", "UX", "All", "Web Apps"],
    },
    {
      image: "/teapoyamos-img.png",
      footerButtons: [
        {
          icon: "/behance-icon.png",
          text: "Behance",
          link: "https://www.behance.net/gallery/172971959/TEApoyamos",
        },
      ],
      title: "TEApoyamos",
      description: "Redesign of the TEApoyamos website, including the creation of a high-fidelity prototype to improve usability and consistency.",
      category: ["UI Design", "UX", "All"],
    },
    {
      image: "/gorilla-img.png",
      footerButtons: [
        {
          icon: "/behance-icon.png",
          text: "Behance",
          link: "https://www.behance.net/gallery/197610691/Gorilla-Tag-UX-CASE-STUDY",
        },
      ],
      title: "Gorilla Tag",
      description: "Use case analysis of the VR game Gorilla Tag, highlighting how the lack of an introduction or tutorial negatively impacts the player experience.",
      category: ["UI Design", "UX", "All"],
    },
  ];

  return (
    <div>
      {/* Sección Home */}
      <section id="section1">
        <Home
          titles={titles}
          subtitles={subtitles}
          descriptions={descriptions}
          buttons={buttons}
          image={image}
        />
      </section>
  
      {/* Sección Carrusel */}
      
        <Carrousel items={carrouselItems} />
     
  
      {/* Sección Projects */}
      <section id="section3">
        <Projects projects={projects} />
      </section>
  
      {/* Sección Work Experience */}
      <section id="section4">
        <Experience />
      </section>
  
      {/* Sección About Me */}
      <section id="section2">
        <AboutMe />
      </section>
      <Copyright/>
    </div>
  );
}