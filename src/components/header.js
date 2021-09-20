import React,{useState} from "react";
import "./styles/header.css"
import Searchcountry from "./searchcountry";


const Header =({setCountryname, handleSearchCountry})=>{
   
    return(
        
        <header className="header">
        <a className="logo" href="#"> <h2>WORLD COUNTRIES</h2><h6>MOJICAPP</h6> </a>
        <Searchcountry 
        setCountryname={setCountryname}
        handleSearchCountry={handleSearchCountry}
        />
        </header>
    )
}

export default Header