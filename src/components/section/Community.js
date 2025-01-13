import React from "react";
import CustomContainer from "../custom/CustomContainer";
import Link from "next/link";
import Image from "next/image";

const Community = () => {
  return (
    <div className="text-lora text-text mb-[15vh] relative">
      <CustomContainer className="flex relative text-center flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-4xl max-w-[770px] mb-16">
          Bergabunglah dengan komunitas kami dan jadilah bagian dari perubahan positif di dunia. Dengan lebih dari:
        </h1>
        <h1 className="text-6xl sm:text-9xl mb-12">125,259+</h1>
        <div className="flex flex-col items-center gap-5">
          <h3 className="text-md sm:text-2xl font-medium">
            Orang sudah bergabung
          </h3>
          <div className="flex md:flex-row flex-col justify-center items-center z-20">
            <Link
              href="https://calculator.ecofy.dandy.my.id/"
              className="capitalize bg-primary hover:bg-primary-foreground text-md sm:text-2xl py-3 px-10 rounded-full transition ease-in-out duration-300"
            >
              <button>Saya ingin bergabung dengan komunitas ini</button>
            </Link>
          </div>
        </div>
        <Image
          src="/com/com11.png"
          alt="Gambar fitur 1"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto max-w-[150px] xl:block hidden absolute h-auto top-7 left-0 rounded-2xl"
        />
        <Image
          src="/com/com21.png"
          alt="Gambar fitur 2"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto max-w-[150px] xl:block hidden absolute h-auto top-60 left-48 rounded-2xl"
        />
        <Image
          src="/com/com31.png"
          alt="Gambar fitur 3"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto max-w-[150px] xl:block hidden absolute h-auto top-7 right-5 rounded-2xl"
        />
        <Image
          src="/com/com41.png"
          alt="Gambar komunitas 4"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto max-w-[150px] xl:block hidden absolute h-auto top-72 right-48 rounded-2xl"
        />
      </CustomContainer>
    </div>
  );
};

export default Community;
