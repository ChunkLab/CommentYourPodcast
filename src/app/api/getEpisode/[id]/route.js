import { NextResponse } from 'next/server'
import { prisma } from '@/app/db'

export async function GET(_, { params }) {
  const data = await prisma.episode.findUnique({
    where: { id: parseInt(params.id) },
    include: { comments: true },
  })
  return NextResponse.json(data)
}
