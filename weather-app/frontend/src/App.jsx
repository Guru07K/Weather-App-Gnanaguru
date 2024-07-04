import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import "./index.css";
import CurrentWeather from "./components/CurrentWeather";
import ForecastWeather from "./components/ForecastWeather";
import ProtectedRoute from "./components/ProtectedRoute";
import Logout from "./components/Logout";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-blue-500 p-4 flex justify-between ">
          <h1 className="text-2xl text-white justify-center">Weather App</h1>
          <div className="flex items-center">
            <div className="mr-4">
              <Link
                to="/logout"
                className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded"
              >
                Logout
              </Link>
            </div>
          </div>
        </header>
        <div className="container mx-auto py-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<ProtectedRoute />}>

              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/currentweather" element={<CurrentWeather />} />
              <Route path="/forecastweather" element={<ForecastWeather />} />
              <Route path="/logout" element={<Logout />} />
              
            </Route>

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

function HomePage() {
  return (
    <div className="flex justify-center mt-8">
      <div className="text-center">
        <p className="text-lg">Welcome to Weather App!</p>

        <div className="flex border-spacing-5 mt-4 gap-5">
          <Link
            to="/register"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-4"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
