"use client"

import { useEffect, useState } from "react";
import MovieCard from "../components/movieCard";
import getTrackList from "./api/getChart";
import Loading from "@/components/loading";

const HomePage = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchMyTrack() {
      setLoading(true);
      const result = await getTrackList();
      result ? setLoading(false) : null
      setTracks(result.tracks)
    }
    fetchMyTrack();
  }, []);

  // console.log(tracks)
  if(loading){
    return (
      <div className="grid place-items-center h-screen">
        <Loading/>
      </div>
    )
  }
  else{
    return (
      <div className="bg-gradient-to-br from-slate-600 to-slate-800 my-2 mx-3 p-2 rounded-sm flex flex-col gap-9">
        <div>
          <h1 className="text-4xl font-mono font-semibold pb-3">Welcome To Music World,</h1>
          <span className="font-serif font-bold text-3xl leading-0.5">Our Top Tracks</span>
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-5 justify-items-center ">
          {
            tracks ? tracks.map((track) => (
              <MovieCard key={track.key} track={track} />
            )) : (<></>)
          }
        </div>
  
  
      </div>
    )
  }


}

export default HomePage;
