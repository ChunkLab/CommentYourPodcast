import { NextResponse } from 'next/server'
import { prisma } from '@/app/db'

import { XMLParser } from 'fast-xml-parser'

export async function GET(_, { params }) {
  const res = await fetch(params.url)
  const xml = await res.text()

  const parser = new XMLParser()
  let podcast_data = parser.parse(xml).rss.channel

  const podcast = await prisma.podcast.create({
    data: {
      title: podcast_data.title,
      description: podcast_data.description,
      img: podcast_data.image.url,
    },
  })

  const episodes = podcast_data.item.map((e) => ({
    title: e.title,
    description: e.description,
    img: '',
    duration: e['itunes:duration'],
    createdAt: Date.parse(e.pubDate) / 1000,
    podcastId: podcast.id,
  }))
  await prisma.episode.createMany({ data: episodes })

  return NextResponse.json(podcast)
}
