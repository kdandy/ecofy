import React from "react";
import AboutEcofy from "@/components/section/AboutEcofy";
import AboutArtikelEdukasi from "@/components/section/AboutArtikelEdukasi";
import AboutEvent from "@/components/section/AboutEvent";
import AboutJejakKarbon from "@/components/section/AboutJejakKarbon";
import LoadingPage from "@/components/custom/LoadingPage";

const Tentang = () => {
  return (
    <div className="overflow-x-hidden">
      <LoadingPage />
      <div className="mt-40"></div>
      <AboutEcofy />
      <AboutArtikelEdukasi />
      <AboutEvent />
      <AboutJejakKarbon />
    </div>
  );
};

export default Tentang;
