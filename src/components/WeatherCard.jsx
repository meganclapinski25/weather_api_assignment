 

function WeatherCard({weatherData}){
return (
    <>
        <div className="weather-card-header">
            <h2>Your Weather Data </h2>
            <p>Your Zip Code Entered : {zipCode}</p>
        </div>
        <div className="weather-card">
            <h2>{weatherData.name}</h2>

        </div>
    
    </>
)
}

export default WeatherCard