import { useParams} from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Loading from "../components/Loading";
import './Meal.css'

function Meal() {

  const [mealSpec, setMealSpec] = useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false) ;
  const {meal} = useParams();
  console.log(meal);
   
    const fetchMeal= async()=>{
    try{
      setLoading(true);
      let response= await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}` );
      console.log(response)
      setMealSpec(response.data.meals[0] || []) ;

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
    fetchMeal();
    console.log(`mealSpec = ${mealSpec}`);
  
  },[]);
////////////////////
const getRecipesIngredients=(mealSpec)=>{
  let arrIngredients = [];
  for(let i=0; i< 20; i++){
    let testIngredient = mealSpec[`strIngredient${i}`];
    if(testIngredient)
      arrIngredients.push(testIngredient);
  }
  return arrIngredients;
}

let arrIngredients = getRecipesIngredients(mealSpec);
// console.log(`arrIngredients = ${arrIngredients}`);
////////////////////
const getRecipesMeasure=(mealSpec)=>{
  let arrMeasure = [];
  for(let i=0; i< 20; i++){
    let testMeasure = mealSpec[`strMeasure${i}`];
    if(testMeasure)
      arrMeasure.push(testMeasure);
  }
  return arrMeasure;
}

let arrMeasure = getRecipesMeasure(mealSpec);
// console.log(`arrMeasure = ${arrMeasure}`);

////////////////////

let arrRecipes = [];
for(let i=0; i<arrIngredients.length; i++){
  arrRecipes.push(`${arrMeasure[i]} ${arrIngredients[i]}`)
}
// console.log(`arrRecipes = ${arrRecipes}`);
////////////////////
let tags=mealSpec[`strTags`]||"";
console.log(typeof(tags))
let tagsArr=tags.split(',')
console.log(`tagsArr= ${tagsArr}`)
console.log(typeof(tagsArr))
console.log(tagsArr.length)

////////////////////  
  if(loading) return <Loading />
  if(error) return <h4 style={{color: "red"}}>Error Loading Data</h4>
  
////////////////////
  return (
    <>
    <div className="mealContainer">

      <div className="image">
         <img src={mealSpec.strMealThumb} alt="meal image" />
         <h1>{mealSpec.strMeal}</h1>
      </div>
      <div className="details">
        <h2>Instruction</h2>
        <p>{mealSpec.strInstructions}</p>
        <h4><b>Area: </b>{mealSpec.strArea}</h4>
        <h4><b>Category: </b>{mealSpec.strCategory}</h4>
        <h4><b>Recipes: </b></h4>
        {arrRecipes.map((arr,index)=>{
          return(
            <button className='recipes' key={index}>{arr}</button>
          )
        })}
        <h4><b>Tags: </b></h4>
        {(tagsArr[0] != "")? tagsArr.map((arr,index)=>{
          return(
           <button className='tags' key={index}>{arr}</button>
          )
        }) : <button className='tags' > No tags available</button>
      }
        <br></br>
        <a href={mealSpec.strSource} type="button" className="btn btn-success">Source</a>
        <a href={mealSpec.strYoutube} type="button" className="btn btn-danger">Youtube</a>
         
      </div>

    
    </div>
    </>
  )
}

export default Meal