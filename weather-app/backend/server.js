const express = require('express');
const dotenv = require('dotenv');
const path = require("path");
const authRoutes = require('./routes/auth.routes');
const weatherRoutes = require('./routes/weather.routes');
const favouriteRoutes = require('./routes/favourite.routes');
const databaseConnect = require('./config/connectDatabase');
const cookieParser = require('cookie-parser')
const cors = require('cors');


dotenv.config({path: path.join(__dirname,"./config/.env.sample")});

const app = express();

databaseConnect()

app.use(cors());
app.use(express.json());
app.use(cookieParser())

app.use('/api/auth', authRoutes);
app.use('/api/weather', weatherRoutes);
app.use('/api/favourites', favouriteRoutes);


app.listen(process.env.PORT,() =>{
    console.log('Server is running on port 3000');
})                               

