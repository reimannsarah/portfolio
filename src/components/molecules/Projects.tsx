import pageStrings from "../../assets/text/pageStrings";

interface Project {
  name: string;
  src: string;
  description: string;
  techStack: string;
  url: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="projects">
      <h1 id="project-subheader">{pageStrings.projects_subheader}</h1>
      <div className="project-cards">
        {projects.map((project, index) => {
          return (
          <div className="card" key={index}>
            <a href={project.url} className="host-link" target="_blank"/>
            <img src={project.src}/>
            <h1 className="proj-title">{project.name}</h1>
            <p>{project.description}</p>
            <p id="tech-stack">{project.techStack}</p>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects;