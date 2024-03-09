import Image from "next/image"

const About = async ({ params }) => {

     const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}`)
     const data = await res.json()

     return (
          <div className="w-full">
               <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
                    <Image
                         src={`https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path}`}
                         width={500}
                         height={300}
                         alt="image"
                         className="rounded-lg"
                    />
                    <div className="p-2">
                         <h2 className="text-lg mb-3 font-bold">
                              {data.title || data.name}
                         </h2>
                         <p className="text-lg">
                              {data.overview}
                         </p>
                         <p>{data.release_date || data.first_air_date}</p>
                         <p>
                              {data.vote_count}
                         </p>
                    </div>
               </div>
          </div>
     )
}

export default About
