import React from "react";
import "./styles/cardtwo.css"

const Cardtwo =({name, flag})=>{
    console.log({name})
    return(
        
      
        <div className="cardtwo">
            <h2>{name}</h2>
            <div >
            <img className="flag" src={flag}/>
            </div>
        </div>
        
    )
}
        
    


export default Cardtwo