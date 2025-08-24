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
      <Card className="grid grid-rows-3 place-items-center w-full h-[90%] bg-[#232323] text-white">
        <CardHeader className="flex flex-row items-center justify-center">
          <Avatar>
            <AvatarImage
              src="/icons/Raindrops.svg"
              alt="Raindrop image"
              className="h-6 w-6 flex items-center justify-center"
            />
          </Avatar>
          <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl ">
            Humidity
          </CardTitle>
        </CardHeader>

        <CardDescription className="text-white">
          <span className="text-2xl font-bold">{title}</span>
          <span className="text-sm"> %</span>
        </CardDescription>

        <CardContent className="flex items-center justify-center">
          <div className="text-xs text-white text-center	">Humidity is good</div>
        </CardContent>
      </Card>
    </>
  );
}

export default HumidityCard;
