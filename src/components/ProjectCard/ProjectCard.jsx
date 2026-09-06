import "./ProjectCard.css";
import Button from "../Button/Button";
import ProjectGallery from "./ProjectGallery/ProjectGallery";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
      )}

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      {project.screenshots && project.screenshots.length > 0 && (
        <ProjectGallery screenshots={project.screenshots} />
      )}

      <div className="tech-stack">

        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}

      </div>

      <div className="project-buttons">

        <Button
          text="GitHub"
          href={project.github}
        />

        <Button
          text="Live Demo"
          href={project.liveDemo}
          primary={false}
        />

      </div>

    </div>
  );
}

export default ProjectCard;