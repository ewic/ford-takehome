'use client'

import RootLayout from "./layout";
import ProjectList from "@/_components/ProjectList";
import { ChangeEvent, useEffect, useState } from "react";
import { Project, User } from "@prisma/client";
import NewProjectForm from "@/_components/NewProjectForm";

// Dev for later, make this selectable
const userId = 1; 

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User[] | null>(null);

  useEffect(() => {
    fetchUser();
  }, [])
  
  async function fetchUser() {
    // const res = await fetch(`/api/users/${userId}`)
    const res = await fetch(`/api/users/`)
    const json = await res.json();

    setUsers(json.data)
    setUser(json.data[0])
  }

  async function handleSelectUser(event: ChangeEvent<HTMLSelectElement>) {
    let id = event.target.value;

    let user = users.find((user) => {
      console.log(user);
      return user.id == Number(id);
    })

    if (user) setUser(user)
  }

  return (
    <RootLayout>
      <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
        <h1 className="w-full p-2 text-center text-8xl font-semibold">Project List { user ? `for ${user.name}` : null}</h1>
        <select className="text-black" value={user ? user.id : 0} onChange={(evt) => handleSelectUser(evt)}>
          {users.map(user => {
            return (
              <option value={user.id} key={user.id}>{user.name}</option>
            )
          })}
        </select>
        <div className="flex">
          <div className="w-2/3">
            <h2 className="font-bold text-6xl">Project List</h2>
            <ProjectList projects={user ? user.projects : []} />
          </div>
        
          <div id="new-project-form" className="w-1/3">
          </div>
        </div>

        
      </div>
    </RootLayout>
  );
}
