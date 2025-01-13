import React from "react";
import CustomContainer from "../custom/CustomContainer";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutArtikelEdukasi = () => {
  return (
    <div className="text-left mb-[20vh]" id="artikel">
      <CustomContainer className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:max-w-[50%] mb-24 md:mb-0">
          <div className="relative">
            <Image
              src={`/about/artikel1.jpg`}
              alt="features image"
              width="0"
              overflow-hidden
              height="0"
              sizes="100vw"
              className="h-auto rounded-xl absolute w-[45%] bottom-[-20%] left-[-25%]"
            />
            <Image
              src={`/about/artikel2.jpg`}
              alt="features image"
              width="0"
              height="0"
              sizes="100vw"
              className="w-auto h-auto rounded-xl"
            />
            <Image
              src={`/about/artikel3.jpg`}
              alt="features image"
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto rounded-xl absolute w-[45%] top-[-20%] right-[-15%]"
            />
          </div>
        </div>
        <div className="md:ml-16">
          <h1 className="title">Artikel Edukasi</h1>
          <p className="my-6 font-medium text-lg max-w-[500px]">
            Perpustakaan digital yang menyajikan artikel, tips, dan panduan
            praktis tentang gaya hidup berkelanjutan serta berita terkini
            tentang isu lingkungan.
          </p>
          <Link
            className="text-xl font-normal text-primary mt-auto flex items-center group transition-all ease-in-out"
            href={`/artikel`}
          >
            <p className="relative">
              Artikel
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </p>
            <FaArrowRightLong className="ml-2 transition-all group-hover:ml-4" />
          </Link>
        </div>
      </CustomContainer>
    </div>
  );
};

export default AboutArtikelEdukasi;
