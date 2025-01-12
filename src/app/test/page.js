import CustomContainer from "@/components/custom/CustomContainer";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="mt-[120px]">
      <CustomContainer customWidth="max-w-[1160px]">
        <h1 className="title">Pemberishan sungai ciliwung</h1>
        <h2 className="text-2xl mt-5 font-secondary font-lora">
          Event ini di tujukan untuk membersihkan sungai cilliwung dari
          sampah-sampah.
        </h2>
        <h2 className="text-2xl mt-1 font-secondary font-lora">
          Event ini di adakan oleh{" "}
          <Link
            className="inline-block text-secondary relative group transition-all ease-in-out"
            href={`test`}
            target="_"
          >
            <p className="relative group-hover:text-primary">
              pandawra group
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </p>
          </Link>
          .
        </h2>
        <Link href={`/requestEvent`} target="_">
          <Button size="lg" className="text-text mt-5 text-lg">
            Sign Up Untuk Event
          </Button>
        </Link>
        <Image
          src={`/features1.jpg`}
          alt="features image"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto max-w-[50%] h-auto rounded-lg mt-4"
        />
        <p className="text-lg mt-4 mb-9 text-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
          consectetur tortor, at ultrices nisi. Sed vel consectetur tortor, at
          ultrices nisi. Sed vel consectetur tortor, at ultrices nisi. Sed vel
        </p>
      </CustomContainer>
    </div>
  );
};

export default page;
