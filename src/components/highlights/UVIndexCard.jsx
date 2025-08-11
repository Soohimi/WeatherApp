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
      <Card className="w-full h-full bg-[#181818] border border-[#444444]">
        <CardHeader>
          <CardTitle className="text-xl">UVIndexCard</CardTitle>
        </CardHeader>
      </Card>
    </>
  );
}

export default UVIndexCard;
