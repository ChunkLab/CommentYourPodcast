import { NextResponse } from 'next/server'
import { prisma } from '@/app/db'

import { getPodcastFromURL } from '@podverse/podcast-feed-parser'

export async function GET(_, { params }) {
  const podcastDataDb = await prisma.podcast.findUnique({
    where: {
      url: params.url,
    },
  })

  if (podcastDataDb) {
    return NextResponse.json(podcastDataDb)
  }

  const podcastData = await getPodcastFromURL({ url: params.url })

  try {
    const podcast = await prisma.podcast.create({
      data: {
        title: podcastData.meta.title || 'no title',
        description: podcastData.meta.description || 'no description',
        img: podcastData.meta.imageURL,
        url: params.url,
      },
    })

    const episodes = podcastData.episodes.map((e) => ({
      title: e.title || 'no title',
      description: e.description || 'no description',
      img: e.img || e.imageURL || podcastData.meta.imageURL,
      duration: parseInt(e.duration) || 0,
      createdAt: new Date(e.pubDate).getTime() / 1000,
      podcastId: podcast.id,
      audioUrl: e.enclosure.url,
    }))
    await prisma.episode.createMany({ data: episodes })

    return NextResponse.json(podcast)
  } catch (e) {
    return NextResponse.json({ err: e })
  }
}
