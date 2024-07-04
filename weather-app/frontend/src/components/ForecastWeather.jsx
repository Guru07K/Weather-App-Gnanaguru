import React, { useState } from 'react';
import axios from 'axios';

const ForecastWeather = () => {
  const [city, setCity] = useState('');
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState('');


  const fetchForecast = async () => {
    try {
      const response = await axios.get(`/api/weather/forecast?city=${city}`);
      setForecastData(response.data.forecast);
      setError('');
    } catch (err) {
      setForecastData([]);
      setError('Failed to fetch forecast data');
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Forecast Weather</h1>

      <div className="flex my-4">
        <input
          type="text"
          value={city}
          onChange={(e) => { setCity(e.target.value) }}
          placeholder="Enter city name"
          className="border border-gray-300 p-2 mr-2 rounded-lg"
        />
        <button
          onClick={fetchForecast}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Get Forecast
        </button>
      </div>

      {forecastData.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {forecastData.map((forecast, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-md">
              <h2 className="font-semibold">{forecast.date}</h2>
              <p>Temperature: {forecast.temperature.day} °C</p>
              <p>Min Temperature: {forecast.temperature.min} °C</p>
              <p>Max Temperature: {forecast.temperature.max} °C</p>
              <p>Weather: {forecast.weather}</p>
            </div>
          ))}
        </div>
      )}

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default ForecastWeather;
