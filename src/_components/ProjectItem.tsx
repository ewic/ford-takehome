import { Prisma, Project, Task } from "@prisma/client";
import { useEffect, useState } from "react";

export default function ProjectItem({project}: {project: Project}) {
  const [expanded, setExpanded] = useState<Boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    console.log(project.tasks);
  }, [])

  function handleClick() {
    setExpanded(!expanded);
  }

  return(
    <div className="border rounded-t-lg m-2" >
      <div className="p-2 rounded-t-lg flex flex-row bg-red-800 hover:bg-red-950" onClick={handleClick}>
        <div className="grow w-8/10">
          <h1 className="font-bold">{project.name}</h1>
          <h2 className="font-light italic">{project.description}</h2>
        </div>
        <div className="w-2/10">
          {expanded ? '🔺' : '🔻'}
        </div>
      </div>
      <div className={`p-2 ${expanded ? 'block' : 'hidden'}`}>
        <ul>
          {project.tasks.map((task: Task) => {
            <li key={task.id}>{task.title}: {task.description}</li>
          })}          
        </ul>
      </div>
    </div>
  )
}