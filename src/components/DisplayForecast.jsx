import './Forecast.css'

function DisplayForecast({forecastData}){
    if (!forecastData || !forecastData.list) return null

    const forecastItems = forecastData.list.slice(0, 8)

    return (
        <div className="forecast-container">
          <h3>5-Day Forecast (3-hour intervals)</h3>
          <div className="forecast-grid">
            {forecastItems.map((item, index) => (
              <div key={index} className="forecast-item">
                <p className="forecast-time">{new Date(item.dt_txt).toLocaleString()}</p>
                <p className="forecast-temp">{Math.round(item.main.temp)}°F</p>
                <p className="forecast-desc">{item.weather[0].description}</p>
              </div>
            ))}
          </div>
        </div>
      )
}
export default DisplayForecast