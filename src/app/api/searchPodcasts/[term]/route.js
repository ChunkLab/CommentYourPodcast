import { NextResponse } from 'next/server'
const PODCASTS = [
    {
        title: 'sup',
        img: 'https://w0.peakpx.com/wallpaper/150/856/HD-wallpaper-goku-dragon-ball-dragon-ball-super-dragon-ball-z-kid-goku.jpg',
    },
    {
        title: 'abc',
        img: 'https://w0.peakpx.com/wallpaper/150/856/HD-wallpaper-goku-dragon-ball-dragon-ball-super-dragon-ball-z-kid-goku.jpg',
    },
    {
        title: 'tws',
        img: 'https://w0.peakpx.com/wallpaper/150/856/HD-wallpaper-goku-dragon-ball-dragon-ball-super-dragon-ball-z-kid-goku.jpg',
    },
    {
        title: 'df',
        img: 'https://w0.peakpx.com/wallpaper/150/856/HD-wallpaper-goku-dragon-ball-dragon-ball-super-dragon-ball-z-kid-goku.jpg',
    },
    {
        title: 'gdfg',
        img: 'https://w0.peakpx.com/wallpaper/150/856/HD-wallpaper-goku-dragon-ball-dragon-ball-super-dragon-ball-z-kid-goku.jpg',
    },
]

export async function GET(_, { params }) {
    const res = PODCASTS.filter((e) => e.title.includes(params.term))
    return NextResponse.json(res)
}
