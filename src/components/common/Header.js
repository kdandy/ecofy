import React from "react";
import CustomContainer from "../custom/CustomContainer";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 ease-in-out flex justify-between items-center">
      <CustomContainer className="my-3 w-full py-5 px-8 flex justify-between items-center bg-slate-100 rounded-full">
        <div>
          <h1 className="text-4xl font-bold">Ecofy</h1>
        </div>
        <ul className="hidden md:flex gap-5">
          <li className="group relative">
            <Link
              href="/"
              className="text-black transition ease-in-out duration-[5ms] group-hover:text-primary"
            >
              Beranda
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group relative">
            <Link
              href="/tentang"
              className="text-black transition ease-in-out duration-[5ms] group-hover:text-primary"
            >
              Tentang
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group relative">
            <Link
              href="#"
              className="text-black transition ease-in-out duration-[5ms] group-hover:text-primary"
            >
              Berita
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group relative">
            <Link
              href="#"
              className="text-black transition ease-in-out duration-[5ms] group-hover:text-primary"
            >
              Kontak
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </CustomContainer>
    </header>
  );
};

export default Header;
