import React from "react";
import CustomContainer from "../custom/CustomContainer";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutEvent = () => {
  return (
    <div className="text-left mb-[10vh] md:mb-[20vh]" id="event">
      <CustomContainer className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="">
          <h1 className="title">Event</h1>
          <p className="my-6 font-medium text-lg max-w-[500px]">
            Pengguna dapat menemukan berbagai acara atau kegiatan lingkungan di
            sekitar mereka, seperti penanaman pohon, pembersihan sampah, atau
            seminar edukasi lingkungan.
          </p>
          <Link
            className="text-xl font-normal text-primary mt-auto flex items-center group transition-all ease-in-out"
            href={`/#`}
          >
            <p className="relative">
              Events
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </p>
            <FaArrowRightLong className="ml-2 transition-all group-hover:ml-4" />
          </Link>
        </div>
        <div className="md:max-w-[50%] mb-24 md:mb-0 md:ml-5">
          <div className="relative">
            <Image
              src={`/about/event2.jpg`}
              alt="features image"
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto rounded-xl absolute w-[45%] top-[-20%] left-[-20%]"
            />
            <Image
              src={`/about/event1.jpg`}
              alt="features image"
              width="0"
              height="0"
              sizes="100vw"
              className="w-auto h-auto rounded-xl"
            />
            <Image
              src={`/about/event3.jpg`}
              alt="features image"
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto rounded-xl absolute w-[45%] bottom-[-20%] right-[-15%]"
            />
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default AboutEvent;
