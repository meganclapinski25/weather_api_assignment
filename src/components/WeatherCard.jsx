import './WeatherCard.css'

function WeatherCard({ weatherData }) {
  return (
    <div className="weather-card">
      <h2>{weatherData.name}</h2>
      <p className="temp">{Math.round(weatherData.main.temp)}°F</p>
      <p className="description">{weatherData.weather[0].description}</p>
      <div className="details">
        <p>Humidity: {weatherData.main.humidity}%</p>
        <p>Wind: {weatherData.wind.speed} mph</p>
        <p>Feels Like: {Math.round(weatherData.main.feels_like)}°F</p>
      </div>
    </div>
  )
}

export default WeatherCard