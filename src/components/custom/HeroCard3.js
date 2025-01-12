import React from "react";
import { FaLeaf } from "react-icons/fa6";

const HeroCard3 = ({ title }) => {
  return (
    <div className="flex justify-start px-8 items-center max-w-[350px] rounded-[45px] text-text bg-primary w-auto min-w-[325px] h-auto">
      <FaLeaf className="text-8xl" />
      <h1 className="text-4xl font-medium z-20 transition-all duration-300">
        {title}
      </h1>
    </div>
  );
};

export default HeroCard3;
