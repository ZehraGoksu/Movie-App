import React from 'react'
import Image from 'next/image'
import style from '../../../styles/Details.module.scss'
import{ API_KEY, BASE_URL, IMAGE_BASE_URL } from '../../../../config'

const getMovie = async(id)=>{
  const url = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
  return await url.json();
}

const Page = async({params}) => {
    const id = params.id;
    const movie = await getMovie(id);

    console.log(movie);
    
  return (
    <div className='d-flex flex-column'>
    <div className={style.main}>
     <Image src={`${IMAGE_BASE_URL}${movie?.backdrop_path || movie?.poster_path}`}
       className={style.bgImage}
       alt='Movie Photo' fill />
     </div>
     <div className={style.infoDiv}>  
        <p className={style.title}>{movie?.title || movie?.name}</p> 
     </div>
     
     <div className='p-5'>
        <h1>{movie?.title || movie?.name}</h1> 
        <p className={style.date}>{movie?.release_date}</p>
        <p className={style.overview}>{movie?.overview}</p>
        <h4 className='pt-4'>Categories : </h4>  
        <div className='d-flex gap-2'> 
        {movie?.genres.map((genre)=>(
           
        <p  key={genre.id}>{genre.name}</p> 

        ))}</div>
        <h4>Original Language : </h4>
        
        <p className="text-uppercase">{movie?.original_language}</p>

     </div>
   </div>
  )
}

export default Page
