import { NextResponse } from 'next/server'

import { prisma } from '@/app/db'

export async function GET(_, { params }) {
  const podcast = await prisma.podcast.findUnique({
    where: { id: parseInt(params.id) },
    include: { episodes: true },
  })
  return NextResponse.json(podcast)
}
