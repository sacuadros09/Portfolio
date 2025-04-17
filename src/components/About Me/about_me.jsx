import "./about_me.css";

export function AboutMe() {
  const buttons = [
    { icon: "/git-icon.png", text: "Github" },
    { icon: "/linkedin-icono.png", text: "LinkedIn" },
    { icon: "/behance-icon.png", text: "Behance" },
  ];

  return (
    <section className="about-me">
  <img src="/Cuadros2-img.png" alt="Profile" className="about-me-image" />
  <div className="about-me-content">
    <div className="about-me-text">
      <h2 className="about-me-title">About Me</h2>
      <p className="about-me-description about-me-description-1">
        Hi, my name is Santiago Cuadros, I’m 22 years old and currently studying Interactive Media Design at Universidad Icesi. I live in Cali, Colombia. I’m passionate about sports like soccer, video games, and fitness—disciplines that have taught me about discipline, consistency, and teamwork.
      </p>
      <p className="about-me-description about-me-description-2">
        I’m currently working with InnLab, where I contribute to the development of a business diagnostic platform. I focus on creating interactive surveys that assess the state of companies and generate personalized reports, optimizing data collection and analysis.
      </p>
    </div>
    <div className="about-me-buttons">
      {buttons.map((button, index) => (
        <button key={index} className="about-me-button">
          <img src={button.icon} alt={`${button.text} Icon`} className="button-icon" />
          {button.text}
        </button>
      ))}
    </div>
  </div>
</section>
  );
}