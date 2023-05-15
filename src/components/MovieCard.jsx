"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import style from "../styles/MovieCard.module.scss";
import { FaImdb } from "react-icons/fa";
import{ IMAGE_BASE_URL } from '../../config'

const MovieCard = ({ result }) => {
  
  const router = useRouter();
  const handleClick = () => {
    router.push(`details/${result?.id}`);
  };

  return (

    <div className="col"
    onClick={handleClick}>
      <div className="m-0 p-0">
      <Image
        className="object-fit-cover rounded-3"
        width={170}
        height={220}
        src={`${IMAGE_BASE_URL}/${
          result?.backdrop_path || result?.poster_path
        }`}
        alt="Movie Photo"
      />
      <div className="d-flex justify-content-between gap-2 mt-3">
        <div className="col-9">
          <p className="text-uppercase">{result?.title}</p>
        </div>
        <div className="col-3">
          <FaImdb className={style.imdb} />
          <h6 className="fw-semibold">{result?.vote_average.toPrecision(2)}</h6>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MovieCard
