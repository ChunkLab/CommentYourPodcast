import { NextResponse } from 'next/server'
import { prisma } from '@/app/db'

export async function POST(req) {
  const {author, comment, time, episodeId} = await req.json()
  const prisma_data = await prisma.comment.create({data: {
    author: author,
    content: comment,
    createdAt: time,
    episodeId: episodeId
  }})
  return NextResponse.json({ok: "cool"})
}
