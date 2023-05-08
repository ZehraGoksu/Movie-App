import React from 'react'
import{ API_KEY, BASE_URL } from '../../config'
import MovieCard from '../components/MovieCard'

//server side rendering yapısı içinde olmalı fetch işlemlerini
//kullanarak anasayfadan veri çekeriz
//ssr olduğu içn useEffect içinde veri çek state içinde taşı yapmıcaz

const Page = async ({searchParams}) => {
    
   const data = await fetch(`${BASE_URL}/${searchParams.category ? "movie/" + searchParams.category: "trending/all/day"}?api_key=${API_KEY}&language=en-US&page=1`, {next:{revalidate:1000}})
 
   const url = await data.json();
   console.log(url); 

  return (
    <div className='d-flex align-items-center '>
    {
      url.results?.map((result, index)=>(
        <MovieCard key={index} result={result}/> 
      ))
    }
    </div>
  )
}

export default Page
