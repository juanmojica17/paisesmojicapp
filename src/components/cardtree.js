import React from "react";
import "./styles/cardtwo.css"

const Cardtwo =({name, flag, population, capital, region})=>{
    console.log({name})
    return(
        
      
        <div className="cardtwo">
            <h2>{name}</h2>
            <div >
            <img className="flag" src={flag}/>
            </div>
            <h6>Population:<br></br>{population}</h6>
            <h6>Capital City:<br></br>{capital}</h6>
            <h6>Region:<br></br>{region}</h6>

        </div>
        
    )
}
        
    


export default Cardtwo