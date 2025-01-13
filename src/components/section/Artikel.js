import React from "react";
import CustomContainer from "../custom/CustomContainer";
import BlogCard from "../custom/BlogCard";
import { artikelEdukasi } from "@/app/data";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Artikel = () => {
  return (
    <div className="py-[15vh] font-lora text-text">
      <CustomContainer>
        {/* Judul Section */}
        <h1 className="title text-center mb-10">Artikel Edukasi</h1>

        {/* Grid Artikel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {artikelEdukasi.slice(0, 3).map((berita) => (
            <BlogCard
              key={berita.id}
              title={berita.title}
              thumbnailSrc={berita.thumbnail}
              previewText={berita.content}
              link={`artikel/${berita.id}`}
            />
          ))}
        </div>

        {/* Link ke Semua Artikel */}
        <div className="flex justify-center">
          <Link
            className="text-2xl font-bold text-secondary flex items-center group transition-all ease-in-out"
            href="/artikel"
          >
            <p className="relative group-hover:text-primary">
              Baca Semua Artikel
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </p>
            <FaArrowRightLong className="ml-2 transition-all group-hover:ml-4 group-hover:text-primary" />
          </Link>
        </div>
      </CustomContainer>
    </div>
  );
};

export default Artikel;