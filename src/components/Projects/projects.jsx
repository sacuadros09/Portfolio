import "./projects.css";

export function Projects({ projects }) {
  return (
    <div className="projects-section">
      {/* Sección del título y los filtros */}
      <div className="projects-header">
        <h1 className="projects-title">Projects</h1>
        <div className="projects-filters">
          {["All", "Web Apps", "UI Design", "UX"].map((category, index) => (
            <button key={index} className="filter-button">
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Cards de proyectos */}
      <div className="projects-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {/* Imagen */}
            <img src={project.image} alt={project.title} className="project-image" />

            {/* Sección que agrupa btn1, título, descripción y btn2 */}
            <div className="project-content-wrapper">
              {/* Botón superior */}
              <div className="project-button-section">
                <button className="project-button">
                  <img src={project.icon} alt="Icon" className="button-icon" />
                  <span className="project-button-text">{project.buttonText}</span>
                </button>
              </div>

              {/* Sección que agrupa título, descripción y botón inferior */}
              <div className="project-content-footer-wrapper">
                {/* Título y descripción */}
                <div className="project-content-section">
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                </div>

                {/* Botón inferior */}
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