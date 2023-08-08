interface Project {
  name: string;
  src: string;
  description: string;
  url: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="project-cards">
      {projects.map(project => {
        return (
        <div className="card">
          <a href={project.url} className="host-link" target="_blank"/>
          <img src={project.src}/>
          <h1 className="proj-title">{project.name}</h1>
          <p>{project.description}</p>
        </div>
        )
      })}
    </div>
  )
}

export default Projects;