'use client'

import { useRef, useState } from 'react'

export default function Client({ episode_data }) {
  const [episodeData, setEpisodeData] = useState(episode_data)
  const authorInputRef = useRef()
  const contentInputRef = useRef()

  function addComment(comment) {
    setEpisodeData({
      ...episodeData,
      comments: [...episodeData.comments, comment],
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-lg py-8 flex flex-row items-center justify-center mx-auto bg-[#FFFBFB] rounded-lg shadow-xl">
        <div className="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
          <div className="w-full md:w-2/5 flex flex-col items-center justify-center">
            <figure className="w-1/2 md:w-full  rounded-full overflow-hidden">
              <img src={episodeData.img} alt={episodeData.title} />
            </figure>
          </div>
          <div className="w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center">
              <h1 className="text-center md:text-left text-2xl font-bold text-gray-900">
                {episodeData.title}
              </h1>
              <p className="inline text-gray-700 font-normal leading-6 w-full text-base">
                {episodeData.description}
              </p>
            </div>

            <ul className="space-x-4 flex flex-row justify-center w-full mb-4">
              <li className="text-sm text-gray-800">
                <strong className="text-gray-900">
                  {episodeData.comments.length}
                </strong>{' '}
                Comments
              </li>
              <li className="text-sm text-gray-800">
                <strong className="text-gray-900">
                  {episodeData.duration}
                </strong>{' '}
                Duration
              </li>
            </ul>
          </div>
        </div>
      </div>
      <input
        ref={authorInputRef}
        placeholder="author.."
        className="py-3 px-4 w-1/4 mt-10 rounded shadow font-thin focus:outline-none focus:shadow-lg focus:shadow-slate-200 duration-100 shadow-gray-100"
        type="text"
      />
      <textarea
        ref={contentInputRef}
        placeholder="comment.."
        className="py-3 px-4 w-1/3 mt-3 rounded shadow font-thin focus:outline-none focus:shadow-lg focus:shadow-slate-200 duration-100 shadow-gray-100"
        type="text"
      />
      <button
        onClick={() => {
          addComment({
            author: authorInputRef.current.value,
            content: contentInputRef.current.value,
            createdAt: new Date().getTime(),
          })
        }}
        className="transition-colors mt-3 bg-purple-700 hover:bg-purple-800 p-2 rounded-sm w-1/5 text-white text-hover shadow-md shadow-purple-900"
      >
        Follow
      </button>
      <ul>
        {episodeData.comments
          .sort((e) => e.createdAt)
          .reverse()
          .map((e, i) => (
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
                          {new Date(e.createdAt).toString()}
                        </strong>
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
