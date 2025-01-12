import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const EventCard = ({ title, description, organizer, link, thumbnail }) => {
  return (
    <>
      <div className="border-l-4 mt-2 ml-8 pl-8">
        <h4 className="text-4xl mb-4 capitalize font-lora font-bold">
          {title}
        </h4>
        <Image
          src={`${thumbnail}`}
          alt="features image"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-[300px] rounded-xl"
        />
        <p className="text-lg mt-4">{description}</p>
        <p className="text-lg mt-4 flex">
          Event Organizer :{" "}
          <Link
            className="text-xl font-lora ml-2 font-normal text-secondary relative group transition-all ease-in-out"
            href={`${organizer.link}`}
            target="_"
          >
            <p className="relative">
              {organizer.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </p>
          </Link>
        </p>
        <Link
          className="text-xl font-lora mt-4 font-normal text-secondary flex items-center group transition-all ease-in-out"
          href={`${link}`}
        >
          <p className="relative">
            Baca Lebih Lanjut
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
          </p>
          <FaArrowRightLong className="ml-2 transition-all group-hover:ml-4" />
        </Link>
      </div>
    </>
  );
};

export default EventCard;
