import Image from "next/image";
import React from "react";
import PLink from "../PLink";

interface AboutProps {
  max?: string;
}

const About = ({ max }: AboutProps) => {
  console.log(max);

  const arr = max === "max" ? [1, 2, 3, 4, 5, 6, 7, 8] : [1, 2, 3, 4];
  return (
    <div>
      <h2>Learn about BPMI by exploring our Publications</h2>
      <div className="grid xl:grid-cols-2 gap-4 sm:grid-cols-1">
        <div className="">
          <h4>SEARCH FOR A RESOURCE</h4>
        </div>
        <div className="">Topic</div>
      </div>
      <div className="grid xl:grid-cols-4 gap-4 lg:gap-8 sm:grid-cols-2">
        {arr.map((item, idx) => (
          <div className="p-3 sm:p-0 max-w-[270px]" key={idx}>
            <Image
              width={270}
              height={350}
              src={`/chart.jpg`}
              alt="category"
              key={item}
              className="cursor-pointer mb-2"
            />
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-3 md:my-10">
        <PLink
          text="See more"
          styles="bg-primary rounded-none text-white p-4 "
          href="about"
        />
      </div>
    </div>
  );
};

export default About;
