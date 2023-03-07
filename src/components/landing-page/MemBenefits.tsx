import Image from "next/image";
import React from "react";
import PLink from "../PLink";
import styles from "../style";

const MemBenefits = () => {
  return (
    <div className={`my-3 md:my-10 flex flex-col xl:flex-row items-center `}>
      <div className="">
        <h3 className={`  text-primary ${styles.heading3} mb-5`}>
          MEMBERSHIP BENEFITS
        </h3>
        <p className={`font-normal  text-black ${styles.paragraph} max-w-5xl `}>
          As a member of the Business Process Management Institute, you are
          positioned to develop and improve on your business process management
          knowledge, skills, and network by joining the Business Process
          Management Institute.
        </p>
        <PLink
          text="Learn More"
          href="membership"
          styles="bg-primary text-white mt-8 p-4"
        />
      </div>
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
    </div>
  );
};

export default MemBenefits;
