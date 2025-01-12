import Image from "next/image";
import React from "react";
import Link from "next/link";

const ImageCard = ({ link }) => {
  return (
    <Link
      href={`${link}`}
      className="group relative text-left h-auto mt-[35px] rounded-[45px] overflow-hidden shadow-lg max-w-[350px]"
    >
      <Image
        src="/features1.jpg"
        alt="Orphans Kenya"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out group-hover:bg-opacity-60"></div>
      <div className="absolute top-4 left-4">
        <p className="text-sm text-white font-medium uppercase">Education</p>
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <h2 className="text-white text-2xl font-semibold leading-tight">
          Sponsor food, education to Orphans Kenya
        </h2>
      </div>
    </Link>
  );
};

export default ImageCard;
