import { useState } from "react";
import { countryNames } from "./components/countryNames";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRealWeather = async () => {
    setLoading(true);
    setError(null);
    setWeather(null);

    const apiKey = "1e38b0715f5d2fccb9f8fca31e3efec3";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fa`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("شهر پیدا نشد");

      const data = await response.json();

      const countryCode = data.sys.country;
      const country = countryNames[countryCode] || countryCode;
      const temp = data.main.temp;
      const icon = data.weather[0].icon;
      const description = data.weather[0].description;

      setWeather({
        city: data.name,
        country,
        temp,
        icon,
        description,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", direction: "rtl" }}>
      <h1>وضعیت آب‌وهوا</h1>
      <input
        type="text"
        placeholder="نام شهر را وارد کنید"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchRealWeather} disabled={loading}>
        {loading ? "در حال دریافت..." : "نمایش وضعیت"}
      </button>

      {error && <p style={{ color: "red" }}>❌ {error}</p>}

      {weather && (
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
      )}
    </div>
  );
}

export default App;
