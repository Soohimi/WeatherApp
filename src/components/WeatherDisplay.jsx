function WeatherDisplay({ weather }) {
  if (!weather) return null;

  return (
    <div className="mt-8 p-6 bg-slate-800 rounded-lg border border-slate-600 w-full max-w-md text-center">
      <h2 className="text-2xl font-bold mb-4 text-white">
        {weather.city}، {weather.country}
      </h2>
      <div className="flex items-center justify-center mb-4">
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt={weather.description}
          className="w-16 h-16"
        />
      </div>
      <p className="text-lg mb-2 text-slate-200">🌡️ دما: {weather.temp} درجه</p>
      <p className="text-md text-slate-300">🌤️ وضعیت: {weather.description}</p>
    </div>
  );
}

export default WeatherDisplay;
