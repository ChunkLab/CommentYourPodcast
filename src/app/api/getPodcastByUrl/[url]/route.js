import { NextResponse } from 'next/server'
import { prisma } from '@/app/db'

import { XMLParser } from 'fast-xml-parser'

function parseTimeToSeconds(timeString) {
  try {
    return parseInt(timeString)
  } catch (err) {
    const [hours, minutes] = timeString.split(':').map(Number)
    const totalSeconds = (hours * 60 + minutes) * 60
    return totalSeconds

  }
}

export async function GET(_, { params }) {
  const podcastData = await prisma.podcast.findUnique({
    where: {
      url: params.url,
    },
  })

  if (podcastData) {
    return NextResponse.json(podcastData)
  }

  const res = await fetch(params.url)
  const xml = await res.text()

  const parser = new XMLParser()
  let podcast_data = parser.parse(xml).rss.channel

  const podcast = await prisma.podcast.create({
    data: {
      title: podcast_data.title,
      description: podcast_data.description,
      img: podcast_data.image.url,
      url: params.url,
    },
  })

  const episodes = podcast_data.item.map((e) => ({
    title: e.title,
    description: e.description,
    img: '',
    duration: parseTimeToSeconds(e['itunes:duration']),
    createdAt: Date.parse(e.pubDate) / 1000,
    podcastId: podcast.id,
  }))
  await prisma.episode.createMany({ data: episodes })

  return NextResponse.json(podcast)
}
