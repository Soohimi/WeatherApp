import React from "react";
import SearchIcon from "../search";
import useWeather from "../../hooks/useWeather";
import TodayHighlights from "../highlights/TodayHighlights";

function WeatherCard() {
  const { weather } = useWeather();

  return (
    <div
      className="flex flex-col justify-start items-start px-4 pt-4 mt-[0rem] bg-gradient-to-br from-[#1a1a1a] to-[#222222] text-white w-[50%] h-[100%] rounded-3xl border border-[#333333] shadow-xl hover:shadow-2xl transition-all duration-300"
      dir="ltr"
    >
      <div className="w-[calc(100%-2rem)] pt-[1.25rem] pb-8 rounded-2xl bg-gradient-to-br from-[#181818] to-[#1f1f1f] border border-[#333333] h-full px-auto shadow-lg hover:shadow-xl transition-all duration-300">
        <TodayHighlights />
      </div>
    </div>
  );
}

export default WeatherCard;
