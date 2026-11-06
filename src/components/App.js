
import React from "react";
import './../styles/App.css';
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  const [weatherData]=useState({temperature:25,conditions:"Sunny"});
  return (
    <div>
    <WeatherDisplay weather={waetherData} />
    </div>
  );
}

export default App;
