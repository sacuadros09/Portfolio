import { Nav } from "../../components/Nav/nav";
import "./nav_bar.css"

export default function NavBar() {
    return (
      <div>
       
        <Nav
          img="/logo-marca1.png"
          links={[
            { href: "#section1", text: "Home", className: "navbar-text-home" },
            { href: "#section2", text: "About", className: "navbar-text-about" },
            { href: "#section3", text: "Projects", className: "navbar-text-projects" },
            { href: "#section4", text: "Experience", className: "navbar-text-experience" },
          ]}
        />
      </div>
    );
  }