import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai"
const Navbar = () => {
    return (
        <div className='bg-slate-800 flex  justify-between px-6 sm:px-16 py-3 gap-3'>
            <Link className="flex justify-center gap-3 items-center cursor-pointer" href="/">
                <Image
                    src="/icon-a.png"
                    alt="hh"
                    width={30}
                    height={30}
                />
                <span className="font-bold text-white">Music World</span>

            </Link>
            <Link href="/search" className="items-center flex justify-center text-black">
                {/* <span className=" rounded-l-full  px-3 py-1  bg-slate-300 ">Search</span> */}
                <span className="rounded-full border  bg-slate-300 px-2 py-2"><AiOutlineSearch /></span>
            </Link>
        </div>
    )
}

export default Navbar;