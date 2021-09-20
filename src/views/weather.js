import React, { useState } from 'react';
import Header from '../components/header';
import "../components/styles/weather.css"
import Cardfour from "../components/cardfour"
import { Link } from 'react-router-dom';


const api = {
  key: "98a8a391dfb554c32f9bbd2ab8769e32",
  base: "https://api.openweathermap.org/data/2.5/"
}

function Weather() {

    const[countrydata,setCountrydata]=useState([])
    const[countryname,setCountryname]=useState(null)
    const[error,setError]=useState(false)
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const handleSearchCountry = async e =>{
        const url= `https://restcountries.eu/rest/v2/name/${countryname}?fullText=true`
        e.preventDefault();
  
        const response = await fetch(url)
        const result = await response.json();

        const urltwo = `${api.base}weather?q=${countryname}&units=metric&APPID=${api.key}`
       e.preventDefault();
      
       const responsetwo = await fetch(urltwo)
       const resulttwo = await responsetwo.json();     
            setWeather(resulttwo);
            console.log(resulttwo);
        if(result.response=== 404){
            setError(true)
        }else{
            setCountrydata(result[0])
            console.log(countrydata)
        }
        //console.log(countrydata)
        try{
  
        }catch (error){
            console.log(error)
        }
        
        
        console.log(countrydata)
    }
  
    

 
    
  

 





  return (

      <div className={(typeof weather.main != "undefined") ? ((weather.clouds.all > 14 ) ? 'app warm' : 'app') : 'app'}>
        <Header 
        setCountrydata={setCountrydata}
        setCountryname={setCountryname}
        handleSearchCountry={handleSearchCountry}
        />
          <main>
          
        
          <div className='weathercountry'>
              <div className="tittle2">COUNTRY WEATHER

              </div>
          {(typeof weather.main != "undefined") ? (
              <div>
                <div className="location-box">
                  <div className="location">
                  {countryname}
                      
                  </div>


                        


                </div>
                
                <Cardfour
                     
                     flag={countrydata.flag}
                        />  
                <div className="weather-box">
                    


                 <h1 className="weather">{Math.round(weather.main.temp)}°c</h1>

                 
                <h4 className="weather"> Wind Speed:{weather.wind.speed}K/H</h4>

               
                  <div className="weather">{weather.weather[0].main}</div>
                    
                </div>

              </div>

          ) : ('')}
                </div>
        </main>
      </div>
  );
}

export default Weather;