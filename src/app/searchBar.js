'use client'
import debounce from 'lodash.debounce'
import Link from 'next/link'
import { Fragment, useState } from 'react'

const URL_RE = new RegExp(
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
)

async function getPodcasts(term) {
  const res = await fetch(`/api/searchPodcasts/${term}`)
  return await res.json()
}

const SearchBar = () => {
  const [loading, setLoading] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [isInputFeel, setIsInputFeel] = useState(false)

  async function search(term) {
    setIsInputFeel(term.length != 0)
    setLoading(true)
    if (term.match(URL_RE)) {
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
        placeholder="write podcast or url"
        className="search-bar md:w-[60%] md:h-[50px] w-[320px] h-[50px] rounded-[35px] md:border-[5px] border-[3px] px-5"
        type="search"
        onInput={debounce((e) => search(e.target.value), 1000)}
      />
      {loading ? (
        'loading'
      ) : <Fragment>
        {!isInputFeel ? '' : 
        <div className='md:w-[60%] w-[320px] relative border-[5px] list-wrapper mt-8 overflow-y-auto h-[240px] flex justify-between'>
          <ul className="flex flex-col p-2 w-[100%]">
            {searchResults.map((e, i) => (
              <Link key={i} href={`/podcast/${e.id}`}>
                <li className="p-4 mt-2 bg-transparent mx-2 rounded-2xl border-[4px] border-primary flex items-center">
                  <img src={e.img} className="w-11 h-11 rounded-full"></img>
                  <p className='ml-6 europa-font color-primary w-[70%] overflow-hidden whitespace-nowrap text-ellipsis'>{e.title}</p>
                </li>
              </Link>
            ))}
          </ul>
          <div className='h-full w-[4px] bg-primary sticky top-0 ml-[-10px]'></div>
        </div>
        }
      </Fragment>}
    </>
  )
}
export default SearchBar
