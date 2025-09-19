import { useState } from "react";
import axios from "axios";
import { countryNames } from "../components/countryNames";

const processWeatherData = (data) => {
  const countryCode = data.sys.country;
  return {
    city: data.name,
    country: countryNames[countryCode] || countryCode,
    temp: data.main.temp,
    icon: data.weather[0].icon,
    description: data.weather[0].description,
    sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    visibility: (data.visibility / 1000).toFixed(1),
    windSpeed: (data.wind.speed * 3.6).toFixed(1),
  };
};

function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
      const response = await axios.get(url);
      setWeather(processWeatherData(response.data));
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherForCurrentUserLocation = () => {
    setLoading(true);
    setError(null);

    axios
      .get("https://ipinfo.io/json")
      .then((response) => {
        const city = response.data.city;
        if (city) {
          fetchWeather(city);
        } else {
          setError(
            "Could not determine location from IP. Showing London instead."
          );
          fetchWeather("London");
        }
      })
      .catch((err) => {
        console.error("IP Geolocation failed:", err);
        setError("Could not get location. Showing London instead.");
        fetchWeather("London");
      });
  };

  return {
    weather,
    loading,
    error,
    fetchWeather,
    fetchWeatherForCurrentUserLocation,
  };
}

export default useWeather;
