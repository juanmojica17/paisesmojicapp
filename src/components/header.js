import React,{useState} from "react";
import "./styles/header.css"
import Searchcountry from "./searchcountry";


const Header =({setCountryname, handleSearchCountry})=>{
   
    return(
        
        <header className="header">
         <div className="logo"><h2>WORLD COUNTRIES</h2><h6>MOJICAPP</h6> </div>
        <Searchcountry 
        setCountryname={setCountryname}
        handleSearchCountry={handleSearchCountry}
        />
        </header>
    )
}

export default Header