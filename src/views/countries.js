import React,{useState} from "react";
import useFetchData from "../useFetchData";
import Card from "../components/card"
import "../components/styles/countries.css"
import Header from "../components/header"
import Notfound from "../components/notfound";
import { Link, useHistory } from "react-router-dom";



const Countries =()=>{
    const history=useHistory();
    const[countrydata,setCountrydata]=useState([])
    const[countryname,setCountryname]=useState(null)
    const[error,setError]=useState(false)
    const handleSearchCountry = async e =>{
        const url= `https://restcountries.com/v2/name/${countryname}`
       e.preventDefault()

        const response = await fetch(url)
        const result = await response.json();

        if(result.status=== 404 ){
            setError(true)
        }else{
            setCountrydata(result)
            history.push(`/country/${result[0].name}`)
        }
        //console.log(countrydata)
        try{

        }catch (error){
            //console.log(error)
        }
        
        
        console.log(result)
    }

   

    const {data} = useFetchData("https://restcountries.com/v2/all")
    console.log({data})
    return(
        <>
        <Header 
        
        setCountrydata={setCountrydata}
        setCountryname={setCountryname}
        handleSearchCountry={handleSearchCountry}/>
    
        
        { error ? (<Notfound />
        ):(
        <div className="countries">
            {data.map(data=>(
                <Card
                name={data.name}
                flag={data.flags[0]}
                key={data.id}
                />
                
            ))}
            
        </div>)}
        </>
    )
}

export default Countries