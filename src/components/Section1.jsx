import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Hero from "./Hero";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { ChartColumnStacked } from "lucide-react";

const Section1 = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-red-700 text-4xl text-center ">
        {/* slogan */}
        Your Blood Can be a second Life for Someone
      </div>
      <div className="flex  items-center justify-between">
        <div className="flex  items-center border-none justify-center mt-10 " >
          <Card className="rounded mr-5  shadow-lg border-none bg-red-700 w-[200px] h-[140px] ">
            <CardHeader className="flex items-center justify-between  text-white">
              <CardTitle>Units Available</CardTitle>
              <CardDescription>1200+ units</CardDescription>
              <Button variant="secondary" className="bg-white text-red-700 hover:bg-red-700 hover:text-white rounded-lg" >Donate Now</Button>
            </CardHeader>

          </Card>

          <Card className="rounded shadow-lg bg-red-700 text-white w-[200px] h-[140px] ">
            <CardHeader className="flex items-center justify-between">
              <CardTitle>People Helped</CardTitle>
              <CardDescription>600+</CardDescription>
              <Button variant="secondary" className="bg-white text-red-700 hover:bg-red-700 hover:text-white rounded-lg" >Ask Blood</Button>
            </CardHeader>
          </Card>
        </div>
        <div className=" ml-[60px] h-[240px] ">
        <Hero/>
        </div>
      </div>
    </div>
  );
};

export default Section1;
