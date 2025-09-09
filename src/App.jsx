import CityInput from "./components/CityInput";
import WeatherDisplay from "./components/WeatherDisplay";
import useWeather from "./hooks/useWeather";
import { countryNames } from "./components/countryNames";
import { useState } from "react";
import WeatherCard from "./components/weather/WeatherCard";
import "./App.css";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import MainContent from "./components/layout/MainContainer";

function App() {
  const [city, setCity] = useState("");
  const { weather, loading, error, fetchWeather } = useWeather();

  const handleFetch = () => {
    fetchWeather(city);
  };

  return (
    <div
      className="h-screen bg-black text-white flex gap-6 pr-6 pl-11 pb-11 "
      dir="ltr"
    >
      <div className="pt-11">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col pt-8">
        <Header />

        {/* Center content area */}
        <div className="flex-1 overflow-hidden">
          {/* <CityInput
            city={city}
            setCity={setCity}
            onFetch={handleFetch}
            loading={loading}
          />
          {error && <p className="text-red-500 pt-4">{error}</p>}
          <WeatherDisplay weather={weather} /> */}
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
