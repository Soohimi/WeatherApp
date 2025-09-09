import React from "react";

function OtherCountriesList() {
  return (
    <>
      <div className="p-3 h-full overflow-hidden">
        <div className="flex justify-between items-center mb-4 flex-1">
          <h2 className="font-semibold justify-between items-center">
            Other Countries
          </h2>
          <p className="justify-between items-center">See All</p>
        </div>

        <div className="overflow-y-auto gap-2 flex flex-col">
          <div className="flex gap-10 flex-row flex-1 bg-blue-900 p-4 rounded-2xl items-center justify-between">
            <div>
              <div className="text-zinc-400 text-xs sm:text-sm font-normal font-['Inter']">
                Australia
              </div>
              <div className="text-white text-lg sm:text-xl md:text-2xl font-normal font-['Inter']">
                Canberra
              </div>
              <div className="text-white text-xs sm:text-sm font-medium font-['Inter']">
                Sunny
              </div>
            </div>
            <div>
              <img
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg"
                src="https://placehold.co/68x68"
                alt="Weather icon"
              />
            </div>
            <div>
              <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold font-['Inter']">
                32°
              </span>
              <span className="text-white text-sm sm:text-base md:text-lg font-normal font-['Inter']">
                /
              </span>
              <span className="text-zinc-400 text-sm sm:text-base md:text-lg font-normal font-['Inter']">
                24°
              </span>
            </div>
          </div>

          <div className="flex flex-row flex-1 bg-blue-900 p-4 rounded-2xl items-center justify-between">
            <div>
              <div className="text-zinc-400 text-xs sm:text-sm font-normal font-['Inter']">
                Iran
              </div>
              <div className="text-white text-lg sm:text-xl md:text-2xl font-normal font-['Inter']">
                Tehran
              </div>
              <div className="text-white text-xs sm:text-sm font-medium font-['Inter']">
                Sunny as hell
              </div>
            </div>
            <div>
              <img
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg"
                src="https://placehold.co/68x68"
                alt="Weather icon"
              />
            </div>
            <div>
              <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold font-['Inter']">
                32°
              </span>
              <span className="text-white text-sm sm:text-base md:text-lg font-normal font-['Inter']">
                /
              </span>
              <span className="text-zinc-400 text-sm sm:text-base md:text-lg font-normal font-['Inter']">
                24°
              </span>
            </div>
          </div>

          <div className="flex gap-10 flex-row flex-1 bg-blue-900 p-4 rounded-2xl items-center justify-between">
            <div>
              <div className="text-zinc-400 text-xs sm:text-sm font-normal font-['Inter']">
                Australia
              </div>
              <div className="text-white text-lg sm:text-xl md:text-2xl font-normal font-['Inter']">
                Canberra
              </div>
              <div className="text-white text-xs sm:text-sm font-medium font-['Inter']">
                Sunny
              </div>
            </div>
            <div>
              <img
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg"
                src="https://placehold.co/68x68"
                alt="Weather icon"
              />
            </div>
            <div>
              <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold font-['Inter']">
                32°
              </span>
              <span className="text-white text-sm sm:text-base md:text-lg font-normal font-['Inter']">
                /
              </span>
              <span className="text-zinc-400 text-sm sm:text-base md:text-lg font-normal font-['Inter']">
                24°
              </span>
            </div>
          </div>

          <div className="flex gap-10 flex-row flex-1 bg-blue-900 p-4 rounded-2xl items-center justify-between">
            <div>
              <div className="text-zinc-400 text-xs sm:text-sm font-normal font-['Inter']">
                Australia
              </div>
              <div className="text-white text-lg sm:text-xl md:text-2xl font-normal font-['Inter']">
                Canberra
              </div>
              <div className="text-white text-xs sm:text-sm font-medium font-['Inter']">
                Sunny
              </div>
            </div>
            <div>
              <img
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg"
                src="https://placehold.co/68x68"
                alt="Weather icon"
              />
            </div>
            <div>
              <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold font-['Inter']">
                32°
              </span>
              <span className="text-white text-sm sm:text-base md:text-lg font-normal font-['Inter']">
                /
              </span>
              <span className="text-zinc-400 text-sm sm:text-base md:text-lg font-normal font-['Inter']">
                24°
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherCountriesList;
