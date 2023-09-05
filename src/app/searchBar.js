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

async function getPodcastsByUrl(url) {
  const res = await fetch(`/api/getPodcastByUrl/${encodeURIComponent(url)}`)
  return [await res.json()]
}

const SearchBar = () => {
  const [loading, setLoading] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [isInputFeel, setIsInputFeel] = useState(false)

  async function search(term) {
    setIsInputFeel(term.length != 0)
    setLoading(true)
    if (term.match(URL_RE)) {
      const res = await getPodcastsByUrl(term)
      setSearchResults(res)
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
        className="search-bar europa-font h-[50px] w-[320px] rounded-[35px] border-[3px] px-5  sm:w-[500px] md:h-[50px] md:w-[60%]"
        type="search"
        onInput={debounce((e) => search(e.target.value), 1000)}
      />
      {loading ? (
        'loading'
      ) : (
        <Fragment>
          {!isInputFeel ? (
            ''
          ) : (
            <div className="list-wrapper relative mt-8  flex h-[240px] w-[320px] justify-between overflow-y-auto rounded-xl border-[3px] sm:w-[500px] md:w-[60%]">
              <ul className="flex w-[100%] flex-col p-2">
                {searchResults.map((e, i) => (
                  <Link key={i} href={`/podcast/${e.id}`}>
                    <li className="border-primary li-list-podcast mx-2 mt-2 flex items-center rounded-2xl border-[2px] bg-transparent p-4">
                      <div className="fill-circle"></div>
                      <img
                        src={e.img}
                        className="h-6 w-6 rounded-full md:h-11 md:w-11"
                      ></img>
                      <p className="europa-font color-primary md:text-md ml-6 w-[70%] overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                        {e.title}
                      </p>
                    </li>
                  </Link>
                ))}
              </ul>
              <div className="bg-primary  sticky  top-0 ml-[-10px] h-full w-[3px]"></div>
            </div>
          )}
        </Fragment>
      )}
    </>
  )
}
export default SearchBar
