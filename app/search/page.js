"use client"

import { useState } from 'react'
import { AiOutlineSearch, AiFillPlayCircle } from "react-icons/ai";
import SearchTrack from "../api/search";
import Link from 'next/link';
import Loading from "../../components/loading"


const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)
  const submiteHandler = async (e) => {
    e.preventDefault();
    setLoading(true)
    const res = await SearchTrack(query);
    result ? setLoading(false) : null
    setResult(res)
  }


  if (loading) {
    return (
      <div className="grid place-items-center h-screen">
        <Loading />
      </div>
    )
  } else {



    return (
      <div >
        <div className='items-center flex justify-center bg-slate-800 text-black py-3'>
          <form onSubmit={submiteHandler}>
            <input value={query} type="text" className='px-3 py-2 focus:outline-none rounded-l-lg placeholder:text-xs'
              required onChange={(e) => setQuery(e.target.value)}
              placeholder='Search Track or Artist'
            />
          </form>
          <div className='bg-white px-1 border shadow-xl py-3 rounded-r-lg'>
            <AiOutlineSearch className=' text-lg '></AiOutlineSearch>
          </div>
        </div>
        {
          Object.keys(result).length > 1 ?
            <>
              <div className=' m-3'>
                <div className='bg-gradient-to-r from-neutral-600 to-slate-800 rounded-lg p-2 grid sm:grid-cols-2 justify-items-center sm:justify-items-stretch'>
                  <div className='grid  gap-3 bg-slate-700 max-w-[260px] p-1 shadow-2xl rounded-xl justify-items-center'>
                    <h1 className='text-5xl'>Top Result</h1>
                    <img src={result.tracks.hits['0'].track.images.background} alt="Not Found" className='h-40 w-40' />
                    <div>
                      <h2>{result.tracks.hits['0'].track.title}</h2>
                      <span>By {result.tracks.hits['0'].track.subtitle}</span>
                    </div>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <h2 className='text-2xl'>Songs</h2>
                    {
                      result.tracks.hits.map((track) => (
                        <div key={track.track.key} className='flex justify-between bg-slate-800 p-1 items-center rounded gap-14'>
                          <img src={track.track.images.background} className='rounded-full h-8 w-8' alt="" />
                          <div>
                            <h2 className='text-sm'>{track.track.title}</h2>
                            <span className='text-xs'>{track.track.subtitle}</span>
                          </div>
                          <Link href={track.track.url}>
                            <AiFillPlayCircle></AiFillPlayCircle>
                          </Link>
                        </div>
                      ))
                    }
                  </div>

                </div>
              </div>
              <div className='mx-4'>
                <h1 className='text-5xl'>Top Artist</h1>
                <div className='grid  justify-items-center sm:justify-self-auto grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 pt-3 gap-y-3 '>
                  {
                    result.artists.hits.map((artist) => (
                      <div key={artist.artist.adamid} className='cursor-pointer'>
                        <img src={artist.artist.avatar} className=' h-40 w-40' alt="" />

                      </div>
                    ))
                  }
                </div>


              </div>
            </>
            : <></>
        }
      </div>
    )
  }
}

export default SearchPage