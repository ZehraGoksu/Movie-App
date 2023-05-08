"use client";
import Link from "next/link";
import {BiRadioCircle} from 'react-icons/bi'
import { useSearchParams } from "next/navigation";
import style from "../styles/Categories.module.scss";
import Header from "@/components/Header"; 
import { BASE_URL,API_KEY } from "../../config";

const Categories = ({result}) => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category"); 
  const id = searchParams.get("id"); 
  
 

  const firstCategories = [
    {
      name: "POPULAR",
      url: "popular",
    },
    {
      name: "UPCOMİNG",
      url: "upcoming",
    },
    {
      name: "TOP RATED",
      url: "top_rated",
    },
  ];

  return (
    <div className={style.body}>
      <Header/>
      <div className="d-flex flex-column align-items-center align-items-sm-start p-4 text-white min-vh-100">
        <ul className="nav nav-pills flex-column">
          {firstCategories.map((category, index) => (
            <li className="nav-item" key={index}>
              <Link className="text-decoration-none" href={`/?category=${category.url}&page=`}>
                <h6 className="my-2">{category.name}</h6> 
              </Link>
            </li>
          ))}
        </ul> 
        <hr className="border text-white  w-75"></hr>
        <h6 className="my-3">CATEGORIES</h6>
        <ul className="nav nav-pills p-3 pt-0 flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"> 
          {
            result.genres?.map((result, index)=>(
                <li className="nav-item mt-2" key={index}> 
                  <BiRadioCircle className={style.circle}/>
                  <Link className="text-decoration-none text-black" href={`/genres/?id=${result.id}`}>{result.name}</Link>
                </li> 
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Categories;
