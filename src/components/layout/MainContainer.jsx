export default function MainContent() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-2xl flex-1 h-[732px]">
      {/* Left Column */}
      <div className="flex flex-col gap-6">
        {/* Current Weather */}
        <section className="bg-[#222] rounded-2xl p-4 h-[42.9%]">
          <h2 className="font-semibold mb-2">Current Weather</h2>
          {/* محتوا */}
        </section>

        {/* Other Countries */}
        <section className="bg-[#222] rounded-2xl p-4 h-[53.8%]">
          <h2 className="font-semibold mb-2">Other Countries</h2>
          {/* محتوا */}
        </section>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-4">
        {/* Today's Highlight */}
        <section className="bg-[#222] rounded-2xl p-4 h-[52.87%]">
          <h2 className="font-semibold mb-2">Today’s Highlight</h2>
          {/* محتوا */}
        </section>

        {/* 10 Day Forecast */}
        <section className="bg-[#222] rounded-2xl p-4 h-[43.85%]">
          <h2 className="font-semibold mb-2">10 Day Forecast</h2>
          {/* محتوا */}
        </section>
      </div>
    </main>
  );
}
