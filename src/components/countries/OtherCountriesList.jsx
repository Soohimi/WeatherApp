import React, { useState, useEffect } from "react";
import axios from "axios";
import { ICON_MAP, DEFAULT_ICON } from "../../utils/IconMap";
import CitySelectionModal from "../countries/CountryWeatherCard";

const defaultCities = ["Canberra", "Tokyo", "London", "Ottawa", "Tehran"];

function CountryWeatherCard({ weather }) {
  if (!weather) return null;
  return (
    <div className="grid grid-cols-3 items-center self-stretch rounded-2xl bg-neutral-800 p-3">
      <div className="flex flex-col items-start justify-center">
        <div className="text-sm text-zinc-400">{weather.country}</div>
        <div className="text-xl font-medium text-white">{weather.city}</div>
        <div className="text-sm text-white capitalize">
          {weather.description}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={ICON_MAP[weather.icon] || DEFAULT_ICON}
          alt={weather.description}
          className="w-12 h-12"
        />
      </div>
      <div className="flex items-center justify-end text-xl font-semibold">
        <span className="text-white">{Math.round(weather.temp)}°</span>
      </div>
    </div>
  );
}

export default function OtherCountriesList() {
  const [cities, setCities] = useState(() => {
    const savedCities = localStorage.getItem("savedCities");
    return savedCities ? JSON.parse(savedCities) : defaultCities;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countriesWeather, setCountriesWeather] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (cities.length === 0) {
      setCountriesWeather([]);
      setLoading(false);
      return;
    }

    const fetchAllWeather = async () => {
      setLoading(true);
      const apiKey = import.meta.env.VITE_API_KEY;
      const promises = cities.map((city) =>
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        )
      );

      try {
        const responses = await Promise.all(promises);
        const weatherData = responses.map((res) => ({
          city: res.data.name,
          country: res.data.sys.country,
          temp: res.data.main.temp,
          description: res.data.weather[0].description,
          icon: res.data.weather[0].icon,
        }));
        setCountriesWeather(weatherData);
      } catch (error) {
        console.error("Failed to fetch weather:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllWeather();
  }, [cities]);

  useEffect(() => {
    localStorage.setItem("savedCities", JSON.stringify(cities));
  }, [cities]);

  const handleCitySelect = (newCity) => {
    if (!cities.includes(newCity)) {
      setCities([newCity, ...cities]);
    }
  };

  return (
    <>
      <CitySelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCitySelect={handleCitySelect}
        currentCities={cities}
      />
      <div className="flex h-full flex-col overflow-hidden">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-semibold">Other Countries</h2>
          <p
            className="text-sm text-zinc-400 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            See All
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-3 overflow-y-auto pr-2">
          {loading ? (
            <p className="text-center text-zinc-400">Loading countries...</p>
          ) : (
            countriesWeather.map((weather) => (
              <CountryWeatherCard key={weather.city} weather={weather} />
            ))
          )}
        </div>
      </div>
    </>
  );
}
