import {useState } from 'react'
import './Weather.css'
function Weather() {
  
  const [zipCode, setZipCode] = useState('')

  const handlefunc = (e) =>{
    e.preventDefault()
    console.log("Submitted zip code :" , zipCode)
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
            <button type='submite'> Get Weather</button>
          </form>
      </div>
    </>
  )
}

export default Weather
