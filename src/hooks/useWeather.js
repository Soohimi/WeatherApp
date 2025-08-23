import { useState } from "react";
import axios from "axios";
import { countryNames } from "../components/countryNames";

function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    setWeather(null);

    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fa`;

    try {
      const response = await axios.get(url);
      const data = response.data;

      const countryCode = data.sys.country;
      const country = countryNames[countryCode] || countryCode;

      const temp = data.main.temp;
      const icon = data.weather[0].icon;
      const description = data.weather[0].description;
      const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const feelsLike =
        data.main.feels_like !== undefined ? data.main.feels_like : temp;
      const humidity = data.main.humidity ?? "N/A";
      const visibility = (data.visibility / 1000).toFixed(1);
      const windSpeed = (data.wind.speed * 3.6).toFixed(1);

      setWeather({
        city: data.name,
        country,
        temp,
        icon,
        description,
        sunrise,
        sunset,
        feelsLike,
        humidity,
        visibility,
        windSpeed,
      });
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    weather,
    loading,
    error,
    fetchWeather,
  };
}

export default useWeather;
