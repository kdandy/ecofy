import React from "react";
import LoadingPage from "@/components/custom/LoadingPage";
import ArtikelPage from "@/components/section/ArtikelPage";

const Artikel = () => {
  return (
    <>
      <LoadingPage />
      <div className="mt-40"></div>
      <ArtikelPage />
    </>
  );
};

export default Artikel;
