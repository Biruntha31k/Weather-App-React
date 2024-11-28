function WeatherCard({ data }) {
    return (
      <div className="bg-white text-black p-6 mt-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
        <h2 className="text-2xl font-bold">{data.name}, {data.sys.country}</h2>
        <p className="text-lg mt-2">🌡️ Temperature: {data.main.temp}°C</p>
        <p className="text-lg mt-2">☁️ Weather: {data.weather[0].main}</p>
        <p className="text-lg mt-2">📝 Description: {data.weather[0].description}</p>
        <p className="text-lg mt-2">💨 Wind Speed: {data.wind.speed} m/s</p>
      </div>
    );
  }
  
  export default WeatherCard;
  