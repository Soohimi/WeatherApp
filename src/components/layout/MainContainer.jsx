import CurrentWeather from "../currentweather/CurrentWeather";
import TodayHighlights from "../highlights/TodayHighlights";
import OtherCountriesList from "../countries/OtherCountriesList";

export default function MainContent() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-2xl flex-1 h-[45.75rem]">
      <div className="flex flex-col gap-6">
        <section className="bg-[#1e1e1e] rounded-2xl p-4 h-[42.9%]">
          <CurrentWeather />
        </section>

        <section className="bg-[#1e1e1e] rounded-2xl p-4 h-[53.8%]">
          <OtherCountriesList />
        </section>
      </div>

      <div className="flex flex-col gap-4">
        <section className="bg-[#1e1e1e] rounded-2xl h-[52.87%]">
          <TodayHighlights />
        </section>

        <section className="bg-[#1e1e1e] rounded-2xl p-4 h-[43.85%]">
          <h2 className="font-semibold mb-2">10 Day Forecast</h2>
        </section>
      </div>
    </main>
  );
}
