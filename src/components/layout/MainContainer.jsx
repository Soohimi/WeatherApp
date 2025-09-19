import CurrentWeather from "../currentweather/CurrentWeather";
import TodayHighlights from "../highlights/TodayHighlights";
import TenDayForecast from "../forecast/DayForecast";
import OtherCountriesList from "../countries/OtherCountriesList";

export default function MainContent({ weather, loading, error }) {
  return (
    <main className="flex h-full w-full gap-6">
      <div className="flex flex-1 flex-col gap-6">
        <section className="rounded-2xl bg-[#1e1e1e] p-4">
          <CurrentWeather weather={weather} loading={loading} error={error} />
        </section>
        <section className="flex min-h-0 flex-1 flex-col rounded-2xl bg-[#1e1e1e] p-4">
          <OtherCountriesList />
        </section>
      </div>

      <div className="flex flex-1 flex-col gap-4 min-w-0">
        <section className="flex-1 rounded-2xl bg-[#1e1e1e]">
          <TodayHighlights weather={weather} />
        </section>

        <section className="flex flex-1 flex-col overflow-hidden rounded-2xl bg-[#1e1e1e] p-4">
          <TenDayForecast />
        </section>
      </div>
    </main>
  );
}
