import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <section id="projects" className="projects-section">
      <div className="section-title">
        <p>Portfolio</p>
        <h2>Featured Projects</h2>
      </div>

      {projects.length === 0 ? (
        <p className="empty-message">No projects found.</p>
      ) : (
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProjectList;
