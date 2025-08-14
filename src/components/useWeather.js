import { useState } from "react";
import { countryNames } from "./countryNames";

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
      const response = await fetch(url);
      if (!response.ok) throw new Error("شهر پیدا نشد");

      const data = await response.json();

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

      setWeather({
        city: data.name,
        country,
        temp,
        icon,
        description,
        sunrise,
        sunset,
      });
    } catch (err) {
      setError(err.message);
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
