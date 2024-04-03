const Weather = ({ forecasts }) => {
    return (
        <div className='weather'>
            <h2>Weather Forecast</h2>
            <div className="forecast-list">
                {forecasts.map((forecast, index) => (
                    <div key={index} className="forecast-item">
                        <p>Date: {forecast.date}</p>
                        <p>Description: {forecast.description}</p>
                    </div> 
                ))}
            </div>
        </div>
    );
}

export default Weather;
