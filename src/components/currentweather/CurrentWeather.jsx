import React from "react";

function CurrentWeather() {
  return (
    <div className="p-3">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4 flex-1">
        <div className="px-3 py-1.5 bg-neutral-700 rounded-xl inline-flex justify-center items-center gap-2">
          <div className="w-4 h-4 relative overflow-hidden">
            <div className="w-3 h-4 left-[2.40px] top-[1.60px] absolute bg-white"></div>
          </div>
          <div className="justify-start text-white text-sm font-normal font-['Inter']">
            Dhaka, Bangladesh
          </div>
        </div>

        <div className="p-1.5 bg-neutral-700 rounded-xl inline-flex justify-center items-end">
          <div className="w-4 h-4 relative overflow-hidden">
            <div className="w-3 h-2 left-[2.67px] top-[4px] absolute outline outline-1.5 outline-offset-[-0.5px] outline-white"></div>
          </div>
          <div className="w-3 h-3 relative overflow-hidden">
            <div className="w-1 h-2 left-[3.33px] top-[4.67px] absolute outline outline-1 outline-offset-[-0.5px] outline-white">
              C
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
        {/* Left Section - Day and Date */}
        <div className="flex flex-col">
          <div className="justify-start text-white text-3xl lg:text-4xl font-medium font-['Inter'] mb-2">
            Sunday
          </div>
          <div className="self-stretch justify-start text-white text-sm lg:text-base font-normal font-['Inter']">
            04 Aug, 2024
          </div>
        </div>

        {/* Center Section - Weather Icon */}
        <div className="flex-1 flex justify-center">
          <img
            src={"/assets/dark/sunny.svg"}
            alt="weather icon"
            className="w-20 h-20 lg:w-24 lg:h-24"
          />
        </div>

        {/* Right Section - Temperature and Conditions */}
        <div className="inline-flex flex-col justify-start items-start gap-5">
          <div className="flex flex-col justify-start items-end">
            <div className="self-stretch justify-start text-white text-3xl lg:text-4xl font-medium font-['Inter']">
              28°C
            </div>
            <div className="self-stretch text-right justify-start text-zinc-400 text-lg font-medium font-['Inter']">
              /24°C
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
            <div className="w-24 justify-start text-white text-lg font-medium font-['Inter']">
              Heavy Rain
            </div>
            <div className="text-center justify-start text-white text-sm font-normal font-['Inter']">
              Feels like 31°
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
