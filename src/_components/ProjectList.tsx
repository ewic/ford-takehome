import { Prisma, Project } from "@prisma/client";
import ProjectItem from "./ProjectItem";

export type ProjectWithTasks = Prisma.ProjectGetPayload<{
  include: {
    tasks: true
  };
}>;

export default function ProjectList({projects}: {projects: Array<Project>}) {
  return(
    <div className="">
      <form>
        
      </form>

      <div className="w-full">
        {projects.map((project) => {
          return <ProjectItem project={project} />
        })}
      </div>

    </div>
  )
}