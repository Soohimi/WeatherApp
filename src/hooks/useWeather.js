import { useState } from "react";
import axios from "axios";
import { countryNames } from "../components/countryNames";

const generateFakeForecast = (currentWeather) => {
  const forecast = [];
  const today = new Date();
  const weatherTypes = [
    { icon: "01d", description: "Clear Sky" },
    { icon: "02d", description: "Few Clouds" },
    { icon: "03d", description: "Scattered Clouds" },
    { icon: "10d", description: "Rain" },
  ];

  forecast.push({
    dt: today.getTime() / 1000,
    temp: { day: currentWeather.main.temp },
    weather: [
      {
        icon: currentWeather.weather[0].icon,
        description: currentWeather.weather[0].description,
      },
    ],
  });

  for (let i = 1; i <= 7; i++) {
    const nextDay = new Date();
    nextDay.setDate(today.getDate() + i);

    const randomWeather =
      weatherTypes[Math.floor(Math.random() * weatherTypes.length)];

    forecast.push({
      dt: nextDay.getTime() / 1000,
      temp: { day: currentWeather.main.temp + (Math.random() * 6 - 3) },
      weather: [
        {
          icon: randomWeather.icon,
          description: randomWeather.description,
        },
      ],
    });
  }
  return forecast;
};

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
    uvi: Math.round(Math.random() * 12),

    dailyForecast: generateFakeForecast(data),
  };
};

function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
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
          setError("Could not determine location. Showing Tehran instead.");
          fetchWeather("Tehran");
        }
      })
      .catch((err) => {
        console.error("IP Geolocation failed:", err);
        setError("Could not get location. Showing Tehran instead.");
        fetchWeather("Tehran");
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
