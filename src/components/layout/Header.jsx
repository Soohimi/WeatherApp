import React, { useState } from "react";

export default function Header({ onSearch, onMenuClick }) {
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity("");
    }
  };

  return (
    <header className="flex justify-between items-center pt-2 sm:pt-3 md:pt-4 bg-black text-white w-full">
      <div className="flex items-center gap-4">
        <button className="lg:hidden text-white" onClick={onMenuClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div>
          <h1 className="text-xs sm:text-sm md:text-base text-slate-300">
            Hi, Welcome!
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-semibold">
            I hope you'll have a great day
          </p>
        </div>
      </div>
      <div className="flex gap-2 sm:gap-3 md:gap-4 items-center">
        <div className="w-12 h-12 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full overflow-hidden">
          <img src="/icons/Profile.svg" alt="profile" />
        </div>
      </div>
    </header>
  );
}
