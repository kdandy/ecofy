"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import CustomContainer from "../custom/CustomContainer";
import HeroCard1 from "../custom/HeroCard1";
import ImageCard from "../custom/ImageCard";
import HeroCard2 from "../custom/HeroCard2";
import HeroCard3 from "../custom/HeroCard3";

const Hero = () => {
  const phrases = ["Ukur Jejak,", "Kurangi Dampak,", "Selamatkan Bumi!"];

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <CustomContainer
        customWidth="max-w-[1600px]"
        className="text-center pb-[20vh] text-text pt-[100px] font-lora flex flex-col items-center"
      >
        {/* Headline */}
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl sm:text-5xl font-medium z-20 font-lora">
            Ukur Jejak, Kurangi Dampak
          </h1>
          <p className="text-2xl sm:text-3xl mt-6 font-normal z-20 font-lora">
            Kita bisa mengukur dan mengurangi dampak aktivitas untuk masa depan
            yang lebih baik.
          </p>
          <div className="flex md:flex-row flex-col justify-center items-center mt-8 gap-4 z-20">
          <Link
            href="https://carbon.ecofy.dandy.my.id/"
            className="capitalize bg-primary hover:bg-primary-foreground text-lg sm:text-2xl py-2 sm:py-3 px-6 sm:px-10 rounded-full transition ease-in-out duration-300"
          >
            Hitung Jejak Karbonmu!
          </Link>

          </div>
        </div>

        {/* Cards Section */}
        <div className="grid 2xl:grid-cols-5 sm:grid-cols-2 mt-20 2xl:mt-0 grid-cols-1 items-end gap-3">

          {/* HeroCard1 (Left) */}
          <div className="flex flex-col items-center gap-3">
            <HeroCard1
              title="65%"
              description="17 Thousand People Died, Thousands Injured, Houses and Buildings Destroyed. Turkey-Syria Grieves"
              link="/donate-now"
              buttonText="Donate now"
            />
            <HeroCard3 title="Let them be heard" />
          </div>

          {/* ImageCard */}
          <ImageCard
            link="/test"
            title="Education"
            text="Sponsor food, education to Orphans Kenya"
          />

          {/* HeroCard2 (Center) */}
          <HeroCard2
            title={
              <span className="text-xl sm:text-2xl text-center block">
                Join 1000+ People Volunteer
              </span>
            }
            link="/test"
            buttonText="Join Community"
          />

          {/* ImageCard */}
          <ImageCard
            link="/test"
            title="Education"
            text="Sponsor food, education to Orphans Kenya"
          />

          {/* HeroCard1 (Right) */}
          <div className="flex flex-col items-center gap-3">
            <HeroCard1
              position="right"
              title="Explore more"
              description="Your home for help"
              link="/explore-more"
              buttonText="Explore"
            />
            <HeroCard3
              title={<span className="text-2xl sm:text-3xl">Your home for help</span>}
            />
          </div>
        </div>
      </CustomContainer>
    </>
  );
};

export default Hero;