import { Tile, Loading } from "carbon-components-react";
import { useCallback, useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState(undefined);

  const fetchData = useCallback(async () => {
    const data = await fetch("./projects.json");
    const { projects } = await data.json();
    setProjects(projects);
  }, [setProjects]);

  useEffect(() => {
    console.log("useEffect");
    fetchData();
  }, []);

  if (projects) {
    return (
      <Tile className="content">
        <div className="content-items justify-content-center">
          {projects.map((project) => (
            <div
              className="content-item projects-item"
              onClick={() => (window.location = project.link)}
            >
              <img
                className="projects-thumbnail"
                src={project.thumbnail}
                alt={project.title}
              />
              <h5>{project.title}</h5>
              <p>{project.detail}</p>
            </div>
          ))}
        </div>
      </Tile>
    );
  } else {
    return <Loading />;
  }
};

export default Projects;
