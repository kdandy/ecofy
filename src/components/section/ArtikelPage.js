import React from "react";
import CustomContainer from "../custom/CustomContainer";
import BlogCard from "../custom/BlogCard";
import { artikelEdukasi } from "@/app/data";

const ArtikelPage = () => {
  return (
    <div className="">
      <CustomContainer>
        <h1 className="title">Artikel Edukasi</h1>
        <h2 className="text-green1 text-xl my-8 font-medium">
          Artikel, tips, dan panduan praktis gaya hidup berkelanjutan, berita
          terkini, berita isu lingkungan terkini kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          {artikelEdukasi.map((berita) => (
            <BlogCard
              key={berita.title}
              title={berita.title}
              thumbnailSrc={berita.thumbnail}
              previewText={berita.content}
              link={berita.link}
            />
          ))}
        </div>
      </CustomContainer>
    </div>
  );
};

export default ArtikelPage;
