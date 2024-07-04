import React, { useState } from 'react';
import axios from 'axios';

const CurrentWeather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const fetchWeather = async () => {
    try {
      if(!city){
       return setError('Please select a city')
      }
      const response = await axios.get(` /api/weather/current?city=${city}`);
      setWeatherData(response.data.current_Weather);
      setError('');
    } catch (err) {
      console.error('Error fetching current weather:', err);
      setWeatherData(null);
      setError('Failed to fetch weather data');
    }
  };

  const addTofavourites = async () => {
   
      const token = localStorage.getItem('token');
      
      return fetch('/api/favourites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ city })

      }).then( res => {
        if(!res.ok)
           return res.json().then(err => {
            setError(err.message);
        });

        setSuccessMessage(`Added ${city} to favourites`);
      }).catch(err => {
          setError(err.message);
      })
  };
  

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Current Weather</h1>

      <div className="flex my-4">
        <input
          type="text"
          value={city}
          onChange={(e) => { setCity(e.target.value)}}
          placeholder="Enter city name"
          className="border border-gray-300 p-2 mr-2 rounded-lg"
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Get Weather
        </button>
        <button
          onClick={addTofavourites}
          className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Add to favourites
        </button>
       
      </div>

      {weatherData && (
        <div className="border p-4 rounded-lg shadow-md">
          <h2 className="font-semibold">{weatherData.name}</h2>
          <p>Temperature: {Math.round(weatherData.main.temp)} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}</p>
          <p>Wind Speed: {weatherData.wind.speed} km/h</p>
        </div>
      )}

      {error && <p className="text-red-500">{error}</p>}

      {successMessage && <p className="text-green-500">{successMessage}</p>}
    </div>
  );
};

export default CurrentWeather;
