import WeatherDay from './WeatherDay';

const Weather = ({ forecasts }) => {
    console.log('forecasts ', forecasts);

    return (
        <div className='weather'>
            <h2>Weather Forecast</h2>
            <div className="forecast-list">
                {forecasts.map((forecastObj, index) => (
                    <WeatherDay key={index} forecast={forecastObj} />
                ))}
            </div>
        </div>
    );
};

export default Weather;
