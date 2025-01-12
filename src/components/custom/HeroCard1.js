import React from "react";
import Image from "next/image";
import { CgArrowTopRight } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const HeroCard1 = ({ position, title, description, link, buttonText }) => {
  return (
    <Link
      className={`h-auto w-auto group flex flex-col text-white ${
        position === "right" ? "items-end" : ""
      }`}
      href={`${link}`}
    >
      {/* Top decorative bar */}
      <div
        className={`hidden 2xl:block w-[175px] h-[35px] bg-secondary transition-all duration-300 ${
          position === "right"
            ? "rounded-tr-[90px] rounded-tl-[45px]"
            : "rounded-tl-[90px] rounded-tr-[45px]"
        }`}
      ></div>

      {/* Main card */}
      <div
        className={` relative overflow-hidden flex-col justify-center max-w-[350px] pt-[75px] px-8 bg-secondary text-left rounded-b-[65px] transition-all duration-300 ${
          position === "right"
            ? "rounded-l-[65px] rounded-tr-[65px] 2xl:rounded-tr-none"
            : "rounded-r-[65px] rounded-tl-[65px] 2xl:rounded-tl-none"
        }`}
      >
        {/* Title */}
        <h1 className="text-5xl font-medium my-1 z-20 transition-all duration-300 group-hover:text-primary">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-[10px] mb-28 z-20 transition-all duration-300 group-hover:text-gray-300">
          {description}
        </p>

        {/* Button */}
        <div className="w-full z-20 relative flex items-center justify-between shadow-2xl bg-primaryShadow px-4 py-2 mb-2 rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:bg-secondary">
          <p className="font-medium text-lg ml-1 transition-all duration-300 group-hover:text-white">
            {buttonText}
          </p>
          <button className="bg-secondary group-hover:bg-primary text-5xl p-2 rounded-full transition-all duration-300 transform group-hover:scale-110">
            <CgArrowTopRight className="block group-hover:hidden transition-all duration-300" />
            <FaArrowRight className="hidden group-hover:block transition-all duration-300" />
          </button>
        </div>

        {/* Background SVG images */}
        <div className="w-[120%] z-10 h-auto absolute left-[-1px] opacity-15 top-[15%] transition-opacity duration-300 group-hover:opacity-30">
          <Image
            src="/card-svg.svg"
            width="0"
            height="0"
            sizes="100vw"
            className="h-auto w-auto"
            alt="card curvy image"
          />
        </div>
        <div className="w-[120%] z-10 h-auto absolute left-[-1px] opacity-15 top-[25%] transition-opacity duration-300 group-hover:opacity-30">
          <Image
            src="/card-svg2.svg"
            width="0"
            height="0"
            sizes="100vw"
            className="h-auto w-auto"
            alt="card curvy image"
          />
        </div>
      </div>
    </Link>
  );
};

export default HeroCard1;
