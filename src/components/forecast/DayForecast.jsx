import React from "react";
import { ICON_MAP, DEFAULT_ICON } from "../../utils/IconMap";

function ForecastDayCard({ dayData }) {
  const dayOfWeek = new Date(dayData.dt * 1000).toLocaleDateString("en-US", {
    weekday: "short",
  });

  return (
    <div className="flex w-28 flex-shrink-0 flex-col items-center justify-around rounded-3xl border border-white/20 bg-[#232323] p-4">
      <p className="font-medium text-zinc-200">{dayOfWeek}</p>
      <hr className="h-[0.125rem] w-[80%] border-0 bg-gradient-to-r from-transparent via-[#4A4949] to-transparent" />

      <img
        src={ICON_MAP[dayData.weather[0].icon] || DEFAULT_ICON}
        alt={dayData.weather[0].description}
        className="w-12 h-12"
      />

      <p className="text-xl font-semibold">{Math.round(dayData.temp.day)}°C</p>
    </div>
  );
}

export default function TenDayForecast({ weather }) {
  if (!weather || !weather.dailyForecast) {
    return (
      <div className="flex h-full flex-col">
        <h2 className="mb-4 flex-shrink-0 font-semibold">8-Day Forecast</h2>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-zinc-400">Loading forecast...</p>
        </div>
      </div>
    );
  }

  const forecastToDisplay = weather.dailyForecast.slice(0, 8);

  return (
    <div className="flex h-full flex-col">
      <h2 className="mb-4 flex-shrink-0 font-semibold">8-Day Forecast</h2>
      <div className="flex-1 overflow-hidden">
        <div className="flex h-full items-stretch gap-4 overflow-x-auto pb-3">
          {forecastToDisplay.map((day, index) => (
            <ForecastDayCard key={index} dayData={day} />
          ))}
        </div>
      </div>
    </div>
  );
}
