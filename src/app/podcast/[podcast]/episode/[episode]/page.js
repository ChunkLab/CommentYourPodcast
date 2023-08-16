const episode_data = {
    title: 'yoyoy',
    description: 'fdsd df sdfd f dsfd fdf dfdf dfdfdfsdf dfsdf dfffsdfd',
    img: 'https://w0.peakpx.com/wallpaper/150/856/HD-wallpaper-goku-dragon-ball-dragon-ball-super-dragon-ball-z-kid-goku.jpg',
    duration: 12,
    createdAt: 0,
    comments: [
        {
            author: 'yoyoy',
            content: 'fdsd df sdfd f dsfd fdf dfdf dfdfdfsdf dfsdf dfffsdfd',
            createdAt: 0,
        },
        {
            author: 'yoyoy',
            content: 'fdsd df sdfd f dsfd fdf dfdf dfdfdfsdf dfsdf dfffsdfd',
            createdAt: 0,
        },
        {
            author: 'yoyoy',
            content: 'fdsd df sdfd f dsfd fdf dfdf dfdfdfsdf dfsdf dfffsdfd',
            createdAt: 0,
        },
        {
            author: 'yoyoy',
            content: 'fdsd df sdfd f dsfd fdf dfdf dfdfdfsdf dfsdf dfffsdfd',
            createdAt: 0,
        },
        {
            author: 'yoyoy',
            content: 'fdsd df sdfd f dsfd fdf dfdf dfdfdfsdf dfsdf dfffsdfd',
            createdAt: 0,
        },
    ],
}

export default function Home({ params }) {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div className="w-full max-w-lg py-8 flex flex-row items-center justify-center mx-auto bg-[#FFFBFB] rounded-lg shadow-xl">
                <div className="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
                    <div className="w-full md:w-2/5 flex flex-col items-center justify-center">
                        <figure className="w-1/2 md:w-full  rounded-full overflow-hidden">
                            <img
                                src={episode_data.img}
                                alt={episode_data.title}
                            />
                        </figure>
                    </div>
                    <div className="w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-center">
                            <h1 className="text-center md:text-left text-2xl font-bold text-gray-900">
                                {episode_data.title}
                            </h1>
                            <p className="inline text-gray-700 font-normal leading-6 w-full text-base">
                                {episode_data.description}
                            </p>
                        </div>

                        <ul className="space-x-4 flex flex-row justify-center w-full mb-4">
                            <li className="text-sm text-gray-800">
                                <strong className="text-gray-900">
                                    {episode_data.comments.length}
                                </strong>{' '}
                                Comments
                            </li>
                            <li className="text-sm text-gray-800">
                                <strong className="text-gray-900">
                                    {episode_data.duration}
                                </strong>{' '}
                                Duration
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul>
                {episode_data.comments.map((e, i) => (
                    <li key={i}>
                        <div className="w-full max-w-lg py-8 flex flex-row items-center justify-center bg-[#FFFBFB] rounded-lg shadow-xl mt-10">
                            <div className="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
                                <div className="w-full md:w-3/5 flex flex-col justify-center items-center">
                                    <div className="flex flex-col justify-center">
                                        <h2 className="text-center md:text-left text-xl font-bold text-gray-900">
                                            {e.author}
                                        </h2>
                                        <p className="inline text-gray-700 font-normal leading-6 w-full text-base">
                                            {e.content}
                                        </p>
                                    </div>

                                    <ul className="space-x-4 flex flex-row justify-center w-full mb-4">
                                        <li className="text-sm text-gray-800">
                                            <strong className="text-gray-900">
                                                {e.createdAt}
                                            </strong>{' '}
                                            Creation
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}
