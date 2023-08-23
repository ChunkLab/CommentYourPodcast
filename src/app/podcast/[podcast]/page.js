import Link from 'next/link'
import { headers } from "next/headers";

export default async function Home({ params }) {
  const host = headers().get("host");
  const res = await fetch(
    `http://${host}/api/getPodcast/${params.podcast}`,
    { cache: 'no-store' }
  )
  const podcast_data = await res.json()

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-lg py-8 flex flex-row items-center justify-center mx-auto bg-[#FFFBFB] rounded-lg shadow-xl">
        <div className="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
          <div className="w-full md:w-2/5 flex flex-col items-center justify-center">
            <figure className="w-1/2 md:w-full  rounded-full overflow-hidden">
              <img src={podcast_data.img} alt={podcast_data.title} />
            </figure>
          </div>
          <div className="w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center">
              <h1 className="text-center md:text-left text-2xl font-bold text-gray-900">
                {podcast_data.title}
              </h1>
              <p className="inline text-gray-700 font-normal leading-6 w-full text-base">
                {podcast_data.description}
              </p>
            </div>

            <ul className="space-x-4 flex flex-row justify-center w-full mb-4">
              <li className="text-sm text-gray-800">
                <strong className="text-gray-900">
                  {podcast_data.nbComments}
                </strong>{' '}
                Comments
              </li>
              <li className="text-sm text-gray-800">
                <strong className="text-gray-900">
                  {podcast_data.episodes.length}
                </strong>{' '}
                Episodes
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul>
        {podcast_data.episodes?.map((e, i) => (
          <Link key={i} href={`/podcast/${params.podcast}/episode/${e.id}`}>
            <li>
              <div className="w-full max-w-lg py-8 flex flex-row items-center justify-center bg-[#FFFBFB] rounded-lg shadow-xl mt-10">
                <div className="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
                  <div className="w-20 flex flex-col items-center justify-center">
                    <figure className=" rounded-full overflow-hidden">
                      <img src={podcast_data.img} alt={podcast_data.title} />
                    </figure>
                  </div>
                  <div className="w-full md:w-3/5 flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center">
                      <h2 className="text-center md:text-left text-xl font-bold text-gray-900">
                        {e.title}
                      </h2>
                      <p className="inline text-gray-700 font-normal leading-6 w-full text-base">
                        {e.description}
                      </p>
                    </div>

                    <ul className="space-x-4 flex flex-row justify-center w-full mb-4">
                      <li className="text-sm text-gray-800">
                        <strong className="text-gray-900">
                          {e.nbComments}
                        </strong>{' '}
                        Comments
                      </li>
                      <li className="text-sm text-gray-800">
                        <strong className="text-gray-900">{e.duration}</strong>{' '}
                        Duration
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </main>
  )
}
