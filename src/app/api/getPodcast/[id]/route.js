import { NextResponse } from 'next/server'

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

export async function GET(_, { params }) {
    return NextResponse.json(podcast_data)
}
