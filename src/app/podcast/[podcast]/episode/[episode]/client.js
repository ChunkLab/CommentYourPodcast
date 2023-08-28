'use client'

import { durationSecToString } from '@/app/utils'
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

  function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

  return (
    <main className="flex-col items-center flex">
      <div className='circle circle-orange'></div>
      <div className='circle circle-blue'></div>
      <div className="w-[300px] md:w-[600px] mt-20 p-8 flex flex-row items-center justify-center mx-auto bg-[#FFFBFB] rounded-lg shadow-xl z-10">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="lg:w-2/5 flex flex-col items-center justify-center ">
            <figure className="w-full   overflow-hidden">
              <img src={episodeData.img} alt={episodeData.title} className='rounded-full w-40 h-40' />
            </figure>
          </div>
          <div className="lg:w-3/5 space-y-4 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center">
              <h1 className="text-center europa-font text-2xl font-bold text-gray-900 mb-5">
                {episodeData.title}
              </h1>
              <p className="inline text-gray-700 font-normal leading-6 w-full text-base">
                {episodeData.description}
              </p>
            </div>

            <ul className="md:space-x-4 flex flex-col md:flex-row justify-center w-full mb-4">
              <li className="text-sm text-gray-800">
                <strong className="text-gray-900">
                  {episodeData.comments.length + " Coments"}
                </strong>
              </li>
              <li className="text-sm text-gray-800">
                <strong className="text-gray-900">
                  {"Duration : " + durationSecToString(episodeData.duration)}
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="z-10 w-[300px] lg:w-[600px] flex flex-row items-center justify-center bg-[#FFFBFB] rounded-lg shadow-xl mt-10">
        <div className="p-5 w-full">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center w-full ">
              <div className='flex flex-wrap justify-between items-center'>
                <h2 className="text-left font-bold text-gray-900 ">
                  @
                </h2>
                <input
                  ref={authorInputRef}
                  placeholder="choose author name"
                  className="z-10 mb-1 bg-[#FFFBFB] px-4 w-[90%] lg:w-[95%] h-[30px] rounded focus:outline-none"
                  type="text"
                />
              </div>
              <div className='h-[1px] w-full bg-black mb-3'></div>
              <textarea
                ref={contentInputRef}
                placeholder="add comment..."
                className="z-10 py-3 px-4 bg-[#FFFBFB] w-full h-24 rounded  focus:outline-none"
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
          })
          authorInputRef.current.value = ""
          contentInputRef.current.value = ""
        }}
        className='relative mt-10 cursor-pointer rounded-2xl text-center  border-primary border-[3px] button w-[200px] z-10 transition-colors  europa-font p-2 lg:w-1/5 text-white text-hover shadow-md shadow-slate-400'>
        <div className='fill-circle'></div>
        <p className="color-primary">Comment</p>
      </div>
      
      <ul className='z-10 w-[300px] lg:w-[600px]'>
        {episodeData.comments
          .sort((e) => e.createdAt)
          .reverse()
          .map((e, i) => (
            <li key={i}>
              <div className="w-full  flex flex-row items-center justify-center bg-[#FFFBFB] rounded-lg shadow-xl mt-10">
                <div className="p-5 w-full">
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center w-full ">
                      <div className='flex flex-wrap justify-between'>
                        <h2 className="text-left europa-font text-gray-900 mb-5">
                          {"@ " + e.author}
                        </h2>
                        <p> { timeSince(e.createdAt * 1000)}</p>
                      </div>
                      <div className='h-[1px] w-full bg-black mb-3'></div>
                      <p className="inline europa-font text-gray-700 font-normal leading-6 w-full text-base">
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
