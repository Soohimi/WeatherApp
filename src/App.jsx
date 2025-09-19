import React, { useState, useEffect } from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import MainContent from "./components/layout/MainContainer";
import useWeather from "./hooks/useWeather";
import "./App.css";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    weather,
    loading,
    error,
    fetchWeatherForCurrentUserLocation,
    fetchWeather,
  } = useWeather();

  useEffect(() => {
    fetchWeatherForCurrentUserLocation();
  }, []);

  return (
    <div className="relative flex h-screen bg-black p-6 text-white" dir="ltr">
      <Sidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <div className="ml-0 lg:ml-6 flex flex-1 flex-col min-w-0">
        <Header
          onSearch={fetchWeather}
          onMenuClick={() => setIsMobileMenuOpen(true)}
        />

        <div className="mt-6 flex-1 overflow-y-auto">
          <MainContent weather={weather} loading={loading} error={error} />
        </div>
      </div>
    </div>
  );
}
