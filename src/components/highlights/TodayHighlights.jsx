import React from "react";
import UVIndexCard from "./UVIndexCard";
import HumidityCard from "./HumidityCard";
import SunCard from "./SunCard";
import VisibilityCard from "./VisibilityCard";
import WindCard from "./WindCard";

function TodayHighlights() {
  return (
    <>
      <div className="pt-6 pl-6 text-xl">Today's Highlight</div>
      <div className="grid grid-cols-3 gap-4  p-4 justify-between items-center w-full h-[370px]">
        <UVIndexCard className="bg-[#444444] text-white  rounded-xl text-center" />
        <HumidityCard className="bg-[#444444] text-white  rounded-xl text-center" />
        <SunCard className="bg-[#444444] text-white  rounded-xl text-center" />
        <SunCard className="bg-[#444444] text-white  rounded-xl text-center" />
        <VisibilityCard className="bg-[#444444] text-white  rounded-xl text-center" />
        <WindCard className="bg-[#444444] text-white  rounded-xl text-center" />
      </div>
    </>
  );
}

export default TodayHighlights;
