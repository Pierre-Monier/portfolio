import Projects from "../components/Projects";
import projectsData from "../data/projects.json";

export async function getStaticProps() {
  return {
    props: {
      projects: projectsData.projects,
    },
  };
}

export default function ProjectsPage({ toto, projects }) {
  return <Projects toto={toto} projects={projects} />;
}
