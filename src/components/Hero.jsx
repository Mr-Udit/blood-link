import React from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { bloodDonationFeedback } from "@/assets/constants"
import { motion } from "framer-motion";
const Hero = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    return (
        <section>
            <div className="container m-auto">
                <div className="sub-container">
                    <div className="text-center slogan">
                        <h1 className="m-4 mt-10 text-4xl text-white">
                            Save lives by donating your valuable <span className="text-red-700 underline">blood</span>.
                        </h1>
                    </div>
                    <div className=" flex flex-wrap justify-around">
                        <div className="flex flex-wrap justify-center mt-10 text-center cards">
                            <Card className="w-[270px] h-[270px] bg-red-500 mr-4">
                                <CardHeader>
                                    <CardTitle className="text-3xl text-white">Units Avilable</CardTitle>
                                    <CardDescription className="text-gray-900">We have only this blood left in stock</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <h3 className="text-3xl text-white underline">
                                        12 <span className="underline">Units</span>
                                    </h3>
                                </CardContent>
                                <CardFooter className="flex justify-center">
                                    <Button variant="outline">Donate Now <ArrowRight /> </Button>
                                </CardFooter>
                            </Card>
                            <Card className="w-[270px] h-[270px] bg-red-500">
                                <CardHeader>
                                    <CardTitle className="text-3xl text-white">People helped</CardTitle>
                                    <CardDescription className="text-gray-900">We have helped many pepele as listed below</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <h3 className="text-3xl text-white">
                                        1200 + <span className="underline">people</span>
                                    </h3>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="carousal">
                            <Carousel
                                plugins={[plugin.current]}
                                className="w-[400px]"
                                onMouseEnter={plugin.current.stop}
                                onMouseLeave={plugin.current.reset}
                            >
                                <CarouselContent>
                                    {bloodDonationFeedback.map((feedback, index) => (
                                        <CarouselItem key={index}>
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
            </div>

        </section>
    )
}

export default Hero

