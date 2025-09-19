import React from "react";
import { ICON_MAP, DEFAULT_ICON } from "../../utils/IconMap.js";

function CurrentWeather({ weather, loading, error }) {
  if (loading)
    return <div className="p-3 text-center">Getting your location...</div>;
  if (error) return <div className="p-3 text-center text-red-500">{error}</div>;
  if (!weather)
    return <div className="p-3 text-center">Please allow location access.</div>;

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
      <div className="flex lg:justify-between justify-center items-center pb-4">
        <div className="px-3 py-1.5 bg-neutral-700 rounded-xl inline-flex justify-center items-center gap-2">
          <div className="justify-start text-white text-sm font-normal">
            {weather.city}, {weather.country}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="text-white text-3xl sm:text-4xl lg:text-5xl font-medium">
            {dayOfWeek}
          </div>
          <div className="text-white text-sm sm:text-base font-normal">
            {formattedDate}
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center">
          <img
            src={ICON_MAP[weather.icon] || DEFAULT_ICON}
            alt={weather.description}
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40"
          />
        </div>

        <div className="flex flex-col items-center lg:items-end gap-2 text-center lg:text-right">
          <div className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium">
            {Math.round(weather.temp)}°C
          </div>
          <div className="flex flex-col">
            <div className="text-white text-base sm:text-lg font-medium capitalize">
              {weather.description}
            </div>
            <div className="text-white text-sm font-normal">
              Feels like {Math.round(weather.feelsLike)}°
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
