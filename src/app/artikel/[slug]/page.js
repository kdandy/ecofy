"use client";

import React from "react";
import { useParams } from "next/navigation";
import CustomContainer from "@/components/custom/CustomContainer";
import LoadingPage from "@/components/custom/LoadingPage";
import Image from "next/image";
import { artikelEdukasi } from "@/app/data";

const ArtikelRoute = () => {
  const { slug } = useParams();
  const artikel = artikelEdukasi.find(({ id }) => id === Number(slug));

  if (!artikel) {
    return <h1>Not Found</h1>;
  }

  return (
    <div>
      <CustomContainer customWidth="max-w-[1160px]">
        <LoadingPage />
        <div className="mt-40"></div>
        <h1 className="title">{artikel.title}</h1>
        <p className="mt-2 mb-12 font-medium text-secondary text-xl">
          Published on {artikel.date || "Unknown Date"}
        </p>
      </CustomContainer>
      <CustomContainer customWidth="max-w-[1260px]">
        <Image
          src={`${artikel.thumbnail}`}
          alt="features image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-xl"
        />
      </CustomContainer>
      <CustomContainer customWidth="max-w-[1160px]">
        <div
          className="artikel-content"
          dangerouslySetInnerHTML={{ __html: artikel.pageContent }}
        />
      </CustomContainer>
    </div>
  );
};

export default ArtikelRoute;