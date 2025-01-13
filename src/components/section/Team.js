import React from "react";
import Image from "next/image";

const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: "Dandy Faishal Fahmi",
      role: "Fullstack Developer",
      image: "/team/dandy.jpg",
      instagram: "https://instagram.com/sagarasheilendra",
    },
    {
      name: "Alif Putra Wibowo",
      role: "Frontend Developer",
      image: "/team/com11.png",
      instagram: "https://instagram.com/alifwbwo",
    },
    {
      name: "Alan Nuril Fuadi",
      role: "Project Manager",
      image: "/team/com11.png",
      instagram: "https://instagram.com/alannn_nf",
    },
  ];

  return (
    <div className="text-lora text-text bg-white py-12 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold">Meet our team</h1>
        <p className="text-xl sm:text-2xl mt-4 max-w-[800px] mx-auto">
          Ecofy, platform yang menghubungkan komunitas untuk menciptakan dampak positif bagi lingkungan.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-start">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-40 h-40 relative mb-4">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-md text-gray-600">{member.role}</p>
            <a
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-500 text-lg mt-2"
            >
              Instagram
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;