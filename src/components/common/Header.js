"use client"

import React, { useState } from "react";
import CustomContainer from "../custom/CustomContainer";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
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
    // Add a small delay before closing the sheet to allow for navigation
    setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out flex justify-between items-center bg-white border-b-2`}
    >
      <CustomContainer
        className={`my-3 w-full py-4 px-8 flex justify-between items-center rounded-full transition-all duration-500 ease-in-out`}
      >
        <Link href="/">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-600 transition-all duration-500">
            ecofy
          </h1>
        </Link>
        <ul className="hidden md:flex gap-8">
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
        <div className="overflow-hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
              <div className="text-2xl font-thin">
                <GiHamburgerMenu />
              </div>
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle>
                  <div className="inline-block">
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-600 transition-all duration-500">
                      ecofy
                    </h1>
                  </div>
                </SheetTitle>
                <SheetDescription className="overflow-hidden relative capitalize">
                  <div className="py-5 flex flex-col justify-center text-text items-center text-2xl gap-3">
                    {[
                      { text: "beranda", href: "/" },
                      { text: "tentang", href: "/tentang" },
                      { text: "artikel", href: "/artikel" },
                      { text: "event", href: "/event" },
                    ].map((link) => (
                      <Link
                        key={link.text}
                        className="py-1 font-medium"
                        href={link.href}
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
