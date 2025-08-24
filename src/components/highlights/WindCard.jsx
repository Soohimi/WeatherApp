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
      <Card className="grid grid-rows-3  w-full h-[90%] bg-[#232323] text-white gap-[4.13%] p-[1rem]">
        <CardHeader className="flex flex-row items-center justify-between gap-2">
          <Avatar>
            <AvatarImage
              src="/icons/Visibility Icon 1.svg"
              alt="Wind image"
              className="h-6 w-6"
            />
          </Avatar>
          <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl">
            WindCard
          </CardTitle>
        </CardHeader>

        <CardDescription className="flex items-center justify-end">
          <div className="text-white">
            <span className="text-2xl font-bold">{title}52</span>
            <span className="text-sm"> km/h</span>
          </div>
        </CardDescription>

        <CardContent className="flex items-center justify-end">
          <div className="text-xs text-white">6:49 Am</div>
        </CardContent>
      </Card>
    </>
  );
}

export default WindCard;
