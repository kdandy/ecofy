"use client";

import React from "react";
import CustomContainer from "../custom/CustomContainer";
import Image from "next/image";
import { features } from "@/app/data";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

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
    <div className="font-lora px-4">
      <CustomContainer className="py-[15vh] bg-primary rounded-2xl text-center justify-center items-center">
        <h1 className="title mb-[125px] text-text">Features</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col text-text text-center items-center"
            >
              <Image
                src={feature.imageLink}
                alt="features image"
                width="0"
                height="0"
                sizes="100vw"
                className="w-auto max-w-[259px] h-auto"
              />
              <h1 className="text-text font-lora text-2xl mt-5">
                {feature.title}
              </h1>
              <p className="mt-6 mb-5">{feature.description}</p>
              <Link
                className="text-xl font-normal text-secondary mt-auto flex items-center group transition-all ease-in-out"
                href={`${feature.routeLink}`}
              >
                <p className="relative">
                  Baca Lebih Lanjut
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </p>
                <FaArrowRightLong className="ml-2 transition-all group-hover:ml-4" />
              </Link>
            </div>
          ))}
        </div>
      </CustomContainer>
    </div>
  );
};

export default Features;
