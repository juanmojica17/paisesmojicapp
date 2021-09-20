import React from "react";
import Countries from "../views/countries"
import "./styles/card.css"

const Card =({name, key, flag})=>{
    return(
        
        <div className="card">
            <h2>{name}</h2>
            <div >
            <img className="flag" src={flag}/>
            </div>
        </div>
        
    )
}

export default Card