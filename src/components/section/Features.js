"use client";

import React from "react";
import CustomContainer from "../custom/CustomContainer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FeaturesCard from "../custom/FeaturesCard";
import { features } from "@/app/data";
import Autoplay from "embla-carousel-autoplay";

const Features = () => {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  // Ensure autoplayPlugin is initialized
  if (!autoplayPlugin.current) {
    console.error("Autoplay plugin is not initialized.");
    return null;
  }

  return (
    <div className="bg-green1 text-white">
      <CustomContainer className="py-[15vh]">
        <div>
          <Carousel
            className="py-8 relative"
            plugins={[autoplayPlugin.current]}
            onMouseEnter={() => autoplayPlugin.current.stop()}
            onMouseLeave={() => autoplayPlugin.current.reset()}
          >
            <CarouselContent>
              {features.map((feature) => (
                <CarouselItem key={feature.id}>
                  <FeaturesCard
                    imageLink={feature.imageLink}
                    title={feature.title}
                    description={feature.description}
                    routeLink={feature.routeLink}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute right-[5%] bottom-[-15px]">
              <div className="absolute bottom-[-15px]">
                <CarouselPrevious />
              </div>
              <div className="absolute bottom-[-15px]">
                <CarouselNext />
              </div>
            </div>
          </Carousel>
        </div>
      </CustomContainer>
    </div>
  );
};

export default Features;
