import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Avatar, AvatarImage } from "../ui/avatar.jsx";
import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

function HumidityCard({ title }) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Card className="grid grid-rows-3 w-full bg-[#232323] text-white rounded-lg sm:rounded-xl md:rounded-2xl p-0.5 sm:p-1 md:p-2 lg:p-3">
        <CardHeader className="flex flex-row items-center justify-center gap-2 w-full">
          <Avatar>
            <AvatarImage
              src="/icons/Raindrops.svg"
              alt="Raindrop image"
              className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5"
            />
          </Avatar>
          <CardTitle className="text-xs sm:text-sm md:text-base lg:text-lg text-white">
            Humidity
          </CardTitle>
        </CardHeader>
        <CardDescription className="flex items-center justify-center">
          <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white">
            {title}
          </span>
          <span className="text-xs sm:text-sm md:text-base text-gray-300 pl-1">
            %
          </span>
        </CardDescription>
        <CardContent className="flex items-center justify-center">
          <div className="text-xs text-white text-center">Humidity is good</div>
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Card className="flex flex-col items-center justify-center gap-2 w-full h-full bg-[#232323] text-white rounded-2xl p-3">
        <div className="flex items-center gap-2 text-zinc-400">
          <Avatar className="h-4 w-4">
            <AvatarImage src="/icons/Raindrops.svg" alt="Raindrop image" />
          </Avatar>
          <CardTitle className="text-sm">Humidity</CardTitle>
        </div>
        <div className="text-2xl font-bold">
          {title}
          <span className="text-base font-normal">%</span>
        </div>
        <div className="text-xs">Humidity is good</div>
      </Card>
    );
  }
}

export default HumidityCard;
