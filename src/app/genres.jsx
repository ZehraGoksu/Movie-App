import React from 'react'
import{ API_KEY, BASE_URL } from '../../config' 
import Categories from '@/components/Categories';

//server side rendering yapısı içinde olmalı fetch işlemlerini
//kullanarak anasayfadan veri çekeriz
//ssr olduğu içn useEffect içinde veri çek state içinde taşı yapmıcaz

const Genres = async () => {
    
   const list = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`);

   
   const url = await list.json();
   

   console.log("generies"+url);

  return (
    <div className='d-flex align-items-center flex-wrap gap-3'>
      <Categories result={url} />
    </div>
  )
}

export default Genres
