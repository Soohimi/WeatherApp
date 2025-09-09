// OtherCountriesList.jsx

import React from "react";

// Dummy data - replace with your actual data from an API
const countries = [
  {
    country: "Australia",
    city: "Canberra",
    condition: "Sunny",
    tempHigh: 32,
    tempLow: 24,
    icon: "☀️",
  },
  {
    country: "Japan",
    city: "Tokyo",
    condition: "Mostly Sunny",
    tempHigh: 30,
    tempLow: 19,
    icon: "🌤️",
  },
  {
    country: "United Kingdom",
    city: "London",
    condition: "Cloudy",
    tempHigh: 18,
    tempLow: 12,
    icon: "☁️",
  },
  {
    country: "Canada",
    city: "Ottawa",
    condition: "Snowing",
    tempHigh: -2,
    tempLow: -10,
    icon: "❄️",
  },
  {
    country: "Brazil",
    city: "Brasília",
    condition: "Thunderstorm",
    tempHigh: 25,
    tempLow: 18,
    icon: "⛈️",
  },
];

function CountryWeatherCard({ data }) {
  return (
    <div className="grid grid-cols-3 items-center self-stretch rounded-2xl bg-neutral-800 p-3">
      {/* Column 1: Text */}
      <div className="flex flex-col items-start justify-center">
        <div className="text-sm text-zinc-400">{data.country}</div>
        <div className="text-xl font-medium text-white">{data.city}</div>
        <div className="text-sm text-white">{data.condition}</div>
      </div>
      {/* Column 2: Icon */}
      <div className="flex justify-center items-center text-4xl">
        {data.icon}
        {/* Or use an <img /> tag with a real icon */}
      </div>
      {/* Column 3: Temperature */}
      <div className="flex items-center justify-end text-xl font-semibold">
        <span className="text-white">{data.tempHigh}°</span>
        <span className="text-zinc-400 font-normal">/{data.tempLow}°</span>
      </div>
    </div>
  );
}

export default function OtherCountriesList() {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-semibold">Other Countries</h2>
        <p className="text-sm text-zinc-400 cursor-pointer">See All</p>
      </div>
      {/* This div will now scroll perfectly */}
      <div className="flex flex-1 flex-col gap-3 overflow-y-auto pr-2">
        {countries.map((country, index) => (
          <CountryWeatherCard key={index} data={country} />
        ))}
      </div>
    </div>
  );
}
