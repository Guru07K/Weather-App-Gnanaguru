const express = require('express');
const isAuthenticated = require('../middlewares/isAuthenticated');
const { addfavouriteCity, getfavouriteCities } = require('../controllers/favourite.controller');
const router = express.Router();

router.post('/', isAuthenticated, addfavouriteCity);
router.get('/', isAuthenticated, getfavouriteCities);

module.exports = router;
