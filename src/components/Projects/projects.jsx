import { useState } from "react";
import "./projects.css";

export function Projects({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((project) => project.category.includes(selectedCategory));

  return (
    <div className="projects-section">
      {/* Header con filtros */}
      <div className="projects-header">
        <h1 className="projects-title">Projects</h1>
        <div className="projects-filters">
          {["All", "Web Apps", "UI Design", "UX"].map((category, index) => (
            <button
              key={index}
              className={`filter-button ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Tarjetas filtradas */}
      <div className="projects-cards">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content-wrapper">
              <div className="project-button-section">
                {project.buttons &&
                  project.buttons.map((button, buttonIndex) => (
                    <button
                      key={buttonIndex}
                      className="project-button"
                      onClick={() => window.open(button.link, "_blank")}
                    >
                      <img src={button.icon} alt={`${button.text} Icon`} className="button-icon" />
                      <span className="project-button-text">{button.text}</span>
                    </button>
                  ))}
              </div>
              <div className="project-content-footer-wrapper">
                <div className="project-content-section">
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="project-footer-section">
                  {project.footerButtons &&
                    project.footerButtons.map((footerButton, footerIndex) => (
                      <button
                        key={footerIndex}
                        className="project-footer-button"
                        onClick={() => window.open(footerButton.link, "_blank")}
                      >
                        <img
                          src={footerButton.icon}
                          alt={`${footerButton.text} Icon`}
                          className="project-footer-icon"
                        />
                        <span className="project-footer-button-text">{footerButton.text}</span>
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}