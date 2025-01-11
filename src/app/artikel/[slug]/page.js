"use client";

import React from "react";
import { useParams } from "next/navigation";
import CustomContainer from "@/components/custom/CustomContainer";
import LoadingPage from "@/components/custom/LoadingPage";
import Image from "next/image";
import { artikelEdukasi } from "@/app/data";

const ArtikelRoute = () => {
  const params = useParams();
  const findArtikelById = (id) => {
    return artikelEdukasi.find((artikel) => artikel.id === Number(id));
  };
  const body = findArtikelById(params.slug);

  return body ? (
    <div>
      <CustomContainer customWidth="max-w-[1160px]">
        <LoadingPage />
        <div className="mt-40"></div>
        <h1 className="title">{body.title}</h1>
        <p className="mt-2 mb-12 font-medium text-primary text-xl">
          Published on {body.date || "Unknown Date"}
        </p>
      </CustomContainer>
      <CustomContainer customWidth="max-w-[1260px]">
        <Image
          src={`/features1.jpg`}
          alt="features image"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto rounded-xl"
        />
      </CustomContainer>
      <CustomContainer customWidth="max-w-[1160px]">
        <div
          className="artikel-content"
          dangerouslySetInnerHTML={{
            __html: body.pageContent,
          }}
        ></div>
      </CustomContainer>
    </div>
  ) : (
    <h1>Not Found</h1>
  );
};

export default ArtikelRoute;
