import Image from "next/image";
import React from "react";

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
      "
        alt=""
        height={500}
        width={2000}
      />

      <div
        className="
        pt-20
      min-h-[490px] lg:h-[520px]
      text-white  flex  items-center justify-end  z-20 px-4"
      >
        <h1 className="lg:text-5xl text-3xl mb-2 leading-[40px] sm:leading-[60px] text-center sm:text-start">
          {title}
        </h1>
      </div>
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
      "
        alt=""
        height={500}
        width={2000}
      />

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
