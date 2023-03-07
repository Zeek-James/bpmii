import Image from "next/image";
import React from "react";
import PLink from "./PLink";

interface HeroProp {
  img?: string;
  title: string;
}

const Hero = ({ img, title }: HeroProp) => {
  return (
    <div className="relative flex  items-center justify-center min-h-[400px] md:min-h-[500px] mb-10">
      <Image
        src={`/${img}.jpg`}
        className="w-[100%]  
     h-[100%] 
      absolute
      object-cover
      "
        alt=""
        height={500}
        width={1000}
      />
      <div className="bg-black absolute w-full h-full z-10 opacity-[0.6]" />

      <div
        className="
        pt-20
      min-h-[490px] lg:h-[520px]
      text-white  flex flex-col items-center justify-center  z-20 px-4"
      >
        <h1 className="lg:text-5xl text-3xl mb-4 md:mb-8 leading-[40px] sm:leading-[60px] text-center sm:text-start">
          {title}
        </h1>
        <PLink
          styles="bg-white text-primary rounded-lg px-5 mt-8"
          href="membership"
          text="Become A Member"
        />
      </div>
      {/* <Image
        src={`/herobtm.jpg`}
        className="w-[100%]  
     h-[100%] 

      "
        alt=""
        height={500}
        width={1000}
      /> */}
    </div>
  );
};

export const Herofn = ({ img }: HeroProp) => {
  return (
    <div className="relative flex  items-center justify-center min-h-[400px] md:min-h-[500px] mb-10">
      <Image
        src={`/${img}.jpg`}
        className="w-[100%]  
     h-[100%] 
      absolute
      object-cover
      "
        alt=""
        height={500}
        width={1000}
      />
      <div className="bg-black absolute w-full h-full z-10 opacity-[0.6]" />
      <div
        className="
        pt-20
      min-h-[490px] lg:h-[520px]
      text-white  flex  items-center  justify-end  z-20 px-4"
      >
        <h1 className="lg:text-5xl text-3xl mb-2 leading-[40px] sm:leading-[60px] text-center sm:text-start ">
          Promoting
          <span className="text-primary ">
            the practice of Business <br /> Process Management in Nigeria
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
