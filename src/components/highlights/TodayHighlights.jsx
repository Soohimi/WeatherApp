import React from "react";

function TodayHighlights() {
  return (
    <>
      <div className="pt-6 pl-6 text-xl">Today's Highlight</div>
      <div className="grid grid-cols-3 gap-4 p-4 justify-between items-center w-full h-full">
        <div class="bg-gray-800 text-white p-6 rounded-xl text-center">
          Card 1
        </div>
        <div class="bg-gray-800 text-white p-6 rounded-xl text-center">
          Card 2
        </div>
        <div class="bg-gray-800 text-white p-6 rounded-xl text-center">
          Card 3
        </div>
        <div class="bg-gray-800 text-white p-6 rounded-xl text-center">
          Card 4
        </div>
        <div class="bg-gray-800 text-white p-6 rounded-xl text-center">
          Card 5
        </div>
        <div class="bg-gray-800 text-white p-6 rounded-xl text-center">
          Card 6
        </div>
      </div>
    </>
  );
}

export default TodayHighlights;
