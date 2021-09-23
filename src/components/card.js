import React from "react";
import Countries from "../views/countries"
import "./styles/card.css"
import { Link } from "react-router-dom";
const Card =({name, key, flag})=>{
    return(
        
        <div className="card">
            <h2>{name}</h2>
            
            <Link to={`/Country/${name}`}><img className="flag" src={flag}/></Link>
            
        </div>
        
    )
}

export default Card