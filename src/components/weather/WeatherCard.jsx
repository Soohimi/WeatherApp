import React from "react";
import SearchIcon from "../search";
import useWeather from "../../hooks/useWeather";
import TodayHighlights from "../highlights/TodayHighlights";

function WeatherCard() {
  const { weather } = useWeather();

  return (
    <div
      className="flex flex-col justify-start items-start px-4 pt-4 mt-[0rem] bg-black text-white w-[50%] h-[100%] rounded-3xl border border-[#444444]"
      dir="ltr"
    >
              <div className="w-[calc(100%-2rem)] mt-[1.25rem] mb-8 rounded-2xl bg-[#181818] border border-[#444444] h-full mx-auto">
        <TodayHighlights />
      </div>
    </div>
  );
}

export default WeatherCard;
