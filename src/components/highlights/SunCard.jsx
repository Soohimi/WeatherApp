import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card.jsx";
import React from "react";

function SunCard() {
  return (
    <>
      <Card className="w-full h-full bg-[#181818] border border-[#444444]">
        <CardHeader>
          <CardTitle className="text-xl">SunCard</CardTitle>
        </CardHeader>
      </Card>
    </>
  );
}

export default SunCard;
