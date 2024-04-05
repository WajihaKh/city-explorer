const Weather = ({ forecasts }) => {
    console.log('forecasts ', forecasts);
    return (
        <div className='weather'>
            <h2>Weather Forecast</h2>
            <div className="forecast-list">
                {forecasts.map((forecastObj, index) => (
                    <div key={index} className="forecast-item">
                        <p>{forecastObj.date}</p>
                        <p>{forecastObj.forecast}</p>
                        <p>Low: {forecastObj.low}</p>
                        <p>High: {forecastObj.high}</p>
                    </div> 
                ))}
            </div>
        </div>
    );
}

export default Weather;
