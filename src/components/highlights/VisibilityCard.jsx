import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

function VisibilityCard() {
  return (
    <>
      <Card className="w-full h-full bg-[#181818] border border-[#444444]">
        <CardHeader>
          <CardTitle className="text-xl">VisibilityCard</CardTitle>
        </CardHeader>
      </Card>
    </>
  );
}

export default VisibilityCard;
