// src/components/forecast/TenDayForecast.jsx

import React from "react";

const forecastData = [
  { day: "Today", icon: "🌧️", temp: 28 },
  { day: "Mon", icon: "🌤️", temp: 31 },
  { day: "Tue", icon: "🌧️", temp: 27 },
  { day: "Wed", icon: "🌦️", temp: 29 },
  { day: "Thu", icon: "☀️", temp: 32 },
  { day: "Fri", icon: "☀️", temp: 32 },
  { day: "Sat", icon: "☀️", temp: 32 },
];

function ForecastDayCard({ data }) {
  return (
    <div className="flex w-28 flex-shrink-0 flex-col items-center justify-around rounded-3xl border border-white/20 bg-[#232323] p-4">
      <p className="font-medium text-zinc-200">{data.day}</p>
      <hr className="h-[0.125rem] w-[80%] border-0 bg-gradient-to-r from-transparent via-[#4A4949] to-transparent" />
      <span className="text-4xl drop-shadow-lg">{data.icon}</span>
      <p className="text-xl font-semibold">{data.temp}°C</p>
    </div>
  );
}

// This is the new, self-contained component
export default function TenDayForecast() {
  return (
    // The main component wrapper is now a flex column
    <div className="flex h-full flex-col w-full overflow-hidden">
      {/* 1. The Title is now inside this component */}
      <h2 className="mb-4 flex-shrink-0 font-semibold">10 Day Forecast</h2>

      {/* 2. A new wrapper to correctly handle the remaining vertical space */}
      <div className="flex-1 overflow-hidden">
        {/* 3. The scrolling container takes the full height of the wrapper */}
        <div className="flex h-full gap-4 overflow-x-auto pb-3">
          {forecastData.map((day, index) => (
            <ForecastDayCard key={index} data={day} />
          ))}
        </div>
      </div>
    </div>
  );
}
