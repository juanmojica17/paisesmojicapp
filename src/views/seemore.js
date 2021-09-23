import React, {useEffect, useState} from "react";
import useFetchData from "../useFetchData";
import Header from "../components/header";
import Cardtree from "../components/cardtree"
import "../components/styles/country.css"
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Loading from "../components/loading"

const Seemore =()=>{
    const{name}=useParams()
    const[countrydata,setCountrydata]=useState([])
    const[flag,setFlag]=useState("")
    const[error,setError]=useState(false)
    const[loading,setLoading]=useState(true)
    const handleSearchCountry = async ()=>{
        const url= `https://restcountries.com/v2/name/${name}?fullText=true`
        

        const response = await fetch(url)
        const result = await response.json();

        if(result.response=== 404){
            setError(true)
        }else{
            
            setCountrydata(result[0])
            setFlag(result[0].flags[0])
        }
        //console.log(countrydata)
        try{

        }catch (error){
            console.log(error)
        }
        
        
        console.log(countrydata)
    }

    const loadingstatus=()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 350);
    }

    useEffect(()=>{
        handleSearchCountry();
        loadingstatus();
    },[])
    

    if(loading){
        return(
            <Loading/>
        )
    }else{
    return(
        <div className="country">
        
        
        <Cardtree
        capital={countrydata.capital}
        name={countrydata.name}
        flag={flag}
        population={countrydata.population}
        region={countrydata.region}
        />

        <Link to={`/Weather/${countrydata.name}`}><button className="boton2">weather</button></Link>
        <Link to="/"><button className="boton2">HOME</button></Link>
        </div>
    )
}
}
export default Seemore