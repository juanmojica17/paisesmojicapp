import React, {useEffect, useState} from "react";
import useFetchData from "../useFetchData";
import Header from "../components/header";
import Cardtree from "../components/cardtree"
import "../components/styles/country.css"
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
const Seemore =()=>{
    const{name}=useParams()
    const[countrydata,setCountrydata]=useState([])
    const[countryname,setCountryname]=useState(null)
    const[error,setError]=useState(false)
    const handleSearchCountry = async ()=>{
        const url= `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
        

        const response = await fetch(url)
        const result = await response.json();

        if(result.response=== 404){
            setError(true)
        }else{
            setCountrydata(result[0])
        }
        //console.log(countrydata)
        try{

        }catch (error){
            console.log(error)
        }
        
        
        console.log(countrydata)
    }

    useEffect(()=>{
        handleSearchCountry();
    },[])


    return(
        <div className="country">
        
        
        <Cardtree
        capital={countrydata.capital}
        name={countrydata.name}
        flag={countrydata.flag}
        population={countrydata.population}
        region={countrydata.subregion}
        />

        <Link to={`/Weather/${countrydata.name}`}><button className="boton2">weather</button></Link>
        <Link to="/"><button className="boton2">HOME</button></Link>
        </div>
    )
}

export default Seemore