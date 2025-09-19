import React from "react";
import SunCard from "./SunCard";
import WindCard from "./WindCard";
import UVIndexCard from "./UVIndexCard";
import HumidityCard from "./HumidityCard";
import VisibilityCard from "./VisibilityCard";

function TodayHighlights({ weather }) {
  if (!weather) {
    return (
      <div className="flex h-full flex-col p-6">
        <h2 className="text-2xl font-bold text-white">Today's Highlights</h2>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-zinc-400">Loading highlights...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <div className="pl-2 sm:pl-4 md:pl-6 pt-2 sm:pt-4 md:pt-6">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
          Today's Highlights
        </h2>
      </div>

      <div
        className="grid flex-1 gap-0.5 sm:gap-1 md:gap-2 lg:gap-3 p-1 sm:p-2 md:p-3 lg:p-4"
        style={{
          gridTemplateColumns: "1fr 1fr 1.5fr",
          gridTemplateRows: "1fr 1fr",
        }}
      >
        <WindCard title={weather?.windSpeed} />
        <HumidityCard title={weather?.humidity} />
        <SunCard
          image="Sunrise"
          title="sunrise"
          description={weather?.sunrise}
        />
        <UVIndexCard value={weather?.uvi} />{" "}
        <VisibilityCard title={weather?.visibility} />
        <SunCard image="Sunset" title="sunset" description={weather?.sunset} />
      </div>
    </div>
  );
}

export default TodayHighlights;
