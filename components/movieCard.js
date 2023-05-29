import Image from "next/image"
import Link from "next/link"

const MovieCard = ({ track }) => {

    return (
        <Link className="bg-slate-700 shadow-slate-900 p-2 flex flex-col gap-2 w-[200px]  rounded-lg shadow-2xl ml-2 "
            href={`/songDetails/${track.key}`}
        >
            <img src={track.images.coverart} alt="" />
            <div className="px-2">
                <h2 className="text-white text-2xl font-semibold font-sans overflow-hidden block">{track.title.split("(")[0]}</h2>
                <span className="font-normal cursor-pointer text-sm leading-7 hover:underline text-slate-200">By {track.artists[0].alias}</span>
            </div>
        </Link>
    )
}

export default MovieCard