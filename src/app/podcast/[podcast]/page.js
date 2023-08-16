import Link from 'next/link'

const podcast_data = {
    title: 'yoyoy',
    description: 'fdsd df sdfd f dsfd fdf dfdf dfdfdfsdf dfsdf dfffsdfd',
    img: 'https://w0.peakpx.com/wallpaper/150/856/HD-wallpaper-goku-dragon-ball-dragon-ball-super-dragon-ball-z-kid-goku.jpg',
    episodes: [
        {
            title: 'yoyoy',
            description:
                'fdsd df sdfd f dsfd fdf dfdf dfdfdfsdf dfsdf dfffsdfd',
            duration: 10,
            nbComments: 13,
            createdAt: 0,
        },
        {
            title: 'yoyoy',
            description:
                'fdsd df sdfd f dsfd fdf dfdf dfdfdfsdf dfsdf dfffsdfd',
            duration: 10,
            nbComments: 2,
            createdAt: 0,
        },
        {
            title: 'yoyoy',
            description:
                'fdsd df sdfd f dsfd fdf dfdf dfdfdfsdf dfsdf dfffsdfd',
            duration: 10,
            nbComments: 3,
            createdAt: 0,
        },
        {
            title: 'yoyoy',
            description:
                'fdsd df sdfd f dsfd fdf dfdf dfdfdfsdf dfsdf dfffsdfd',
            duration: 10,
            nbComments: 23,
            createdAt: 0,
        },
        {
            title: 'yoyoy',
            description:
                'fdsd df sdfd f dsfd fdf dfdf dfdfdfsdf dfsdf dfffsdfd',
            duration: 10,
            nbComments: 23,
            createdAt: 0,
        },
        {
            title: 'yoyoy',
            description:
                'fdsd df sdfd f dsfd fdf dfdf dfdfdfsdf dfsdf dfffsdfd',
            duration: 10,
            nbComments: 3,
            createdAt: 0,
        },
    ],
    nbComments: 23,
}

export default function Home({ params }) {
    console.log(params.podcast)
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div className="w-full max-w-lg py-8 flex flex-row items-center justify-center mx-auto bg-[#FFFBFB] rounded-lg shadow-xl">
                <div className="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
                    <div className="w-full md:w-2/5 flex flex-col items-center justify-center">
                        <figure className="w-1/2 md:w-full  rounded-full overflow-hidden">
                            <img
                                src={podcast_data.img}
                                alt={podcast_data.title}
                            />
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
                {podcast_data.episodes.map((e, i) => (
                    <Link
                        key={i}
                        href={`/podcast/${params.podcast}/episode/${e.title}`}
                    >
                        <li>
                            <div className="w-full max-w-lg py-8 flex flex-row items-center justify-center bg-[#FFFBFB] rounded-lg shadow-xl mt-10">
                                <div className="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
                                    <div className="w-20 flex flex-col items-center justify-center">
                                        <figure className=" rounded-full overflow-hidden">
                                            <img
                                                src={podcast_data.img}
                                                alt={podcast_data.title}
                                            />
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
                                                <strong className="text-gray-900">
                                                    {e.duration}
                                                </strong>{' '}
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
