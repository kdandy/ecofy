import React from "react";
import CustomContainer from "../custom/CustomContainer";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="hero relative h-screen text-center bg-cover bg-center">
      <CustomContainer className="text-left pt-[20vh]">
        <h1 className=" text-4xl sm:text-6xl font-bold max-w-[250px] sm:max-w-[500px] sm:leading-[75px]">
          Menghubungkan Komunitas untuk Masa Depan Hijau
        </h1>
        <p className="text-xl mt-6 mb-10 sm:mb-12">Discover the magic of eco-friendly fashion</p>
        <Button size="lg">Go green</Button>
      </CustomContainer>
    </div>
  );
};

export default Hero;
