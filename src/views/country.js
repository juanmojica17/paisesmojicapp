import React, {useState, useEffect} from "react";
import useFetchData from "../useFetchData";
import Header from "../components/header";
import Cardtwo from "../components/cardtwo"
import "../components/styles/country.css"
import Notfound from "../components/notfound";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

const Country =()=>{
    const{name}=useParams()
    console.log(name)
    const[countrydata,setCountrydata]=useState([])
    const[countryname,setCountryname]=useState(null)
    const[error,setError]=useState(false)
    const handleSearchCountry = async e =>{
        const url= `https://restcountries.eu/rest/v2/name/${countryname}`
        e.preventDefault();
        console.log(error)
        const response = await fetch(url)
        const result = await response.json();
        
        if(result.status=== 404){
            setError(true)
           
        }else{
            setError(false)
            setCountrydata(result[0])
        }
        console.log(error)
        try{

        }catch (error){
            
        }
        
        
        console.log(countrydata)
    }
    
    
    return(
        <>
        <div className="country">
        <Header 
        setCountrydata={setCountrydata}
        setCountryname={setCountryname}
        handleSearchCountry={handleSearchCountry}/>
        </div>
        { error ? (<Notfound />
        ):(
            countrydata &&(
                <>
            <Cardtwo
        name={countrydata.name}
        flag={countrydata.flag}
        />
        <Link to={`/Seemore/${countrydata.name}`}><button className="boton" >see more</button></Link></>
        )
        
        )}
        
        </>
        
    )
}

export default Country