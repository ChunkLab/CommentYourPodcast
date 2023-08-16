'use client'
import debounce from 'lodash.debounce'
import Link from 'next/link'
import { useState } from 'react'

async function wait(n) {
    return new Promise((res, _) => {
        setTimeout(() => {
            res()
        }, n)
    })
}
const URL_RE = new RegExp(
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
)

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

async function getPodcasts(term) {
    await wait(500)

    return PODCASTS.filter((e) => e.title.includes(term))
}

const SearchBar = () => {
    const [loading, setLoading] = useState(false)
    const [searchResults, setSearchResults] = useState([])

    async function search(term) {
        setLoading(true)
        if (term.match(URL_RE)) {
            //fake requete
            await wait(1000)
            setSearchResults([
                {
                    title: 'sup',
                    img: 'https://w0.peakpx.com/wallpaper/150/856/HD-wallpaper-goku-dragon-ball-dragon-ball-super-dragon-ball-z-kid-goku.jpg',
                },
            ])
        } else {
            const res = await getPodcasts(term)
            setSearchResults(res)
        }
        setLoading(false)
    }

    return (
        <>
            <input
                placeholder="Search Here..."
                className="py-3 px-4 w-1/2 rounded shadow font-thin focus:outline-none focus:shadow-lg focus:shadow-slate-200 duration-100 shadow-gray-100"
                type="search"
                onInput={debounce((e) => search(e.target.value), 1000)}
            />
            {loading ? (
                'loading'
            ) : (
                <ul className="w-1/2">
                    {searchResults.map((e, i) => (
                        <Link key={i} href={`/podcast/${e.title}`}>
                            <li className="text-gray-700 p-4 mt-2 bg-white mx-2">
                                <img src={e.img} className="w-11 h-11"></img>
                                {e.title}
                            </li>
                        </Link>
                    ))}
                </ul>
            )}
        </>
    )
}
export default SearchBar
