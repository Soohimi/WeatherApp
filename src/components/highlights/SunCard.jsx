import { Card, CardHeader, CardContent, CardDescription } from "../ui/card.jsx";
import { Avatar, AvatarImage } from "../ui/avatar.jsx";
import React from "react";

function SunCard({ title, description, image }) {
  return (
    <Card className="flex items-center w-full bg-[#232323] text-white p-0.5 sm:p-1 md:p-2 lg:p-3 rounded-lg sm:rounded-xl md:rounded-2xl">
      <CardHeader className="flex items-center justify-center p-0 pr-0.5 sm:pr-1 md:pr-2 lg:pr-3">
        <Avatar className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12">
          <AvatarImage
            src={`/icons/${image}.svg`}
            alt="icon"
            className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-10"
          />
        </Avatar>
      </CardHeader>

      <CardContent className="flex flex-col justify-center gap-0 p-0">
        <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">
          {title}
        </div>
        <CardDescription className="text-xs sm:text-sm text-gray-300">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default SunCard;
