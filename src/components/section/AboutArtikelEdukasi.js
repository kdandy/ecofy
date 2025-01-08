import React from "react";
import CustomContainer from "../custom/CustomContainer";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutArtikelEdukasi = () => {
  return (
    <div className="text-left mb-[20vh]">
      <CustomContainer className="flex items-center justify-between">
        <div className="max-w-[50%]">
          <Image
            src={`/about-artikel.jpg`}
            alt="features image"
            width="0"
            height="0"
            sizes="100vw"
            className="w-auto h-auto rounded-xl"
          />
        </div>
        <div className="ml-5">
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
              Ke Artikel
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
