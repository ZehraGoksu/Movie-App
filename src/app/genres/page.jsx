import React from 'react'
import{ API_KEY, BASE_URL } from '../../../config'
import MovieCard from '../../components/MovieCard'

//server side rendering yapısı içinde olmalı fetch işlemlerini
//kullanarak anasayfadan veri çekeriz
//ssr olduğu içn useEffect içinde veri çek state içinde taşı yapmıcaz

const Page = async ({searchParams}) => {
   
   const genres = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${searchParams.id}`); 

   const url = await genres.json(); 

   console.log(url); 

    
  return (
    <div className='d-flex align-items-center flex-wrap gap-3'>
    {
      url.results?.map((result, index)=>(
        <MovieCard key={index} result={result}/>
      ))
    }
    </div>
  )
}

export default Page
