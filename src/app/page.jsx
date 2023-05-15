import React from 'react'
import{ API_KEY, BASE_URL } from '../../config'
import MovieCard from '../components/MovieCard' 
import style from "../styles/MovieCard.module.scss"; 

const Page = async ({searchParams}) => {
    
   const data = await fetch(`${BASE_URL}/${searchParams.category ? "movie/" + searchParams.category: "trending/all/day"}?api_key=${API_KEY}&language=en-US&page=1`, {next:{revalidate:1000}})
 
   const url = await data.json(); 

  return (
    <div className='row mb-3 m-0'>
      <h5 className={style.title}>{searchParams.category}</h5>
    {
      
      url.results?.map((result, index)=>(
        <MovieCard className="m-3" key={index} result={result}/> 
      ))
    }
    </div>
  )
}

export default Page
