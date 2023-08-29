import Client from './client'
import { headers } from 'next/headers'

export default async function Home({ params }) {
  const host = headers().get('host')
  const res = await fetch(`http://${host}/api/getEpisode/${params.episode}`, {
    cache: 'no-store',
  })
  const podcast_data = await res.json()
  return <Client episode_data={podcast_data}></Client>
}
