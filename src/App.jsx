import CityInput from "./components/CityInput";
import WeatherDisplay from "./components/WeatherDisplay";
import useWeather from "./components/useWeather";
import { countryNames } from "./components/countryNames";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const { weather, loading, error, fetchWeather } = useWeather();

  const handleFetch = () => {
    fetchWeather(city);
  };

  return (
    <div>
      <h1>وضعیت آب‌وهوا</h1>

      <CityInput 
        city={city}
        setCity={setCity}
        onFetch={handleFetch}
        loading={loading}
      />
        {error && <p></p>}
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;