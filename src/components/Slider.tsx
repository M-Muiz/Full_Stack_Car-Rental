"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { profile } from "@/utils/data"
import autoplay from "embla-carousel-autoplay"

const Slider = () => {
  return (
    <Carousel plugins={[
      autoplay({ delay: 3000 })
    ]}>
      <CarouselContent>
        {profile?.map((item, index) => (
          <CarouselItem key={index} style={{ backgroundImage: `url(${item.img})` }} className="w-full h-full bg-cover bg-center pt-5 bg-no-repeat pointer-events-none relative">
            <div className="absolute top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.5)]"></div>
            <div className="h-[50vh] md:h-[70vh]">
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>

  )
}

export default Slider
