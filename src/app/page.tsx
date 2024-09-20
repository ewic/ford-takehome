'use client'

import Header from "@/_components/Header";
import RootLayout from "./layout";
import ProjectList from "@/_components/ProjectList";
import { useEffect, useState } from "react";
import { Project, User } from "@prisma/client";

// Dev for later, make this selectable
const userId = 2; 

export default function Home() {
  const [user, setUser] = useState<User[] | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchUser();
  }, [])
  
  const fetchUser = async () => {
    const res = await fetch(`/api/users/${userId}`)
    const json = await res.json();

    setUser(json.data)
    setProjects(json.data.projects);
  }

  function expandNewProject() {
    console.log("new proj")
  }

  return (
    <RootLayout>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-8xl font-extrabold">Project List For User: {user ? user.name : null}</h1>
        
        <button className="bg-red-700 p-2 rounded-lg" onClick={expandNewProject}>New Project</button>

        <ul>
          <ProjectList projects={projects} />
        </ul>
      </div>
    </RootLayout>
  );
}
