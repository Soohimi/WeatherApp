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

function FeelsLike({ title }) {
  return (
    <>
      <Card className="grid grid-rows-3 w-full h-full bg-[#232323] text-white rounded-lg sm:rounded-xl md:rounded-2xl p-0.5 sm:p-1 md:p-2 lg:p-3">
        <CardHeader className="flex flex-row items-center justify-center gap-0.5 w-full">
          <Avatar>
            <AvatarImage
              src="/"
              alt=""
              className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5"
            />
          </Avatar>
          <CardTitle className="text-xs sm:text-sm md:text-base lg:text-lg text-white">
            UV Index
          </CardTitle>
        </CardHeader>

        <CardDescription className="flex items-center justify-end">
          <div className="text-white pt-0 pb-0">
            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">
              {title}
            </span>
            <span className="text-xs sm:text-sm md:text-base"> uv</span>
          </div>
        </CardDescription>

        <CardContent className="flex items-center justify-end">
          <div className="text-xs sm:text-sm md:text-base text-white">
            Moderate UV
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default FeelsLike;
