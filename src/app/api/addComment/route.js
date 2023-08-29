import { NextResponse } from 'next/server'
import { prisma } from '@/app/db'

export async function POST(req) {
  const {author, content, createdAt, episodeId} = await req.json()
  const prisma_data = await prisma.comment.create({data: {
    author,
    content,
    createdAt,
    episodeId
  }})
  return NextResponse.json({ok: "cool"})
}
