import React from "react";
import SearchIcon from "../search";

function WeatherCard() {
  return (
    <div
      className="flex justify-between items-start px-4 pt-4 bg-black text-white w-[50%] h-[100%] rounded-2xl border border-[#444444]"
      dir="ltr"
    >
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
  );
}

export default WeatherCard;
