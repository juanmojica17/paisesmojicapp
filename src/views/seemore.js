import React, {useState} from "react";
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
    const handleSearchCountry = async e =>{
        const url= `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
        e.preventDefault();

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

    
    return(
        <div className="country">
        <Header 
        setCountrydata={setCountrydata}
        setCountryname={setCountryname}
        handleSearchCountry={handleSearchCountry}/>
        
        <Cardtree
        capital={countrydata.capital}
        name={countrydata.name}
        flag={countrydata.flag}
        population={countrydata.population}
        region={countrydata.subregion}
        />

<Link to={`/Weather/${countrydata.name}`}><button className="buttonweather">weather</button></Link>
        </div>
    )
}

export default Seemore