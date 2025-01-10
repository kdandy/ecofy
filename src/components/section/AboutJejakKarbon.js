import React from "react";
import CustomContainer from "../custom/CustomContainer";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutJejakKarbon = () => {
  return (
    <div className="text-left mb-[25vh]">
      <CustomContainer className="flex items-center justify-between">
        <div className="max-w-[50%]">
          <div className="relative">
            <Image
              src={`/about/carbon2.jpg`}
              alt="features image"
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto rounded-xl absolute w-[45%] bottom-[-15%] left-[-10%]"
            />
            <Image
              src={`/about/carbon1.jpg`}
              alt="features image"
              width="0"
              height="0"
              sizes="100vw"
              className="w-auto h-auto rounded-xl"
            />
            <Image
              src={`/about/carbon3.jpg`}
              alt="features image"
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto rounded-xl absolute w-[45%] top-[-15%] right-[-15%]"
            />
          </div>
        </div>
        <div className="ml-5">
          <h1 className="title">Jejak Karbon</h1>
          <p className="my-6 font-medium text-lg max-w-[500px]">
            Fitur ini membantu pengguna menghitung dan memantau jejak karbon
            pribadi berdasarkan aktivitas harian mereka, seperti penggunaan
            transportasi, konsumsi energi, dan pola konsumsi.
          </p>
          <Link
            className="text-xl font-normal text-primary mt-auto flex items-center group transition-all ease-in-out"
            href={`/artikel`}
          >
            <p className="relative">
              Ke Jejak Karbon
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </p>
            <FaArrowRightLong className="ml-2 transition-all group-hover:ml-4" />
          </Link>
        </div>
      </CustomContainer>
    </div>
  );
};

export default AboutJejakKarbon;
