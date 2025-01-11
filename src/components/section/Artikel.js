import React from "react";
import CustomContainer from "../custom/CustomContainer";
import BlogCard from "../custom/BlogCard";
import { artikelEdukasi } from "@/app/data";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Artikel = () => {
  return (
    <div className="py-[15vh]">
      <CustomContainer>
        <h1 className="title">Artikel Edukasi</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          {artikelEdukasi.map((berita) => (
            <BlogCard
              key={berita.title}
              title={berita.title}
              thumbnailSrc={berita.thumbnail}
              previewText={berita.content}
              link={`artikel/${berita.id}`}
            />
          ))}
        </div>
        <Link
          className="text-2xl font-normal text-secondary mt-auto flex items-center group transition-all ease-in-out"
          href="/artikel"
        >
          <p className="relative">
            Baca Semua Artikel
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
          </p>
          <FaArrowRightLong className="ml-2 transition-all group-hover:ml-4" />
        </Link>
      </CustomContainer>
    </div>
  );
};

export default Artikel;
