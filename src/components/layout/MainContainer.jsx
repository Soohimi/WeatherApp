import CurrentWeather from "../currentweather/CurrentWeather";
import TodayHighlights from "../highlights/TodayHighlights";
import OtherCountriesList from "../countries/OtherCountriesList";

export default function MainContent() {
  return (
    <main className="flex flex-1 gap-6 overflow-hidden h-full">
      <div className="flex flex-col flex-1 overflow-y-auto h-full">
        <div className="flex flex-col gap-6 h-full">
          <section className="bg-[#1e1e1e] rounded-2xl p-4">
            <CurrentWeather />
          </section>{" "}
          <section className="bg-[#1e1e1e] rounded-2xl p-4 flex-1 flex flex-col min-h-0">
            <OtherCountriesList />
          </section>
        </div>
      </div>
      <div className="flex flex-col flex-1 h-full">
        <div className="flex flex-col gap-4 flex-1 h-full">
          <section className="bg-[#1e1e1e] rounded-2xl flex-1">
            <TodayHighlights />
          </section>{" "}
          <section className="bg-[#1e1e1e] rounded-2xl p-4 flex-1 min-h-0">
            <h2 className="font-semibold">10 Day Forecast</h2>
          </section>
        </div>
      </div>
    </main>
  );
}
