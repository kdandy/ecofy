"use client";

import Link from "next/link";
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
            Langkah Hijau untuk Masa Depan
          </h1>
          <p className="text-2xl sm:text-3xl mt-6 font-normal z-20 font-lora">
            Bersama kita wujudkan bumi yang lebih hijau.
          </p>
          <div className="flex md:flex-row flex-col justify-center items-center mt-8 gap-4 z-20">
            <Link
              href="https://carbon.ecofy.dandy.my.id/"
              className="capitalize bg-primary hover:bg-primary-foreground text-lg sm:text-2xl py-2 sm:py-3 px-6 sm:px-10 rounded-full transition ease-in-out duration-300"
            >
              Hitung Jejak Karbon
            </Link>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid 2xl:grid-cols-5 sm:grid-cols-2 mt-20 2xl:mt-0 grid-cols-1 items-end gap-3">

          {/* HeroCard1 (Left) */}
          <div className="flex flex-col items-center gap-3">
            <HeroCard1
              title="65%"
              description="Indonesia peringkat 6 jejak karbon dunia. Saatnya bertindak."
              link="/donate-now"
              buttonText="Donasi"
            />
            <HeroCard3 title="Aksi Nyata Bersama" />
          </div>

          {/* ImageCard */}
          <ImageCard
            link="/education"
            title="Edukasi"
            text="Pelajari cara menjaga lingkungan."
          />

          {/* HeroCard2 (Center) */}
          <HeroCard2
            title={
              <span className="text-xl sm:text-2xl text-center block">
                Bergabung dengan 1.000+ Relawan untuk Perubahan
              </span>
            }
            link="/join"
            buttonText="Gabung"
          />

          {/* ImageCard */}
          <ImageCard
            link="/events"
            title="Kegiatan"
            text="Ikuti acara lingkungan sekitar Anda."
          />

          {/* HeroCard1 (Right) */}
          <div className="flex flex-col items-center gap-3">
            <HeroCard1
              position="right"
              title="Temukan Peluang"
              description="Jelajahi aksi keberlanjutan."
              link="/explore-more"
              buttonText="Jelajahi"
            />
            <HeroCard3
              title={<span className="text-2xl sm:text-3xl">Bersama untuk Bumi</span>}
            />
          </div>
        </div>
      </CustomContainer>
    </>
  );
};

export default Hero;