"use client";

import React, { useState } from "react";
import CustomContainer from "../custom/CustomContainer";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    // Menutup menu dengan sedikit delay setelah klik
    setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b-2">
      <CustomContainer className="py-4 px-6 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl md:text-3xl font-bold text-[#00432d] flex items-center gap-2">
            <Image
              src="/faviconn.ico"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            Ecofy
          </h1>
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 lg:gap-9 text-base lg:text-xl">
          {["Beranda", "Tentang", "Artikel", "Event"].map((item, index) => (
            <li key={index} className="group relative">
              <Link
                href={item === "Beranda" ? "/" : `/${item.toLowerCase()}`}
                className="text-black transition-all duration-300 ease-in-out group-hover:text-primary"
              >
                {item}
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Menu Mobile (Hamburger) */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
              <div className="text-2xl">
                <GiHamburgerMenu />
              </div>
            </SheetTrigger>
            <SheetContent side="top" className="bg-white">
              <SheetHeader>
                <SheetTitle>
                  <div className="flex justify-center items-center">
                    <h1 className="text-3xl font-bold text-[#00432d] flex items-center gap-2">
                      Ecofy
                    </h1>
                  </div>
                </SheetTitle>
                <SheetDescription className="overflow-hidden relative">
                  <div className="py-5 flex flex-col items-center text-lg gap-6">
                    {[
                      { text: "Beranda", href: "/" },
                      { text: "Tentang", href: "/tentang" },
                      { text: "Artikel", href: "/artikel" },
                      { text: "Event", href: "/event" },
                    ].map((link) => (
                      <Link
                        key={link.text}
                        href={link.href}
                        className="text-black font-medium capitalize"
                        onClick={handleLinkClick}
                      >
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </CustomContainer>
    </header>
  );
};

export default Header;