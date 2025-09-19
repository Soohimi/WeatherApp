import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar.jsx";
import React from "react";

function HumidityCard({ title }) {
  return (
    <>
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
          </span>{" "}
        </CardDescription>

        <CardContent className="flex items-center justify-center">
          <div className="text-xs text-white text-center">Humidity is good</div>
        </CardContent>
      </Card>
    </>
  );
}

export default HumidityCard;
