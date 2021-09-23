import React, {useState, useEffect} from "react";
import useFetchData from "../useFetchData";
import Header from "../components/header";
import Cardtwo from "../components/cardtwo"
import "../components/styles/country.css"
import Notfound from "../components/notfound";
import { Link, useHistory } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Loading from "../components/loading"
const Country =()=>{
    const{name}=useParams()
    
    console.log(name)
    const[countrydata,setCountrydata]=useState([])
    const[countryname,setCountryname]=useState(null)
    const[error,setError]=useState(false)
    const[flag,setFlag]=useState("")
    const[loading,setLoading]=useState(true)
    const handleSearchCountry = async () =>{
        const url= `https://restcountries.com/v2/name/${name}`
        
        //console.log(error)
        const response = await fetch(url)
        const result = await response.json();
        
        if(result.status=== 404){
            setError(true)
           
        }else{
            setError(false)
            setCountrydata(result[0])
            setFlag(result[0].flags[0])
        }
        //console.log(error)
        try{

        }catch (error){
            
        }
        
        
       // console.log(countrydata)
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
    console.log(flag)
    if(loading){
        return(
            <Loading/>
        )
    }else{
    return(
        <>
        <div className="country">
        
        </div>
        { error ? (<Notfound />
        ):(
            countrydata &&(
                <>
                <div className="presentation">
            <Cardtwo
        name={countrydata.name}
        flag={flag}
        /></div>
        
        <Link to={`/Seemore/${countrydata.name}`}><button className="boton" >SEE MORE</button></Link>
        <br></br>
        <Link to="/"><button className="boton">RETURN</button></Link></>
        
        )
        
        )}
        
        </>
        
    )
}
}
export default Country