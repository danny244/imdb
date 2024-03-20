import Image from "next/image";
import Link from "next/link";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

export default function Card({ result }) {
     return (
          <div className="grid group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg transition-all duration-300 sm:border sm:border-slate-400 sm:m-2">
               <Link href={`/movie/${result?.id}`}>
                    <Image
                         src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                         width={500}
                         height={300}
                         alt="image"
                         className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
                    />
                    <div className="p-2">
                         <p className="line-clamp-2 text-md">
                              {result?.overview}
                         </p>
                         <h2 className="text-lg font-bold truncate">
                              {result?.title || result?.name}
                         </h2>
                         <p className="flex items-center">
                              {result?.realease_date || result?.first_ait_date}
                              <BsFillHandThumbsUpFill className="h-5 mr-1 ml-1" />
                              {result?.vote_count}
                         </p>
                    </div>
               </Link>
          </div>
     )
}
