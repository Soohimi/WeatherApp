import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

import React from "react";

function UVIndexCard() {
  return (
    <>
      <Card className="flex flex-col items-center justify-center w-full h-full bg-[#232323] text-white">
        <CardHeader>
          <CardTitle className="text-sm">UVIndexCard</CardTitle>
        </CardHeader>
      </Card>
    </>
  );
}

export default UVIndexCard;
