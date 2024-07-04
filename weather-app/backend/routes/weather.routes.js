const express = require('express');
const isAuthenticated = require('../middlewares/isAuthenticated');
const { getCurrentWeather, getWeatherForecast} = require('../controllers/weather.controller');
const router = express.Router();

router.get('/current', isAuthenticated, getCurrentWeather);
router.get('/forecast', isAuthenticated, getWeatherForecast);

module.exports = router;
