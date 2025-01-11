"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import CustomContainer from "../custom/CustomContainer";
import HeroCard1 from "../custom/HeroCard1";

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
      <CustomContainer className="text-center pb-[25vh] pt-[120px] flex items-center justify-center">
        <div className="">
          <h1 className="text-6xl font-medium z-20">
            Ukur Jejak Kurangi Dampak
          </h1>
          <p className="text-2xl mt-8 font-normal z-20">
            Lorem ipsum dor sit amat pale lu memek.
          </p>
          <div className="flex justify-center items-center mt-8 gap-4 z-20">
            <Link
              href=""
              className="bg-primary hover:bg-primary-foreground text-2xl py-3 px-10 rounded-full transition ease-in-out duration-300"
            >
              <button>button 1</button>
            </Link>
            <Link
              href=""
              className="bg-primary hover:bg-primary-foreground text-2xl py-3 px-10 rounded-full transition ease-in-out duration-300"
            >
              <button>button 1</button>
            </Link>
          </div>
          <div className="flex">
            <HeroCard1 position="right" />
            <HeroCard1 />
          </div>
        </div>
      </CustomContainer>
    </>
  );
};

export default Hero;
