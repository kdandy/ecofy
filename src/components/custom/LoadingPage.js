"use client";

import React, { useState, useEffect } from "react";

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blueSlideOpacity, setBlueSlideOpacity] = useState(1); // Changed from 0 to 1
  const [yellowSlideOpacity, setYellowSlideOpacity] = useState(0);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    }

    const mainContent = document.querySelector("main");

    // Animation timings
    const blueEnterTimeout = setTimeout(() => {
      setBlueSlideOpacity(1);
    }, 500);

    const blueExitTimeout = setTimeout(() => {
      setBlueSlideOpacity(0);
      setYellowSlideOpacity(1);
    }, 800);

    const cleanupTimeout = setTimeout(() => {
      document.body.style.overflow = "unset";
      setIsLoading(false);
    }, 2000);

    // Cleanup function
    return () => {
      document.body.style.overflow = "unset";

      // Clear all timeouts
      clearTimeout(blueEnterTimeout);
      clearTimeout(blueExitTimeout);
      clearTimeout(cleanupTimeout);
    };
  }, [isLoading]);

  // Early return if not loading
  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 overflow-hidden z-50 bg-yellow-400">
      {/* Blue Panel */}
      <div
        className="fixed inset-0 z-50 bg-blue-500 transition-opacity duration-500 ease-in-out"
        style={{ opacity: blueSlideOpacity }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-white text-2xl font-bold">Loading...</div>
        </div>
      </div>

      {/* Yellow Panel */}
      <div className="flex items-center justify-center h-full">
        <div className="text-white text-2xl font-bold">Almost there...</div>
      </div>
    </div>
  );
};

export default LoadingPage;
