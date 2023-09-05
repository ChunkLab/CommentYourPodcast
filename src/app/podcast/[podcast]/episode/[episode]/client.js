'use client'

import { durationSecToString } from '@/app/utils'
import { useRef, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'

export default function Client({ episode_data }) {
  const [episodeData, setEpisodeData] = useState(episode_data)
  const authorInputRef = useRef()
  const contentInputRef = useRef()

  async function addComment(comment) {
    setEpisodeData({
      ...episodeData,
      comments: [...episodeData.comments, comment],
    })
    await fetch('/api/addComment', {
      method: 'POST',
      body: JSON.stringify(comment),
    })
  }

  function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000)

    var interval = seconds / 31536000

    if (interval > 1) {
      return Math.floor(interval) + ' years'
    }
    interval = seconds / 2592000
    if (interval > 1) {
      return Math.floor(interval) + ' months'
    }
    interval = seconds / 86400
    if (interval > 1) {
      return Math.floor(interval) + ' days'
    }
    interval = seconds / 3600
    if (interval > 1) {
      return Math.floor(interval) + ' hours'
    }
    interval = seconds / 60
    if (interval > 1) {
      return Math.floor(interval) + ' minutes'
    }
    return Math.floor(seconds) + ' seconds'
  }

  return (
    <main className="flex flex-col items-center">
      <div className="circle circle-orange"></div>
      <div className="circle circle-blue"></div>
      <div className="z-10 mx-auto mt-20 flex w-[300px] flex-row items-center justify-center rounded-lg bg-[#FFFBFB] p-8 shadow-xl md:w-[600px]">
        <div className="flex flex-col items-center lg:flex-row">
          <div className=" flex  flex-col items-center justify-center space-y-4">
            <div className="flex w-[300px] flex-col justify-center md:w-[600px]">
              <h1 className="europa-font mb-5 text-center text-2xl font-bold text-gray-900">
                {episodeData.title}
              </h1>
              <p
                dangerouslySetInnerHTML={{ __html: episodeData.description }}
                className="md:text-md inline w-full p-4  text-sm font-normal leading-6 text-gray-700"
              ></p>
            </div>
            <ReactAudioPlayer
              src={episodeData.audioUrl}
              controls
            ></ReactAudioPlayer>
            <ul className="mb-4 flex w-full flex-col justify-center md:flex-row md:space-x-4">
              <li className="text-sm text-gray-800">
                <strong className="text-gray-900">
                  {episodeData.comments.length + ' Coments'}
                </strong>
              </li>
              <li className="text-sm text-gray-800">
                <strong className="text-gray-900">
                  {'Duration : ' + durationSecToString(episodeData.duration)}
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="z-10 mt-10 flex w-[300px] flex-row items-center justify-center rounded-lg bg-[#FFFBFB] shadow-xl lg:w-[600px]">
        <div className="w-full p-5">
          <div className="flex flex-col items-center justify-center">
            <div className="flex w-full flex-col justify-center ">
              <div className="flex flex-wrap items-center justify-between">
                <h2 className="text-left font-bold text-gray-900 ">@</h2>
                <input
                  ref={authorInputRef}
                  placeholder="choose author name"
                  className="z-10 mb-1 h-[30px] w-[90%] rounded bg-[#FFFBFB] px-4 focus:outline-none lg:w-[95%]"
                  type="text"
                />
              </div>
              <div className="mb-3 h-[1px] w-full bg-black"></div>
              <textarea
                ref={contentInputRef}
                placeholder="add comment..."
                className="z-10 h-24 w-full rounded bg-[#FFFBFB] px-4 py-3  focus:outline-none"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => {
          addComment({
            author: authorInputRef.current.value,
            content: contentInputRef.current.value,
            createdAt: new Date().getTime() / 1000,
            episodeId: episodeData.id,
          })
          authorInputRef.current.value = ''
          contentInputRef.current.value = ''
        }}
        className="border-primary button europa-font text-hover relative z-10  mb-10 mt-10 w-[200px] cursor-pointer rounded-2xl border-[3px]  p-2 text-center text-white shadow-md shadow-slate-400 transition-colors lg:w-1/5"
      >
        <div className="fill-circle"></div>
        <p className="color-primary">Comment</p>
      </div>

      <ul className="z-10 w-[300px] lg:w-[600px]">
        {episodeData.comments
          .sort((e) => e.createdAt)
          .reverse()
          .map((e, i) => (
            <li key={i}>
              <div className="mb-10  flex w-full flex-row items-center justify-center rounded-lg bg-[#FFFBFB] shadow-xl">
                <div className="w-full p-5">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex w-full flex-col justify-center ">
                      <div className="flex flex-wrap justify-between">
                        <h2 className="europa-font mb-5 text-left text-gray-900">
                          {'@ ' + e.author}
                        </h2>
                        <p> {timeSince(e.createdAt * 1000)}</p>
                      </div>
                      <div className="mb-3 h-[1px] w-full bg-black"></div>
                      <p className="europa-font inline w-full text-base font-normal leading-6 text-gray-700">
                        {e.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </main>
  )
}
