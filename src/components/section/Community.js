import React from "react";
import CustomContainer from "../custom/CustomContainer";
import Link from "next/link";
import Image from "next/image";

const Community = () => {
  return (
    <div className="text-lora text-text mb-[15vh] relative">
      <CustomContainer className="flex relative text-center flex-col items-center justify-center">
        <h1 className="text-4xl max-w-[770px] mb-16">
          Join our community for volunteering and be a part of positive change
          in the world. with over:
        </h1>
        <h1 className="text-9xl mb-12">125,259</h1>
        <div className="flex flex-col items-center gap-5">
          <h3 className="text-2xl font-medium">People are already joining</h3>
          <div className="flex md:flex-row flex-col justify-center items-center z-20">
            <Link
              href="https://calculator.ecofy.dandy.my.id/"
              className="capitalize bg-primary hover:bg-primary-foreground text-2xl py-3 px-10 rounded-full transition ease-in-out duration-300"
            >
              <button>Yes I want to join our community</button>1
            </Link>
          </div>
        </div>
        <Image
          src="/com/com11.png"
          alt="features image"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto max-w-[150px] xl:block hidden absolute h-auto top-7 left-0 rounded-2xl"
        />
        <Image
          src="/com/com21.png"
          alt="features image"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto max-w-[150px] xl:block hidden absolute h-auto top-60 left-48 rounded-2xl"
        />
        <Image
          src="/com/com31.png"
          alt="features image"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto max-w-[150px] xl:block hidden absolute h-auto top-7 right-5 rounded-2xl"
        />
        <Image
          src="/com/com41.png"
          alt="features image"
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
