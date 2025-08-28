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

function WindCard({ title }) {
  return (
    <>
      <Card className="grid grid-rows-3 w-full h-full bg-[#232323] text-white rounded-lg sm:rounded-xl md:rounded-2xl p-0.5 sm:p-1 md:p-2 lg:p-3">
        <CardHeader className="flex flex-row items-center justify-around gap-0.5 w-full">
          <Avatar>
            <AvatarImage
              src="/icons/Visibility Icon 1.svg"
              alt="Wind image"
              className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5"
            />
            <AvatarFallback className="bg-[#444444] text-white text-xs font-medium">
              W
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-xs sm:text-sm md:text-base lg:text-lg text-white">
            Wind Status
          </CardTitle>
        </CardHeader>

        <CardDescription className="flex items-center justify-end">
          <div className="text-white text-center">
            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white">
              {title}
            </span>
            <span className="text-xs sm:text-sm md:text-base text-gray-300 ml-1">
              {" "}
              km/h
            </span>
          </div>
        </CardDescription>

        <CardContent className="flex items-center justify-end">
          <div className="text-xs text-gray-400 font-medium">
            9:00 AM
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default WindCard;
