import React from "react";
import CustomContainer from "../custom/CustomContainer";

const AboutEcofy = () => {
  return (
    <div className="pb-[20vh] pt-[5vh] sm:pt-[10vh]">
      <CustomContainer>
        <h1 className="title">About Ecofy</h1>
        <p className="my-6 font-medium text-lg border-l-8 pl-4 border-primary">
          Ecofy adalah platform web inovatif yang dirancang untuk menghubungkan
          individu, komunitas, dan organisasi yang peduli terhadap lingkungan.
          Aplikasi ini berfungsi sebagai pusat koordinasi kegiatan lingkungan,
          edukasi keberlanjutan, dan pelaporan jejak karbon. Melalui
          GreenConnect, pengguna dapat menemukan, berpartisipasi, dan
          berkontribusi dalam berbagai inisiatif hijau yang berdampak positif
          bagi lingkungan.
        </p>
      </CustomContainer>
    </div>
  );
};

export default AboutEcofy;
