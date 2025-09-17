import React, { useState, useEffect } from "react";
import axios from "axios";
import { worldCities } from "../../utils/cities";

export default function CitySelectionModal({
  isOpen,
  onClose,
  onCitySelect,
  currentCities,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setResults([]);
      return;
    }

    setLoading(true);

    const delayDebounceFn = setTimeout(() => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=1&appid=${apiKey}`;

      axios
        .get(url)
        .then((response) => {
          const uniqueResults = new Map();
          response.data.forEach((item) => {
            const key = `${item.name},${item.state},${item.country}`;
            if (!uniqueResults.has(key)) {
              uniqueResults.set(key, {
                name: item.name,
                country: item.country,
                state: item.state,
              });
            }
          });

          const apiResults = Array.from(uniqueResults.values());

          const filteredApiResults = apiResults.filter(
            (city) => !currentCities.includes(city.name)
          );

          setResults(filteredApiResults);
        })
        .catch((error) => console.error("Failed to fetch cities:", error))
        .finally(() => setLoading(false));
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, currentCities]);

  if (!isOpen) return null;

  const citiesToDisplay =
    searchTerm.trim() === ""
      ? worldCities
          .filter((city) => !currentCities.includes(city))
          .map((city) => ({ name: city, country: "", state: "" }))
      : results;

  const handleSelect = (city) => {
    onCitySelect(city.name);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#1e1e1e] rounded-2xl p-6 w-full max-w-md h-3/4 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">Select a City</h2>
        <input
          type="text"
          placeholder="Search for any city or select from the list"
          className="w-full bg-neutral-800 rounded-lg p-2 mb-4 text-white border-neutral-700 border"
          onChange={(e) => setSearchTerm(e.target.value)}
          autoFocus
        />
        <div className="flex-1 overflow-y-auto">
          {loading && <p className="p-2 text-zinc-400">Searching...</p>}
          <ul>
            {citiesToDisplay.map((city, index) => (
              <li key={`${city.name}-${index}`}>
                <button
                  className="w-full text-left p-2 rounded-lg hover:bg-neutral-700"
                  onClick={() => handleSelect(city)}
                >
                  {city.name}
                  {city.state ? `, ${city.state}` : ""}
                  {city.country ? `, ${city.country}` : ""}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
