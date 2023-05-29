"use client";

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import getSongDetails from "../../api/getSongDetails"
import Link from 'next/link';
import Loading from '@/components/loading';


const page = () => {
    const pathname = usePathname();
    const songKey = pathname.split('/')[2];
    const [details, setdetails] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const apiCall = async () => {
            const songDetail = await getSongDetails(songKey);
            songDetail ? setLoading(false) : null
            setdetails(songDetail);
        }
        apiCall();

    }, []);


    if (loading) {
        return (
            <div className="grid place-items-center h-screen">
                <Loading />
            </div>
        )
    }
    else {
        return (
            <div>
                {Object.keys(details).length > 1 ? <>

                    <div className='z-50 flex flex-col justify-between mx-6 mt-10' >
                        <div className=' flex justify-center  items-start gap-3'>
                            <img src={details.images.background} alt="" className='w-80 h-80' />
                            <div className='flex flex-col gap-4 '>
                                <span className='font-bold'>{details.type}</span>
                                <h1 className='text-6xl font-extrabold'>{details.title}</h1>
                                <p className='text-base font-light'>{details.share.text}</p>
                            </div>
                        </div>
                        <Link href={details.sections['2'].youtubeurl.actions['0'].uri}
                            className='flex justify-end' >
                            <span className=' border bg-white text-black p-1 rounded-md'>Watch Now</span>
                        </Link>
                    </div>
                </> : <></>}
            </div>
        )
    }


}

export default page;








