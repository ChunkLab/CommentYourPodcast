import { NextResponse } from 'next/server'
import { prisma } from '@/app/db'

export async function GET(_, { params }) {
  const res = await prisma.podcast.findMany({
    take: 15,
    where: { title: { contains: params.term } },
  })
  return NextResponse.json(res)
}
