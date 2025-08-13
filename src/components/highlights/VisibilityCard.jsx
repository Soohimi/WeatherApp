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
      <Card className="flex flex-col items-center justify-center w-full h-full bg-[#232323] text-white">
        <CardHeader>
          <CardTitle className="text-sm">VisibilityCard</CardTitle>
        </CardHeader>
      </Card>
    </>
  );
}

export default VisibilityCard;
