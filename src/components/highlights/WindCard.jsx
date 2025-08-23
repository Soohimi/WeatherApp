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
      <Card className="grid grid-rows-3  w-full h-full bg-[#232323] text-white gap-[16px] p-[16px]">
        <CardHeader className="flex flex-row items-center justify-around gap-2">
          <Avatar>
            <AvatarImage
              src="/icons/Visibility Icon 1.svg"
              alt="Wind image"
              className="h-6 w-6"
            />
          </Avatar>
          <CardTitle className="text-l">WindCard</CardTitle>
        </CardHeader>

        <CardDescription className="flex items-center justify-end">
          <div className="text-white">
            <span className="text-2xl font-bold">{title}52</span>
            <span className="text-l"> km/h</span>
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
