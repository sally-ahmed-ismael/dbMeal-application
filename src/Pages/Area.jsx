import axios from "axios";
import { useEffect, useState } from "react"
import './Area.css'
import { Link } from 'react-router-dom';
import Loading from "../components/Loading";
import { RiHomeOfficeFill } from "react-icons/ri";


function Area() {
    const [area,setArea]=useState([]);
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)
   


    const BASE_URL='https://www.themealdb.com/api/json/v1/1/list.php?a=list';

    const fetchArea= async()=>{
        try{
            setLoading(true);
            const response= await axios(BASE_URL);
            console.log(response)
            setArea(response.data.meals);
            setLoading(false);


        }
        catch(e){
            setLoading(false)
            setError(true);
        }
    }

    useEffect(()=>fetchArea,[]);
    console.log(area);

    if (loading) return <Loading />;
    if (error) return <h4 style={{color: "red"}}>Error Loading Data</h4>


  return (
    <div className="areacontainer">
        {area.map((area,index)=>{
            return (
            <Link to={`/area/${area.strArea}`} key={index}
            style={{ textDecoration: 'none' }} >    
                <div key={index}  className="item">
                    <RiHomeOfficeFill />
                    <p>{area.strArea}</p>

                </div>
            </Link>
            )
            })
        }
    </div>
  )
}

export default Area