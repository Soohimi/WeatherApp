import React from "react";
import SunCard from "./SunCard";
import WindCard from "./WindCard";
import FeelsLike from "./FeelsLike";
import HumidityCard from "./HumidityCard";
import useWeather from "../../hooks/useWeather";
import VisibilityCard from "./VisibilityCard";

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
        <WindCard
          className="bg-[#444444] text-white rounded-xl text-center aspect-[2/1]"
          title={weather?.windSpeed}
        />
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
        <FeelsLike
          className="bg-[#444444] text-white rounded-xl text-center aspect-[2/1]"
          title={weather?.FeelsLike}
        />

        <VisibilityCard
          className="bg-[#444444] text-white rounded-xl text-center aspect-[2/1]"
          title={weather?.Visibility}
        />
      </div>
    </>
  );
}

export default TodayHighlights;
