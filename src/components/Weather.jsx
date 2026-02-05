import {useState } from 'react'

function Weather() {
  return (
    <>
      <div className="weather">
        <h1>Weather App</h1>
      </div>
      <div className="zipcode-form">
          <form onSubmit={handlefunc}>
            <input type = "text" value = {zipcode}
                placeholder = "Enter zip code">
            </input>
            <button type='submite'> Get Weather</button>
          </form>
      </div>
    </>
  )
}

export default Weather
