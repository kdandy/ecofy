import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const FeaturesCard = ({ imageLink, title, description, routeLink }) => {
  return (
    <div className="flex flex-col md:flex-row items-center w-full">
      <div className="md:max-w-[50%]">
        <Image
          src={imageLink}
          alt="features image"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto rounded-xl"
        />
      </div>
      <div className="md:ml-5 mt-4">
        <h1 className="text-2xl md:text-4xl font-medium">{title}</h1>
        <p className="text-lg md:text-xl font-light mt-4 mb-12">
          {description}
        </p>
        <Link
          className="text-xl font-normal text-primary mt-auto flex items-center group transition-all ease-in-out"
          href={`${routeLink}`}
        >
          <p className="relative">
            Baca Lebih Lanjut
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </p>
          <FaArrowRightLong className="ml-2 transition-all group-hover:ml-4" />
        </Link>
      </div>
    </div>
  );
};

export default FeaturesCard;
