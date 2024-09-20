import { Project } from "@prisma/client";
import ProjectItem from "./ProjectItem";

export default function ProjectList({projects}: {projects: Array<Project>}) {
  return(
    <div className="">
      <div className="">
        {projects ? projects.map((project) => {
          return <ProjectItem key={project.id} project={project} />
        }) :
        null}
      </div>

    </div>
  )
}