import './WeatherCard.css'

function DisplayWeather({ weatherData, cityName }) {
  if (!weatherData) return null

  return (
    <div className="weather-card">
        <h2>Todays Weather</h2>
        <h2>{cityName}</h2> 
      <p className="temp">{weatherData.main.temp}</p>
      <p className="description">{weatherData.weather[0].description}</p>
      <div className="details">
        <p>Humidity: {weatherData.main.humidity}%</p>
        <p>Wind: {weatherData.wind.speed} mph</p>
        <p>Feels Like: {weatherData.main.feels_like}°F</p>
      </div>
    </div>
  )
}

export default DisplayWeather