import "./portfolio.css"
import { Home } from "../../components/Home/home";
import { Carrousel } from "../../components/Carrousel/carrousel";

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

  return (
    <div>
      <Home
        titles={titles}
        subtitles={subtitles}
        descriptions={descriptions}
        buttons={buttons}
        image={image}
      />
      {/* Carrusel */}
      <Carrousel items={carrouselItems} />
    </div>
  );
}