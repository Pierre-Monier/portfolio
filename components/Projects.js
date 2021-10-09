import { Tile } from "carbon-components-react";

const Projects = ({ projects }) => (
  <Tile className="content">
    <div className="content-items justify-content-center">
      {projects.map((project, i) => (
        <div
          key={i}
          className="content-item projects-item"
          onClick={() => (window.location = project.link)}
        >
          <img
            className="projects-thumbnail"
            src={project.thumbnail}
            width={640}
            height={320}
            alt={project.title}
          />
          <h5>{project.title}</h5>
          <p>{project.detail}</p>
        </div>
      ))}
    </div>
  </Tile>
);

export default Projects;
