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
            <div className="project-image-wrapper">
  <img src={project.image} alt={project.title}  className="project-image" />
</div>
            <div className="project-content-wrapper">
              <div className="project-button-section">
                <button className="project-button">
                  <img src={project.icon} alt="Icon" className="button-icon" />
                  <span className="project-button-text">{project.buttonText}</span>
                </button>
              </div>
              <div className="project-content-footer-wrapper">
                <div className="project-content-section">
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="project-footer-section">
                  <button className="project-footer-button">
                    <img src={project.footerIcon} alt="Footer Icon" className="project-footer-icon" />
                    <span className="project-footer-button-text">{project.footerButtonText}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}