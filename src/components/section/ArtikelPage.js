import React from "react";
import CustomContainer from "../custom/CustomContainer";
import BlogCard from "../custom/BlogCard";
import { artikelEdukasi } from "@/app/data";

const ArtikelPage = () => {
  return (
    <div className="font-lora text-text">
      <CustomContainer>
        {/* Judul Halaman */}
        <h1 className="title text-center mb-4">Artikel Edukasi</h1>

        {/* Deskripsi Halaman */}
        <h2 className="text-primaryShadow text-lg md:text-xl my-5 font-medium text-center max-w-[700px] mx-auto">
          Artikel, tips, dan panduan praktis gaya hidup berkelanjutan, berita terkini, serta isu lingkungan terbaru.
        </h2>

        {/* Grid Artikel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          {artikelEdukasi.map((berita) => (
            <BlogCard
              key={berita.id}
              title={berita.title}
              thumbnailSrc={berita.thumbnail}
              previewText={berita.content}
              link={`artikel/${berita.id}`}
            />
          ))}
        </div>
      </CustomContainer>
    </div>
  );
};

export default ArtikelPage;