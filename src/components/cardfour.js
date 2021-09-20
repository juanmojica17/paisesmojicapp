import React from "react";
import "./styles/cardfour.css"

const Cardfour =({name, flag})=>{
    console.log({name})
    return(
        
      
        <div className="cardfour">
            <h2>{name}</h2>
            <div >
            <img className="flag" src={flag}/>
            </div>
        </div>
        
    )
}
        
    


export default Cardfour