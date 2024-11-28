import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="text-center text-white">
      <h1 className="text-5xl font-bold mb-5 animate-bounce">Welcome to Weather Wizard ⛅</h1>
      <p className="text-lg mb-8">Get accurate weather updates for your city!</p>
      <button
        onClick={() => navigate('/weather')}
        className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
      >
        Check Weather
      </button>
    </div>
  );
}

export default Home;
