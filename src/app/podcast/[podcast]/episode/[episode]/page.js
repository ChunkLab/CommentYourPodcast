import Client from './client'

export default async function Home({ params }) {
    const res = await fetch(`http://localhost:3000/api/getEpisode/${params.id}`)
    const podcast_data = await res.json()
    return <Client episode_data={podcast_data}></Client>
}
