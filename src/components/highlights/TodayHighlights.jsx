import React from "react";
import FeelsLike from "./FeelsLike";
import HumidityCard from "./HumidityCard";
import SunCard from "./SunCard";
import VisibilityCard from "./VisibilityCard";
import WindCard from "./WindCard";
import useWeather from "../useWeather";

function TodayHighlights() {
  const { weather } = useWeather();

  return (
    <>
      <div className="pt-6 pl-6 text-xl">Today's Highlights</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <SunCard
          className="bg-[#444444] text-white rounded-xl text-center aspect-[2/1]"
          image="Sunrise"
          title="sunrise"
          description={weather?.sunrise}
        />
        <WindCard className="bg-[#444444] text-white rounded-xl text-center aspect-[2/1]" />
        <HumidityCard
          className="bg-[#444444] text-white rounded-xl text-center aspect-[2/1]"
          title={weather?.humidity}
        />
        <SunCard
          className="bg-[#444444] text-white rounded-xl text-center aspect-[2/1]"
          image="Sunset"
          title="sunset"
          description={weather?.sunset}
        />
        <FeelsLike className="bg-[#444444] text-white rounded-xl text-center aspect-[2/1]" />

        <VisibilityCard className="bg-[#444444] text-white rounded-xl text-center aspect-[2/1]" />
      </div>
    </>
  );
}

export default TodayHighlights;
