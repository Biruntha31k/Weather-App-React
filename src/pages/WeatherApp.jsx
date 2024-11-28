import { useState } from 'react';
import axios from 'axios';
import WeatherCard from '../components/WeatherCard';

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=31e10c393cc1624767ede99b74a22117`
      );
      setWeatherData(response.data);
      setError(false);
      setCity('');
    } catch {
      setError(true);
      setWeatherData(null);
      setCity('');
    }
  };

  return (
    <div className="flex flex-col items-center text-center text-white">
      <h1 className="text-4xl font-bold mb-5">Weather App 🌦️</h1>
      <input
        type="text"
        className="p-2 rounded-lg mb-4 w-64 text-black"
        placeholder="Enter city name"
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        onClick={fetchWeather}
        className="bg-blue-600 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
      >
        Get Weather
      </button>
      {error && <p className="text-red-500 mt-4">City not found. Try again.</p>}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default WeatherApp;
