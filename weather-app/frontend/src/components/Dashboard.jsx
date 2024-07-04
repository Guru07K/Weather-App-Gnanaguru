import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [favouriteCities, setfavouriteCities] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchfavouriteCities = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/favourites', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setfavouriteCities(response.data.citiesWeather);
      } catch (err) {
        setError(err.response?.data?.message || err.message || 'An error occurred');
      }
    };

    fetchfavouriteCities();
  }, []);

  return (
    <div className="container mx-auto">
      
      <div className="my-4 ">
        <h2 className="text-4xl font-bold text-center mb-2">Weather Views</h2>
        <div className="flex justify-center gap-4 pt-5 ">
          <Link
            to="/currentWeather"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Current Weather
          </Link>
          <br />
          <Link
            to="/forecastWeather"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Forecast Weather
          </Link>
          <br />
         
        </div>
      </div>

      <div className="my-4 pt-10">
        <h2 className="text-xl font-semibold mb-2">favourite Cities</h2>
        <div className="grid grid-cols-2 gap-4">
          {favouriteCities.length > 0 ? (
            favouriteCities.map((city, index) => (
              <div key={index} className="border p-4 rounded-lg shadow-md">
                <h3 className="font-semibold">{city.city}</h3>
                <p>Temperature: {city.temp} °C</p>
                <p>Weather: {city.weather}</p>
              </div>
            ))
          ) : (
            <p>No favourite cities added yet.</p>
          )}
        </div>
      </div>

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Dashboard;
