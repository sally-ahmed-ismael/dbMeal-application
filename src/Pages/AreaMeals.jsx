import { Link, useParams} from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Loading from "../components/Loading"


function AreaMeal() {
  const BASE_URL='https://www.themealdb.com/api/json/v1/1/filter.php?a=';
  const [meals, setMeals] = useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false) ;
  const {areaMeal} = useParams();
  console.log(useParams())


  const fetchAreaMeals= async()=>{
    try{
      setLoading(true);
      let response= await axios.get(`${BASE_URL}${areaMeal}` );
      console.log(response)
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
    fetchAreaMeals();
    console.log(`areaMeals = ${meals}`);
  
  },[]);

  if (loading) return <Loading />;
  if (error) return <h4 style={{color: "red"}}>Error Loading Data</h4>

  return (
    <div className="mealcontainer">
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
  )
}

export default AreaMeal