import CurrentWeather from "../currentweather/CurrentWeather";
import TodayHighlights from "../highlights/TodayHighlights";
import OtherCountriesList from "../countries/OtherCountriesList";

export default function MainContent() {
  return (
    <main className="flex flex-1 gap-6 ">
      <div className="flex flex-col w-full h-full flex-1">
        <div className="flex flex-col  gap-6">
          <section className="bg-[#1e1e1e] rounded-2xl p-4 flex-1">
            <CurrentWeather />
          </section>

          <section className="bg-green-900 rounded-2xl p-4 flex-1">
            <OtherCountriesList />
          </section>
        </div>
      </div>

      <div className="flex flex-col w-full h-full flex-1">
        <div className="flex flex-col gap-4">
          <section className="bg-[#1e1e1e] rounded-2xl flex-1">
            <TodayHighlights />
          </section>

          <section className="bg-[#1e1e1e] rounded-2xl p-4 flex-1">
            <h2 className="font-semibold mb-2">10 Day Forecast</h2>
          </section>
        </div>
      </div>
    </main>
  );
}
