import prisma from "@/lib/prisma";
import { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  const { id } = req.query;

  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      projects: true
    }
  })

  res.status(200).json({data: user})
}