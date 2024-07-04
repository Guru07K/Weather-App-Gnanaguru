const Favourite = require('../models/favourite');
const axios = require('axios');

exports.addfavouriteCity = async (req, res) => {
  const { city } = req.body;
  try {
    const citySameForUser = await Favourite.findOne({userId : req.userId, city})  

    if(citySameForUser){
      return res.status(400).json({
        message: 'City already added to favourites'
      });
    }

    const favourite = await Favourite.create({ userId: req.userId, city });

    res.status(201).json({
        message: 'City added to favourites',
        favourite 
    });
  } catch (error) {
    res.status(400).json({
        error: error.message 
    });
  }
};



exports.getfavouriteCities = async (req, res) => {
  try {
    const favourites = await Favourite.find({ userId: req.userId });

    const citiesWeather = [];

    for (const favourite of favourites) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${favourite.city}&appid=${process.env.WEATHER_API_KEY}&units=metric`;
      try {
        const response = await axios.get(url);
        const weatherData = response.data;

        citiesWeather.push({
          city: favourite.city,
          temp: weatherData.main.temp,
          humidity: weatherData.main.humidity,
          wind_speed: weatherData.wind.speed,
          weather: weatherData.weather[0].description,
        });
      } catch (error) {
        citiesWeather.push({
          city: favourite.city,
          error: 'Failed to fetch weather data'
        });
      }
    }

    res.status(200).json({
      citiesWeather
    });
  } catch (error) {
    res.status(400).json({ 
      error: error.message 
    });
  }
};




