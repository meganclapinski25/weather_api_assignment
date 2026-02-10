import {useState } from 'react'
import DisplayWeather from './DisplayWeather'
import './Weather.css'
function Weather() {
  
  const [zipCode, setZipCode] = useState('')

  const [weatherData, setWeatherData] = useState(null)
  const handlefunc = (e) =>{
    e.preventDefault()
    console.log("Submitted zip code :" , zipCode)

    const apiKey = import.meta.env.VITE_API_KEY

    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}&units=imperial`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setWeatherData(data)
    })

    
  }

  return (
    <>
      <div className="weather">
        <h1>Weather App</h1>
      </div>
      <div className="zipcode-form">
          <form onSubmit={handlefunc}>
            <input type = "text" value = {zipCode} onChange={(e) => setZipCode(e.target.value)}
                placeholder = "Enter zip code">
            </input>
            <button type='submit'> Get Weather</button>
          </form>
      </div>
      {weatherData && <DisplayWeather weatherData={weatherData} />}
    </>
  )
}

export default Weather
