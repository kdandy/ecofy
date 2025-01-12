"use client";

import React from "react";
import CustomContainer from "../custom/CustomContainer";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-3">
      <CustomContainer customWidth="max-w-[1600px]" className="bg-secondary sm:flex-row flex-col px-20 font-lora py-8 rounded-2xl mb-2">
        <div className="flex justify-between sm:flex-row flex-col">
          <div className="inline-block">
            <h1 className="text-5xl font-poppins font-bold bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
              ecofy
            </h1>
            <p className="text-[#f5f5f5] text-lg mt-2">
              Ukur Jejak Kurangi Dampak
            </p>
          </div>
          <div className="flex gap-12 sm:flex-row flex-col mt-12 sm:mt-0">
            <div className="text-[#f5f5f5] font-poppins text-md capitalize flex flex-col gap-4">
              <Link href="/" className="hover:underline">
                beranda
              </Link>
              <Link href="/tentang" className="hover:underline">
                tentang
              </Link>
              <Link href="/artikel" className="hover:underline">
                artikel
              </Link>
            </div>
            <div className="text-[#f5f5f5] font-poppins text-md capitalize flex flex-col gap-2">
              <Link href="/event" className="hover:underline">
                event
              </Link>
              <Link href="/" className="hover:underline">
                carbon calulator
              </Link>
            </div>
          </div>
        </div>
        <p className="text-lg mt-[65px] text-[#f5f5f5]">
          &copy; {new Date().getFullYear()} Ecofy. All rights reserved.
        </p>
      </CustomContainer>
    </footer>
  );
};

export default Footer;
