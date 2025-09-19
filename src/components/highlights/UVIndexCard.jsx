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

const getUviDescription = (uvi) => {
  if (uvi === null || uvi === undefined) return "N/A";
  const uviValue = Math.round(uvi);
  if (uviValue <= 2) return "Low";
  if (uviValue <= 5) return "Moderate";
  if (uviValue <= 7) return "High";
  if (uviValue <= 10) return "Very High";
  return "Extreme";
};

function UVIndexCard({ value }) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const uviDescription = getUviDescription(value);
  const displayValue =
    value === null || value === undefined ? "--" : Math.round(value);

  if (isDesktop) {
    return (
      <Card className="grid grid-rows-3 w-full h-full bg-[#232323] text-white rounded-2xl p-3">
        <CardHeader className="flex flex-row items-center justify-center gap-2 w-full">
          <Avatar>
            <AvatarImage
              src="/icons/Vector.svg"
              alt="uv icon"
              className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5"
            />
          </Avatar>
          <CardTitle className="text-xs sm:text-sm md:text-base lg:text-lg text-white">
            UV Index
          </CardTitle>
        </CardHeader>
        <CardDescription className="flex items-center justify-center p-0">
          <div className="text-white">
            <span className="text-3xl font-bold">{displayValue}</span>
          </div>
        </CardDescription>
        <CardContent className="flex items-center justify-center p-0">
          <div className="text-base text-white">{uviDescription}</div>
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Card className="flex flex-col items-center justify-center gap-2 w-full h-full bg-[#232323] text-white rounded-2xl p-3">
        <div className="flex items-center gap-2 text-zinc-400">
          <Avatar className="h-4 w-4">
            <AvatarImage src="/icons/Vector.svg" alt="uv icon" />
          </Avatar>
          <CardTitle className="text-sm">UV Index</CardTitle>
        </div>
        <div className="text-2xl font-bold">{displayValue}</div>
        <div className="text-xs">{uviDescription}</div>
      </Card>
    );
  }
}

export default UVIndexCard;
