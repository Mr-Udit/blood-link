
import { Input } from "./ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { bloodDonationFeedback } from "@/assets/constants"
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
const BloodSearch = () => {
  return (
    <div className="container p-6 mx-auto">
      <h2 className="mb-4 text-2xl font-bold text-center text-red-500">Find Blood Donors</h2>
      <div className="flex justify-center mb-6">
        <Input
          className="text-red-700 bg-red-100"
        />
        <button
          className="px-4 py-2 ml-4 text-white bg-red-600 rounded-lg hover:bg-red-700"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className=" md:mt-10 h-[160px] lg:my-auto">

          <Carousel className="w-[1200px]">
            <CarouselContent className="-ml-1">
              {bloodDonationFeedback.map((feedback, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/6 lg:basis-1/6">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center h-[160px] justify-center p-6">
                        <motion.div
                          className="bg-white p-5 w-full rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold">{feedback.name}</h3>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${feedback.role === "Donor" ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600"}`}>
                              {feedback.role}
                            </span>
                          </div>
                          <p className="mt-2 text-gray-600">{feedback.feedback}</p>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default BloodSearch;
