import React from "react";
import Image from "next/image";
import { CgArrowTopRight } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";
import Link
 from "next/link";
const HeroCard2 = ({ title, link, buttonText }) => {
  return (
    <Link
      href={`${link}`}
      className={`relative group overflow-hidden flex flex-col h-[225px] bg-[#d1dcdb] justify-between min-w-[350px] px-8 bg-secondary text-left rounded-[65px] transition-all duration-300`}
    >
      {/* Title */}
      <h1 className="text-5xl font-medium my-1 mt-[40px] z-20 transition-all duration-300">
        {title}
      </h1>

      {/* Button */}
      <div className="w-full z-20 relative flex items-center justify-between shadow-md bg-[#b9c2bf] px-4 py-2 mb-2 text-xl rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:bg-secondary">
        <p className="font-medium ml-1 transition-all duration-300 group-hover:text-white">
          {buttonText}
        </p>
        <button className="bg-[#222122] text-white group-hover:bg-secondary text-5xl p-2 rounded-full transition-all duration-300 transform group-hover:scale-110">
          <CgArrowTopRight className="block group-hover:hidden transition-all duration-300" />
          <FaArrowRight className="hidden group-hover:block transition-all duration-300" />
        </button>
      </div>
    </Link>
  );
};

export default HeroCard2;
