"use client";

import React from "react";
import CustomContainer from "../custom/CustomContainer";
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-3">
      <CustomContainer
        customWidth="max-w-[1600px]"
        className="bg-secondary sm:flex-row flex-col px-8 sm:px-[80px] font-lora py-8 rounded-2xl mb-2"
      >
        <div className="flex justify-between sm:flex-row flex-col">
          <div className="inline-block">
            <h1 className="text-5xl font-poppins font-bold bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
              Ecofy
            </h1>
            <p className="text-[#f5f5f5] text-lg mt-2">
              Langkah Hijau Menuju Keberlanjutan
            </p>
          </div>
          <div className="flex gap-12 sm:flex-row flex-col mt-12 sm:mt-0">
            <div className="text-[#f5f5f5] font-poppins text-md capitalize flex flex-col gap-4">
              <Link href="/" className="hover:underline">
                Beranda
              </Link>
              <Link href="/tentang" className="hover:underline">
                Tentang Ecofy
              </Link>
              <Link href="/artikel" className="hover:underline">
                Artikel Keberlanjutan
              </Link>
            </div>
            <div className="text-[#f5f5f5] font-poppins text-md capitalize flex flex-col gap-2">
              <Link href="/event" className="hover:underline">
                Event Lingkungan
              </Link>
              <Link
                href="https://carbon.ecofy.dandy.my.id"
                className="hover:underline"
              >
                Hitung Jejak Karbon
              </Link>
              <Link href="/#" className="hover:underline">
                Edukasi & Panduan
              </Link>
            </div>
            <div className="text-[#f5f5f5] font-poppins text-md capitalize flex flex-col gap-2">
              <Link href="/#" className="hover:underline">
                Komunitas
              </Link>
              <Link href="/#" className="hover:underline">
                Mitra Kami
              </Link>
              <Link href="/#" className="hover:underline">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row mt-8 gap-4 sm:gap-0 justify-between items-center sm:mt-[65px]">
          <p className="text-lg text-[#f5f5f5]">
            &copy; {new Date().getFullYear()} Ecofy. All rights reserved.
          </p>
          <div className="inline-block">
            <div className="w-full group cursor-pointer text-white z-20 relative flex items-center justify-between shadow-2xl bg-primaryShadow px-4 py-2 mb-2 rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:bg-secondary">
              <p className="font-medium pr-[50px] text-lg ml-1 transition-all duration-300 group-hover:text-white">
                Jadi Relawan Sekarang
              </p>
              <button className="bg-primary group-hover:bg-secondary text-2xl p-2 rounded-full transition-all duration-300 text-secondary group-hover:text-white transform group-hover:scale-110">
                <CgArrowTopRight className="block group-hover:hidden transition-all duration-300" />
                <FaArrowRight className="hidden group-hover:block transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>
      </CustomContainer>
    </footer>
  );
};

export default Footer;