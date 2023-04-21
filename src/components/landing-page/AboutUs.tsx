import Image from "next/image";
import React from "react";
import PLink from "../PLink";
import styles from "../style";

const AboutUs = () => {
  return (
    <div
      className={`my-3 md:my-10 flex flex-col-reverse xl:flex-row items-center `}
    >
      <div className="relative flex mt-20 xl:mt-0  xl:min-w-[400px]">
        <Image
          src={"/union.jpg"}
          alt=""
          width={250}
          height={370}
          className="bottom-3 left-3 relative z-10"
        />
        <Image
          src={"/penDown.jpg"}
          alt=""
          width={250}
          height={370}
          className="top-3 right-3 hidden sm:block relative"
        />
      </div>
      <div className="ml-10">
        <h3 className={`  text-primary ${styles.heading3} mb-5`}>
          ABOUT BUSINESS PROCESS MANAGEMENT INSTITUTE
        </h3>
        <p
          className={`font-normal  text-black ${styles.paragraph} max-w-5xl mb-8 `}
        >
          The Business Process Management Institute is established to develop
          and promote the practice of business process management in Nigeria.
          This is based on the desire to ensure that the highest quality valued
          is provided by the BPM practitioners in Nigeria.
        </p>
        <PLink
          text="Learn More"
          href="about-us"
          styles="bg-primary text-white p-4"
        />
      </div>
    </div>
  );
};

export default AboutUs;
