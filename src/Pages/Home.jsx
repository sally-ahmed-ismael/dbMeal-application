import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Loading from "../components/Loading";
import './Home.css';

 function Home() {
const BASE_URL='https://www.themealdb.com/api/json/v1/1/search.php?s='
 
const [meals, setMeals] = useState([]);
const [loading,setLoading]=useState(false);
const [error,setError]=useState(false) ;
const [search, setSearch]=useState("");

const searchHandler =(e)=>{
  setSearch(e.target.value);
}

const handleBlur=()=>{
  const input = document.querySelector('input');
  console.log(input);
  input.addEventListener('blur', () => {
    input.focus();
  })
}

const fetchMeals= async()=>{
  try{
    setLoading(true);
    console.log(BASE_URL+search)
    let response= await axios.get(BASE_URL+search);
    setMeals(response.data.meals || []) ;
    setLoading(false);
    setError(false);
  }
  catch(error)
  {
    setError(true);
    setLoading(false);
  }
}

useEffect(()=>{
  fetchMeals();
  console.log(meals);

},[search]);

// if(loading) return <Loading />
if(error) return <h4 style={{color: "red"}}>Error Loading Data</h4>
  return (
    <>
    {/* <h1>Home</h1> */}
    
    <input id="search" type="text" value={search} autoFocus placeholder="Find your meal"
        onChange={searchHandler} onBlur={handleBlur}
        className="form-control bg-black text-white w-50" />

    {(meals.length === 0) && <h4>No such meal</h4>}

{loading ? <Loading />: (meals.length > 0) && 
      <div className="mealcontainer" >
        {meals.map((meal)=>{
          return(
          <Link key={meal.idMeal} to={`/${meal.strMeal}`} >  
          <div className="meal">
            <img src={meal.strMealThumb} alt="" />
            <div className='details' >
              <h2>{meal.strMeal}</h2>
            </div>
          </div>
          </Link>)
        })
        }
    
      </div>
    }
   
  </>
   )
}

export default Home