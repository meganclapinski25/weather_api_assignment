import {useState } from 'react'
import DisplayWeather from './DisplayWeather'
import './Weather.css'
function Weather() {
  
  const [zipCode, setZipCode] = useState('')

  const [weatherData, setWeatherData] = useState(null)

  // Error handingling 

  const [error, setError] = useState(null)
  const handlefunc = (e) =>{
    e.preventDefault()
    console.log("Submitted zip code :" , zipCode)

    const apiKey = import.meta.env.VITE_API_KEY

    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}&units=imperial`)
    .then(res => res.json())
    

    // new then to handing the codd = 200
    .then (data =>{
      console.log(data)

      if (data.cod === 200) {
        setWeatherData(data)
        setError(null)
      } else {
        setWeatherData(null)
        setError(data.message || 'Something went Wrong')
      }
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
      {!weatherData && !error && (
        <p>Please enteer a zip code to see the weather.</p>
      )}
      {error && (
        <p className='error'>Error: {error}</p>
      )}

      {weatherData && !error && (
        <DisplayWeather weatherData={weatherData} />
      )}
    </>
  )
}

export default Weather
