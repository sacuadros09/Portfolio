import "./work_experience.css";

export function Experience() {
  const experiences = [
    {
      date: "Currently",
      role: "Backend & Frontend Developer",
      company: "InnLab",
      description: `
        I contribute to the development of an interactive survey that diagnoses the status of companies and generates customized tables.
        I implemented a system for generating and sending Excel reports to the user’s email.
        The goal is to optimize business assessment through automated data collection and analysis.
      `,
      actions: [
        { label: "Preview", icon: "/link-icon.png", link: "", disabled: true },
        { label: "Code", icon: "/git-icon.png", link: "https://github.com/juanmartinlopeze/Growinn-index-test.git", disabled: true },
      ],
    },
    {
      date: "February 2025 – March 2025",
      role: "Backend Developer",
      company: "Ecopapel",
      description: `
        I developed an internal task management system to assign and track activities per employee.
        I implemented the logic using Python and Django, automating workflows and improving operational efficiency.
        The system included a task-based observation history.
      `,
      actions: [
        { label: "Preview", icon: "/link-icon.png", link: "https://ecopapel-preview.com", disabled: true },
        { label: "Code", icon: "/git-icon.png", link: "https://github.com/ecopapel-project", disabled: true },
      ],
    },
    {
      date: "September 2024 – December 2024",
      role: "UX/UI Designer",
      company: "Bancóldex",
      description: `
        Designed over 50 interfaces focused on usability, accessibility, and visual consistency for financial platforms.
        Created interactive prototypes in Figma for user testing and stakeholder validation.
        Collaborated with technical teams on iterations based on real feedback.
      `,
      actions: [
        { label: "Preview", icon: "/link-icon.png", link: "https://www.behance.net/gallery/213372503/Conecta-Digital-UX-UI" },
      ],
    },
    {
      date: "March 2023 – June 2023",
      role: "Product Owner",
      company: "TEApoyamos",
      description: `
        Led a team of 4 people, coordinating communication between the client and the team to ensure requirements were met.
        Ensured product alignment with user expectations and project goals.
      `,
      actions: [
        { label: "Preview", icon: "/link-icon.png", link: "https://www.behance.net/gallery/172971959/TEApoyamos" },
      ],
    },
  ];
  return (
    <section className="work-experience">
    <img src="/time-line.png" alt="Timeline" className="timeline-image" />
    <div>
      <div className="work-experience-header">
        <img src="/work-icon.png" alt="Work Icon" className="work-icon" />
        <h2>Work Experience</h2>
      </div>
      {experiences.map((job, index) => (
        <div key={index} className="job-card">
          <div className="job-content-wrapper">
            <p className="date">{job.date}</p>
            <div className="title-description">
              <h3>
                <span className="role">{job.role}</span> – <span className="company">{job.company}</span>
              </h3>
              <p className="description">{job.description}</p>
            </div>
            <div className="actions">
  {job.actions.map((action, actionIndex) => (
    <button
      key={actionIndex}
      onClick={() => !action.disabled && window.open(action.link, "_blank")} 
      disabled={action.disabled} 
      className={`action-button ${action.disabled ? "disabled" : ""}`} // 
    >
      <img src={action.icon} alt={`${action.label} Icon`} className="action-icon" />
      {action.label}
    </button>
  ))}
</div>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
}