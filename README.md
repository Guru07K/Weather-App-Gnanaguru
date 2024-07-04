<h1 align="center">Hi 👋, I'm GNANAGURU K</h1>
<h3 align="center">MERN Stack Project</h3>


<p align="left">
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a> </p>


<br/>
<h3> Setup : install Node, Express, mongoose, mongoDB</h3>
<br/>
<h3> Install Thirt Party library/packages :  react-router-dom, jsonwebtoken, cookie-parser, dotenv, bcryptjs, axios, cors, tailwind</h3>

## What is this?
This is a MERN stack weather web application .

This web app to get the current weather data of city you submit into the form.
 Consists of some main components
 - the header at the top
 - the form to input your city, and submit button
 - Display weather data
 - Add to your favourite city
 - See Forecast Weather
 - Register/Login/Logout
 - Dashboard to see favourite city weather

##Screnshots :
<img width="950" alt="ss" src="https://github.com/Guru07K/Weather-App-Gnanaguru/assets/141668518/914fec16-0968-4bf9-b31a-b87ed047e9d5">
<img width="943" alt="c" src="https://github.com/Guru07K/Weather-App-Gnanaguru/assets/141668518/043f65d4-5469-4cd3-9ee3-0197bd748cef">
<img width="947" alt="mk" src="https://github.com/Guru07K/Weather-App-Gnanaguru/assets/141668518/89bfba47-0716-47df-a406-9a0fac634b39">
<img width="945" alt="jcnj" src="https://github.com/Guru07K/Weather-App-Gnanaguru/assets/141668518/c67f6fc1-b202-46cf-bd8c-1b96b4329846">


## Setup
Prereq apps to have downloaded
- [Node](https://nodejs.org/en/) 
- [mongoDB](https://git-scm.com/downloads](https://www.mongodb.com/))


Download all npm packages for both client/server
```javascript
npm run setup
```

### .env.sample file
Need three creds. openWeather api, mongo connection string and Secret_key for jwt

#### Mongo
Log into [mongo](https://account.mongodb.com/account/login)

On the left-hand sidebar, you should see **Database Access**. Click on it and make a new user for yourself.  
1. Click on `Add New Database User`
2. Create a new user by filling out `username` and `password`  
(this will be different creds than your actual mongo account. This is gives a user access to this particular database.)

On the left-hand sidebar, you should see **Network Access**.  
Make a new access point for your IP address to get permission on using your mongodb.

Now create a `.env` file in your root directory of `mern-weather-app` and dynamically add this to your `.env`
```javascript
DB=mongodb+srv://<username>:<password>@<cluster-id>.mongodb.net/test?retryWrites=true&w=majority
```
To get the cluster ID, go to **Clusters** and click on **Connect > Connect your application** to get a more detailed view of how the DB string should look like. 

#### Weather API
Make an account at   and go to the [api keys](https://home.openweathermap.org/api_keys) section.
Copy/pasta that key to the .env file using `WEATHER_KEY` as your key
```
WEATHER_API_KEY=1234567890asdfjkl
```

## Run Locally
**Note:** The mongo connection is commented out in `server.js`. Just uncomment the code block to connect to mongo:
```javascript
//  mongoose.connect(process.env.MONGODB_URI).then(
//     (con) =>{
//    console.log(`Mongodb is  connected to host ${con.connection.host}`)
// })
```

You can now run your local.  
Go to your root directory and start your web app:
```javascript
npm run dev
```
This is command will your client and server concurrently. 
- client - localhost:5173
- server - localhost:3000

The service will auto-watch both frontend and backend, so no need to restart to see your changes.  
Once you save your changes, it'll auto-refresh to view your changes.


