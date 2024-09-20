import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma'

type ResponseData = {
  data: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  const users = await prisma.user.findMany();

  res.status(200).json({ data: users})
}