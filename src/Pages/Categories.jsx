// import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react"
import './Categories.css'
import { Link } from 'react-router-dom';
import Loading from "../components/Loading";


function Categories() {
  const [categories, setCategories] =useState([]) ;
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(false)
   


  const BASE_URL='https://www.themealdb.com/api/json/v1/1/categories.php' 

  const fetchCategories= async ()=>{
    
    try{
      setLoading(true);
      const response = await axios(BASE_URL);
      setCategories(response.data.categories);
      setLoading(false);
    }
    catch(error){
      setError(true);
      setLoading(false);
    }
  }

useEffect(()=>{fetchCategories()},[]);



console.log(categories); 

//
if (loading) return <Loading />;
if (error) return <h4 style={{color: "red"}}>Error Loading Data</h4>
  
return (
   
  
    <>
    {/* <h1>Categories</h1> */}
    <div className="catcontainer" >
      {categories.map((cat)=>{
        return(
        <Link key={cat.idCategory} to={`/categories/${cat.strCategory}`} >  
         <div   className="category">
          <img src={cat.strCategoryThumb} alt="" />
          <div className='details' >
            <h2>{cat.strCategory}</h2>
            <p>{cat.strCategoryDescription}</p>
          </div>
        </div>
        </Link> 
      )
    })}
    
  </div>
   </> 
  )
}

export default Categories