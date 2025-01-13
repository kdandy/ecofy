import React from "react";
import Image from "next/image";

const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: "Dandy Faishal Fahmi",
      role: "Fullstack Developer",
      image: "/com/com11.png",
    },
    {
      name: "Alif Putra Wibowo",
      role: "Frontend Developer",
      image: "/com/com11.png",
    },
    {
      name: "Alan Nuril Fuadi",
      role: "Project Manager",
      image: "/com/com11.png",
    },
  ];

  return (
    <div className="text-lora text-text bg-white py-20 px-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold">Meet our team</h1>
        <p className="text-xl sm:text-2xl mt-6 max-w-[1000px] mx-auto">
        Ecofy, platform yang menghubungkan komunitas untuk menciptakan dampak positif bagi lingkungan.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-48 h-48 relative mb-6">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h2 className="text-2xl font-semibold">{member.name}</h2>
            <p className="text-lg text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
