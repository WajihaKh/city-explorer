import { useState } from 'react';
import LocationInfo from './components/LocationInfo';
import ErrorMessage from './components/ErrorMessage';
import SearchForm from './components/SearchForm';
import Weather from './components/Weather';
import './App.css'



function App() {
    const [city, setCity] = useState('');
    const [location, setLocation] = useState({});
    const [error, setError] = useState('');
    const [weatherData, setWeatherData] = useState([]);

    const accessToken = import.meta.env.VITE_APP_ACCESS_TOKEN;

    async function getLocation() {
        if (!city) {
            setError('Please enter a city!');
            setLocation({});
            return;
        }
        let url =`https://us1.locationiq.com/v1/search?key=${accessToken}&q=${city}&format=json`;
        try {
            let response = await fetch(url);
            let jsonData = await response.json();
            if (jsonData.error) {
                setError('Location not found.');
                setLocation({});
            } else {
                let locationData = jsonData[0];
                setLocation(locationData);
                setError('');

            if (locationData.lat && location.Data.lon) {
                let weatherResponse = await fetch ( `http://localhost:300/weather?lat=${locationData.lat}&${locationData.lon}&searchQuery=${city}`);
                let weatherData = await weatherResponse.json();
            }
            }

        } catch {
          setError('Error getting location information');
          setWeatherData([]);
        }
    }
    
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <SearchForm setCity={setCity} getLocation={getLocation} />
                    {error && <ErrorMessage message={error} />}
                    {location.display_name && <LocationInfo location={location} accessToken={accessToken}/>}
                    {weatherData.length > 0 && <Weather forecasts={weatherData} />}
                </div>
            </div>
        </div>
    )

}

export default App
