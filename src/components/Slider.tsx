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
import {
  Card,
  CardContent,
} from "@/components/ui/card"

const Slider = () => {
  return (
    <Carousel plugins={[
      autoplay({ delay: 2000 })
    ]}>
      <CarouselContent>
        {profile?.map((item, index) => (
          <CarouselItem key={index} style={{ backgroundImage: `url(${item.img})` }} className="w-full h-full bg-cover bg-center pt-5 bg-no-repeat pointer-events-none relative">
            <div></div>
            <div className="">
              <Card>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
              </Card>

            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

  )
}

export default Slider
