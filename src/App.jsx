import { useState } from 'react';
import LocationInfo from './components/LocationInfo';
import ErrorMessage from './components/ErrorMessage';
import SearchForm from './components/SearchForm';
import Weather from './components/Weather';
import Movies from './components/Movies';
import './App.css'

function App() {
    const [city, setCity] = useState('');
    const [location, setLocation] = useState({});
    const [error, setError] = useState('');
    const [weatherData, setWeatherData] = useState([]);
    const [movies, setMovies] = useState([]);
    const accessToken = import.meta.env.VITE_APP_ACCESS_TOKEN;
    const API = import.meta.env.VITE_API_URL;



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

            if (locationData.lat && locationData.lon) {
                try {
                let weatherResponse = await fetch ( `${API}/weather?lat=${locationData.lat}&lon=${locationData.lon}&searchQuery=${city}`);
                let forecastData = await weatherResponse.json();
                // -------------------------------------------
                console.log('forecastData', forecastData);
                console.log('weatherData ', weatherData );
                setWeatherData(forecastData);
            
                getMovies();
            } catch (error){
                console.error('Error something went wrong');
                setWeatherData([])
            }
            }
        }
        } catch {
          setError('Error getting location information');
          setWeatherData([]);
        }
    }

    async function getMovies() {
        console.log('I got called');
        if (!city) {
            setError('Please enter a city!');
            setLocation({});
            return;
        }
        if (location.lat && location.lon) {
            try {
            let movieResponse = await fetch (`${API}/movies?city=${city}`);
            let movieData = await movieResponse.json();
            setMovies(movieData);
        }
        catch(error){
            console.error('Error something went wrong');
            setMovies([]);
        }
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
                    {movies.length > 0 && <Movies movieData={movies} /> }
                </div>
            </div>
        </div>
    )

}

export default App
