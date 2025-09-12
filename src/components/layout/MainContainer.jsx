// src/components/layout/MainContainer.jsx

import CurrentWeather from "../currentweather/CurrentWeather";
import TodayHighlights from "../highlights/TodayHighlights";
import TenDayForecast from "../forecast/DayForecast";
import OtherCountriesList from "../countries/OtherCountriesList";

export default function MainContent() {
  return (
    // The main container is a simple flex row.
    <main className="flex h-full w-full gap-6">
      {/* --- LEFT COLUMN --- */}
      {/* 'flex-1' makes this column take 50% of the available space. */}
      <div className="flex flex-1 flex-col gap-6">
        <section className="rounded-2xl bg-[#1e1e1e] p-4">
          <CurrentWeather />
        </section>
        <section className="flex min-h-0 flex-1 flex-col rounded-2xl bg-[#1e1e1e] p-4">
          <OtherCountriesList />
        </section>
      </div>

      {/* --- RIGHT COLUMN --- */}
      {/* 'flex-1' makes this column take the other 50% of the space. */}
      {/* 'min-w-0' is the CRITICAL FIX. It forces this column to obey its
          width and NOT stretch to fit the wide forecast component. */}
      <div className="flex flex-1 flex-col gap-4 min-w-0">
        <section className="flex-1 rounded-2xl bg-[#1e1e1e]">
          <TodayHighlights />
        </section>

        {/* This section's 'overflow-hidden' creates the final boundary
            that forces the TenDayForecast component inside to scroll. */}
        <section className="flex flex-1 flex-col overflow-hidden rounded-2xl bg-[#1e1e1e] p-4">
          <TenDayForecast />
        </section>
      </div>
    </main>
  );
}
