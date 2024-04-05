
const WeatherDay = ({ forecast }) => {
    return (
        <div className='forecast-item'>
            <p>{forecast.date}</p>
            <p>{forecast.forecast}</p>
            <p>Low: {forecast.low}</p>
            <p>High: {forecast.high}</p>
        </div>
    );
};

export default WeatherDay;