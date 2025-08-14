import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card.jsx";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar.jsx";
import useWeather from "../useWeather.js";
import React from "react";

function SunCard({ title, description, image }) {
  return (
    <>
      <Card className="grid grid-rows-3 place-items-center w-full h-full bg-[#232323] text-white">
        <CardHeader className="items-center justify-center">
          <Avatar>
            <AvatarImage
              src={`/icons/${image}.svg`}
              alt="Raindrop image"
              className="h-12 w-12"
            />
          </Avatar>
        </CardHeader>

        <CardDescription className="flex items-center justify-center">
          <div className="text-xl text-white font-bold">{title}</div>
        </CardDescription>

        <CardContent className="flex items-center justify-center">
          <div className="text-xs text-white text-center	">{description}</div>
        </CardContent>
      </Card>
    </>
  );
}

export default SunCard;
