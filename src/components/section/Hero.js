'use client';

import Link from "next/link";
import { motion } from 'framer-motion';
import React from 'react';

const Hero = () => {
  const phrases = ['Ukur Jejak,', 'Kurangi Dampak,', 'Selamatkan Bumi!'];

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }, 
    },
  };

  return (
    <>
      <div className="pt-[7vh] flex md:flex-row flex-col items-center px-[25px] sm:px-[60px] justify-center h-[calc(100vh-80px)]">
        <div className="flex items-center md:items-start flex-col md:ml-[5vw] w-full mx-[20px]">
          <motion.div
            className="text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] font-semibold text-center md:text-left"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {phrases.map((phrase, index) => (
              <React.Fragment key={index}>
                {phrase.split('').map((letter, letterIndex) => (
                  <motion.span
                    key={`${index}-${letterIndex}`}
                    variants={letterVariants}
                    className="inline-block"
                    style={{ display: 'inline-block' }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
                <br />
              </React.Fragment>
            ))}
          </motion.div>
          <Link href="/calculator/home" className="bg-green-800 px-12 py-6 my-6 block rounded-full font-semibold text-2xl sm:text-3xl md:text-4xl hover:shadow-2xl transition">
            Hitung Carbon
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;