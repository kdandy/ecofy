import React from "react";
import AboutEcofy from "@/components/section/AboutEcofy";
import AboutArtikelEdukasi from "@/components/section/AboutArtikelEdukasi";
import AboutEvent from "@/components/section/AboutEvent";
import AboutJejakKarbon from "@/components/section/AboutJejakKarbon";
import LoadingPage from "@/components/custom/LoadingPage";

const Tentang = () => {
  return (
    <>
      <LoadingPage />
      <div className="mt-40"></div>
      <AboutEcofy />
      <AboutArtikelEdukasi />
      <AboutEvent />
      <AboutJejakKarbon />
    </>
  );
};

export default Tentang;
