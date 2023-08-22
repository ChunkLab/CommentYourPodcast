import { NextResponse } from 'next/server'
const EPISODE_DATA = {
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

export async function GET(_, { params }) {
    return NextResponse.json(EPISODE_DATA)
}
