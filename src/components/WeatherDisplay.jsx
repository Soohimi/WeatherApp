function WeatherDisplay({ weather }) {
  if (!weather) return null;

  return (
    <div style={{ marginTop: "1rem" }}>
      <h2>
        {weather.city}، {weather.country}
      </h2>
      <p>🌡️ دما: {weather.temp} درجه</p>
      <p>🌤️ وضعیت: {weather.description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt={weather.description}
      />
    </div>
  );
}

export default WeatherDisplay;
