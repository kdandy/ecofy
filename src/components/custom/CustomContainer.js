import React from "react";

const CustomContainer = ({ children, className, customWidth }) => {
  return (
    <div
      className={`${
        customWidth ? customWidth : "max-w-[1360px]"
      } mx-auto px-5 ${className}`}
    >
      {children}
    </div>
  );
};

export default CustomContainer;
