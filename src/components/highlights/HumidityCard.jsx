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

function HumidityCard() {
  return (
    <>
      <Card className="grid grid-rows-3 place-items-center w-full h-full bg-[#232323] text-white">
        <CardHeader className="flex flex-row items-center justify-center">
          <Avatar>
            <AvatarImage
              src="/icons/Raindrops.svg"
              alt="Raindrop image"
              className="h-10 w-10"
            />
          </Avatar>
          <CardTitle className="text-xs m-0">Humidity</CardTitle>
        </CardHeader>

        <CardDescription className="text-white pt-4 pb-4">
          <span className="text-2xl font-bold">85</span>
          <span className="text-l"> %</span>
        </CardDescription>

        <CardContent className="flex items-center justify-center">
          <div className="text-xs text-white text-center	">Humidity is good</div>
        </CardContent>
      </Card>
    </>
  );
}

export default HumidityCard;
