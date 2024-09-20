import { Prisma, Project, Task } from "@prisma/client";
import { useState } from "react";
import { ProjectWithTasks } from "./ProjectList";

export default function ProjectItem({project}: {project: ProjectWithTasks}) {
  const [expanded, setExpanded] = useState<Boolean>(false);
  const [tasks, setTasks] = useState<Task[]>(project.tasks)

  function handleClick() {
    setExpanded(!expanded);
  }

  return(
    <div className="p-2 border rounded-md m-2 bg-blue-700 hover:bg-blue-950" onClick={handleClick}>
      <h1 className="font-bold">{project.name}</h1>
      <h2 className="font-light italic">{project.description}</h2>
      <div className={`${expanded ? 'block' : 'hidden'}`}>
        <h3>Tasks:</h3>
        <ul>
          <li>Task1</li>
        </ul>
      </div>
    </div>
  )
}