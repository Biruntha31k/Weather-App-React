import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import WeatherApp from './pages/WeatherApp';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<WeatherApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
