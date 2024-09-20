import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma'

type ResponseData = {
  data: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  if (req.method === "POST") {
    // Create a new user
    const { email, name } = req.body;

    const user = await prisma.user.create({
      data: {
        email: email,
        name: name,
      }
    })

    res.status(200).json({data: user});
  } else {
    const users = await prisma.user.findMany();
    res.status(200).json({ data: users})
  }


}