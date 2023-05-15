import style from '../../styles/MovieCard.module.scss'
import{ API_KEY, BASE_URL } from '../../../config'
import MovieCard from '../../components/MovieCard' 

//server side rendering yapısı içinde olmalı fetch işlemlerini
//kullanarak anasayfadan veri çekeriz
//ssr olduğu içn useEffect içinde veri çek state içinde taşı yapmıcaz

const Page = async ({searchParams}) => {
   
   const genres = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${searchParams.id}`); 

   const url = await genres.json(); 
    
    
  return (
    <div className='row mb-3 m-0'>  
       <h5 className={style.title} key={result.id}>{result}</h5> 
    {
      url.results?.map((result, index)=>(
        <MovieCard className="m-3" key={index} result={result}/>
      ))
    }
    </div>
  )
}

export default Page
