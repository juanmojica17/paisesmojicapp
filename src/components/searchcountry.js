import React from "react";
import "../components/styles/searchcountry.css"
import { Link } from 'react-router-dom';

const Searchcountry =({setCountryname, handleSearchCountry})=>{
    return(
        
        <form onSubmit={handleSearchCountry }>
            <input className="input1" 
            type="text" 
            placeholder="search country"
            onChange={(e)=>setCountryname(e.target.value)} />
            <input className="input2" type="submit" value="search"/>
        </form>
        
    )
}

export default Searchcountry