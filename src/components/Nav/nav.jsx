import "./nav.css"

export function Nav({ img, links }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={img} alt="Logo" className="logo-marca" />
      </div>
      <div className="navbar-texts">
        <ul className="navbar-links">
          {links.map((link, index) => (
            <li key={index} className={`navbar-text ${link.className || ""}`}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}