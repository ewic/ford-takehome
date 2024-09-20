import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma'
import { Project } from '@prisma/client';

type ResponseData = {
  projects: Project[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  if (req.method === 'POST') {
    // Create a new Project
    const { name, description, ownerId } = req.body


    res.status(200).json({projects: []})
  } else {
    const projects = await prisma.project.findMany({include: {tasks: true}});

    res.status(200).json({ projects: projects})
  }

}