import React from "react";
import AboutEcofy from "@/components/section/AboutEcofy";
import AboutArtikelEdukasi from "@/components/section/AboutArtikelEdukasi";
import AboutEvent from "@/components/section/AboutEvent";
import AboutJejakKarbon from "@/components/section/AboutJejakKarbon";

const Tentang = () => {
  return (
    <div className="overflow-hidden">
      <div className="mt-40">
      <AboutEcofy />
      <AboutArtikelEdukasi />
      <AboutEvent />
      <AboutJejakKarbon />
    </div>
    </div>
  );
};

export default Tentang;