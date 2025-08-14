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

function UVIndexCard() {
  return (
    <>
      <Card className="grid grid-rows-3 place-items-center w-full h-full bg-[#232323] text-white">
        <CardHeader className="flex flex-row items-center justify-center gap-2">
          <Avatar>
            <AvatarImage src="/" alt="" className="h-6 w-6" />
          </Avatar>
          <CardTitle className="text-xs m-0">Feels like</CardTitle>
        </CardHeader>

        <CardDescription className="flex items-center justify-center">
          <div className="text-white pt-4 pb-4">
            <span className="text-2xl font-bold">5.6</span>
            <span className="text-l"> km</span>
          </div>
        </CardDescription>

        <CardContent className="flex items-center justify-center">
          <div className="text-l text-white">6:49 Am</div>
        </CardContent>
      </Card>
    </>
  );
}

export default UVIndexCard;
