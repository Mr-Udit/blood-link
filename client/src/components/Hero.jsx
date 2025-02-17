import React from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { bloodDonationFeedback } from "@/assets/constants";
import { motion } from "framer-motion";
const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <section>
      <div className="container sm:h-[950px] md:h-[600px] lg:h-[400px]  m-auto">
        <div className="sub-container">
          <div className=" flex flex-wrap h-[270px] my-auto justify-around">
            <div className="carousal md:mt-10 h-[160px] lg:my-auto">
              <Carousel
                plugins={[plugin.current]}
                className=" border-none w-[400px]"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {bloodDonationFeedback.map((feedback, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className=" border-none w-[450px] flex items-center  ml-[-30px] h-[120px] justify-center p-6">
                            <motion.div
                              className="bg-white p-5 w-full rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                              whileHover={{ scale: 1.05 }}
                            >
                              <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold">
                                  {feedback.name}
                                </h3>
                              </div>
                              <p className="mt-2 text-gray-600">
                                {feedback.feedback}
                              </p>
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
      </div>
    </section>
  );
};

export default Hero;
