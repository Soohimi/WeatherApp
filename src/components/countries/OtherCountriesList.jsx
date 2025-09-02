import React from "react";

function OtherCountriesList() {
  return (
    <>
      <div className="overflow-hidden">
        <div className="p-3 flex flex-row justify-between items-center">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
            Other Countries
          </h2>
          <h3>See All</h3>
        </div>

        <div className="gap-4 flex flex-col jusify-between items-center px-3 pb-3">
          <div class="self-stretch pl-4 pr-4 py-4 bg-neutral-800 rounded-3xl inline-flex jusify-end  items-center gap-24">
            <div class="inline-flex flex-col justify-center items-start gap-2">
              <div class="self-stretch justify-start text-zinc-400 text-sm font-normal font-['Inter']">
                Australia
              </div>
              <div class="self-stretch justify-start text-white text-2xl font-normal font-['Inter']">
                Canberra
              </div>
              <div class="self-stretch justify-start text-white text-sm font-medium font-['Inter']">
                Sunny
              </div>
            </div>
            <div class="w-16 h-16 relative">
              <img
                class="w-16 h-16 left-[2px] top-[2.50px] absolute"
                src="https://placehold.co/68x68"
              />
            </div>
            <div class="text-center justify-start">
              <span class="text-white text-2xl font-semibold font-['Inter']">
                32°
              </span>
              <span class="text-white text-lg font-normal font-['Inter']">
                /
              </span>
              <span class="text-zinc-400 text-lg font-normal font-['Inter']">
                24°
              </span>
            </div>
          </div>
          <div class="self-stretch pl-4 pr-4 py-4 bg-neutral-800 rounded-3xl inline-flex justify-start items-center gap-28">
            <div class="inline-flex flex-col justify-center items-start gap-2">
              <div class="self-stretch justify-start text-zinc-400 text-sm font-normal font-['Inter']">
                Japan
              </div>
              <div class="self-stretch justify-start text-white text-2xl font-normal font-['Inter']">
                Tokyo
              </div>
              <div class="self-stretch justify-start text-white text-sm font-medium font-['Inter']">
                Mostly Sunny
              </div>
            </div>
            <div class="w-16 h-16 relative">
              <img
                class="w-16 h-12 left-[2px] top-[11px] absolute"
                src="https://placehold.co/69x51"
              />
            </div>
            <div class="text-center justify-start">
              <span class="text-white text-2xl font-semibold font-['Inter']">
                30°
              </span>
              <span class="text-white text-lg font-normal font-['Inter']">
                /
              </span>
              <span class="text-zinc-400 text-lg font-normal font-['Inter']">
                19°
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherCountriesList;
