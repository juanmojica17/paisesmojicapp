import React from "react";


const Notfound =()=>{
    return(
        
        <div style={{
            background:"gray",
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"}}>
            <h1 style={{
            fontSize:"200px",
            color:"red"
            }}>404</h1>
            <p style={{
            fontSize:"50px",
            color:"black"
            }}>NOT FOUND</p>
        </div>
        
    )
}

export default Notfound