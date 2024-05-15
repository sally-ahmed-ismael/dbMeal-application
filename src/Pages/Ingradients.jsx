import axios from "axios";
import { useEffect, useState } from "react"
import './Area.css'
import { Link } from 'react-router-dom';
import Loading from "../components/Loading";
import { PiBowlFoodBold } from "react-icons/pi";
import './Ingradients.css'


function Ingradients() {

    const [ingradients,setIngradients]=useState([]);
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)
   


    const BASE_URL='https://www.themealdb.com/api/json/v1/1/list.php?i=list';

    const fetchIngradients= async()=>{
        try{
            setLoading(true);
            const response= await axios(BASE_URL);
            console.log(response)
            setIngradients(response.data.meals);
            setLoading(false);

        }
        catch(e){
            setLoading(false)
            setError(true);
        }
    }

    useEffect(()=>fetchIngradients,[]);
    // console.log(ingradients);

    const filterIngradients=(ingradients)=>{
        let ingArr=[];
        for(let i=0; i<ingradients.length; i++){
            ingradients[i].strDescription && ingArr.push(ingradients[i])
        }
        return ingArr;
    }

    let filteredIng = filterIngradients(ingradients);
    console.log(filteredIng)
    if (loading) return <Loading />;
    if (error) return <h4 style={{color: "red"}}>Error Loading Data</h4>

  return (
    <div className="ingradients-container">
        {filteredIng.map((ing,index)=>{
            return (
            <Link to={`/ingradients/${ing.strIngredient}`} 
            style={{ textDecoration: 'none' }} key={index} >    
                <div key={index}  className="item">
                    <PiBowlFoodBold />
                    <h6>{ing.strIngredient}</h6>
                    <p>{ing.strDescription}</p>

                </div>
            </Link>
            )
            })
        }
    </div>
  )
}

export default Ingradients