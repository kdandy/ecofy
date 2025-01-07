import React from "react";

const CustomContainer = ({ children, className }) => {
  return (
    <div className={`max-w-[1360px] mx-auto px-5 ${className}`}>{children}</div>
  );
};

export default CustomContainer;
