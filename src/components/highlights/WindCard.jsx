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

function WindCard() {
  return (
    <>
      <Card className="grid grid-rows-3 place-items-center w-full h-full bg-[#232323] text-white">
        <CardHeader className="flex flex-row items-center justify-center gap-2">
          <Avatar>
            <AvatarImage
              src="/icons/Visibility Icon 1.svg"
              alt="Wind image"
              className="h-6 w-6"
            />
          </Avatar>
          <CardTitle className="text-xs m-0">WindCard</CardTitle>
        </CardHeader>

        <CardDescription className="flex items-center justify-center">
          <div className="text-2xl text-white pt-4 pb-4 font-bold">
            7.9 Km/h
          </div>
        </CardDescription>

        <CardContent className="flex items-center justify-center">
          <div className="text-l text-white">6:49 Am</div>
        </CardContent>
      </Card>
    </>
  );
}

export default WindCard;
