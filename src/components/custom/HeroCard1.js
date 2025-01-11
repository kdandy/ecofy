import React from "react";
import Image from "next/image";
import { CgArrowTopRight } from "react-icons/cg";

const HeroCard1 = ({ position }) => {
  return (
    <div
      className={`h-auto w-auto flex flex-col ${
        position === "right" ? "items-end" : ""
      }`}
    >
      <div
        className={`w-[175px] h-[35px] bg-primary ${
          position === "right"
            ? "rounded-tr-[90px] rounded-tl-[45px]"
            : "rounded-tl-[90px] rounded-tr-[45px]"
        }`}
      ></div>
      <div
        className={`relative flex flex-col justify-center max-w-[350px] pt-[75px] px-8 bg-primary text-left rounded-b-[65px]  ${
          position === "right"
            ? "rounded-l-[65px]"
            : "rounded-r-[65px]"
        }`}
      >
        <h1 className="text-5xl font-medium my-1 z-20">test</h1>
        <p className="mt-[10px] mb-28 z-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="w-full z-20 relative flex items-center justify-between shadow-2xl bg-green1 px-4 py-2 mb-2 text-xl rounded-full">
          <p className="font-medium ml-1">Donate now</p>
          <button className="bg-primary text-5xl p-2 rounded-full r-0">
            <CgArrowTopRight />
          </button>
        </div>
        <div className="w-[120%] z-10 h-auto absolute left-[-1px] opacity-45 top-[15%]">
          <Image
            src="/card-svg.svg"
            width="0"
            height="0"
            sizes="100vw"
            className="h-auto w-auto"
            alt="card cury image"
          />
        </div>
        <div className="w-[120%] z-10 h-auto absolute left-[-1px] opacity-45 top-[25%]">
          <Image
            src="/card-svg2.svg"
            width="0"
            height="0"
            sizes="100vw"
            className="h-auto w-auto"
            alt="card cury image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCard1;
