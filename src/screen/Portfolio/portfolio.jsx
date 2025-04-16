import { Home } from "../../components/Home/home";

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
    src: "/assets/cuadros-img.png",
    alt: "Santiago Cuadros",
  };

  return (
    <div>
      <Home
        titles={titles}
        subtitles={subtitles}
        descriptions={descriptions}
        buttons={buttons}
        image={image}
      />
    </div>
  );
}