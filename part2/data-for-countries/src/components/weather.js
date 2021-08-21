import React, {useEffect, useState} from 'react'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY
const api_url = "http://api.weatherstack.com/current"

const Weather = ({capital}) => {
  const [weatherData, setWeatherData] = useState([]);
  
    useEffect(()=> {
    axios
      .get(`${api_url}?access_key=${api_key}&query=${capital}`)
      .then(response=>{
        console.log(response.data)
        setWeatherData(response.data)
      })
    },[capital])
  
  if (weatherData.current === undefined)
    return <p>Loading weather information...</p>;

    return (
        <>
        <p>
          <b>Temperature: </b>
          {weatherData.current.temperature} celsius
        </p>
        <img alt="Weather icon" width="100" height ="100" src={weatherData.current.weather_icons}/>
        <p>
          <b>Wind: </b>
          {weatherData.current.wind_speed} km/hr {weatherData.current.wind_dir}
        </p>
        </>
    )
}

export default Weather