const axios = require('axios');

exports.getCurrentWeather = async (req, res) => {
  const { city } = req.query;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`;

  try {
    const response = await axios.get(url);
    res.status(200).json({
       current_Weather : response.data,
    });
  } catch (error) {
    res.status(400).json({ 
      error: error.message 
    });
  }

};



exports.getWeatherForecast = async (req, res) => {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ 
      error: 'Enter city name' 
    });
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`;

    const response = await axios.get(url);

    const forecastData = response.data.list.map(item => ({
      date: item.dt_txt,
      temperature: item.main.temp,
      humidity: item.main.humidity,
      weather: item.weather[0].description,
    }));

    const next7DaysForecast = forecastData.slice(0, 7);

    res.status(200).json({
      city: response.data.city.name,
      forecast: next7DaysForecast,
    });

  } catch (error) {
    console.error('Error fetching weather forecast:', error.message);
    res.status(500).json({ error: 'Failed to fetch weather forecast' });
  }
};

