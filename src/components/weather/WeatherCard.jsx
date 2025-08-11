import React from "react";
import SearchIcon from "../search";
import TodayHighlights from "../highlights/TodayHighlights";

function WeatherCard() {
  return (
    <div
      className="flex flex-col justify-start items-start px-4 pt-4 bg-black text-white w-[50%] h-[100%] rounded-3xl border border-[#444444]"
      dir="ltr"
    >
      <div className="flex justify-between items-start w-full mb-4">
        <div className="flex items-center gap-4 w-[60%]">
          <div>
            <div>avatar</div>
          </div>
          <div>
            <h2>28°C</h2>
            <p>Sunny</p>
            <p>Tehran, IR</p>
          </div>
        </div>
        <div className="flex items-center gap-2 w-[40%] justify-end">
          <SearchIcon />
        </div>
      </div>
      <div className="w-[calc(100%-2rem)] mt-20 mb-8 rounded-2xl bg-[#181818] border border-[#444444] h-full mx-auto">
        {" "}
        <TodayHighlights />
      </div>
    </div>
  );
}

export default WeatherCard;
