import React, { useEffect } from "react";
import useWeather from "../../hooks/useWeather";
import { ICON_MAP, DEFAULT_ICON } from "../../utils/IconMap";

function CurrentWeather() {
  const { weather, loading, error, fetchWeather } = useWeather();

  useEffect(() => {
    fetchWeather("Dhaka");
  }, []);

  if (loading) return <div className="p-3 text-center">Loading...</div>;
  if (error) return <div className="p-3 text-center text-red-500">{error}</div>;
  if (!weather)
    return <div className="p-3 text-center">Enter a city to begin.</div>;

  const currentDate = new Date();
  const dayOfWeek = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="p-3">
      <div className="flex justify-between items-center pb-4">
        <div className="px-3 py-1.5 bg-neutral-700 rounded-xl inline-flex justify-center items-center gap-2">
          <div className="justify-start text-white text-sm font-normal">
            {weather.city}, {weather.country}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
        <div className="flex flex-col">
          <div className="justify-start text-white text-3xl lg:text-4xl font-medium pb-2">
            {dayOfWeek}
          </div>
          <div className="self-stretch justify-start text-white text-sm lg:text-base font-normal">
            {formattedDate}
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={ICON_MAP[weather.icon] || DEFAULT_ICON}
            alt={weather.description}
            className="w-35 h-35 lg:w-40 lg:h-40"
          />
        </div>

        <div className="inline-flex flex-col justify-start items-start gap-5">
          <div className="flex flex-col justify-start items-end">
            <div className="self-stretch justify-start text-white text-3xl lg:text-4xl font-medium">
              {Math.round(weather.temp)}°C
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
            <div className="w-24 justify-start text-white text-lg font-medium capitalize">
              {weather.description}
            </div>
            <div className="text-center justify-start text-white text-sm font-normal">
              Feels like {Math.round(weather.feelsLike)}°
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
