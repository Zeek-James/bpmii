import { getMore } from "@/constants/landingPage";
import Image from "next/image";
import GrayBg from "@/assets/grayBg";
import React from "react";
import Button from "../Button";

const GetMore = () => {
  return (
    <div className="flex mt-4 md:mt-24 items-center relative">
      <div className="w-full my-40 relative left-[100px]">
        <h2 className="font-bold text-[41px] text-[#00305E] ">
          Get more from The BPMI
        </h2>
        {getMore.map(({ title, text, pic, id }) => (
          <div className="flex my-4 md:my-12" key={id}>
            <div className="">
              <h4 className="text-gray text-[14px] font-bold ">{title}</h4>
              <p className="text-[#6C8AC0] text-[22px] max-w-md mr-16 font-inter ">
                {text}
              </p>
            </div>
            <Image src={`/${pic}.jpg`} width={200} height={200} alt={title} />
          </div>
        ))}
      </div>
      <div className=" w-full flex flex-col items-end absolute z-10 top-[40px] ">
        <Image
          src={"/div.jpg"}
          alt=""
          width={200}
          height={200}
          className="mr-12 md:mr-24 mb-12"
        />
        <div className=" relative">
          <div className="mt-20   w-full flex items-center justify-center  absolute">
            <div className=" ml-20">
              <h2 className="text-primary font-bold text-[39px] font-inter ">
                Join Our Upcoming <br /> Events
              </h2>
              <div className="">
                {[28, 22, 15, 5].map((a) => (
                  <div className="flex max-w-[500px] border-b border-[#DBDBDB] py-2">
                    <div className="font-semibold text-[#00305E] text-[21px] font-inter mr-6">
                      <p className="text-[12px]  border-b-2 border-[#9ACA3C] pb-1 ">
                        Dec
                      </p>
                      {a}
                    </div>
                    <p className="font-inter font-normal text-[20px] text-gray ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis.
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex w-full justify-center p-16">
                <Button
                  text="View All"
                  styles="bg-primary text-white rounded-full px-4"
                />
              </div>
            </div>
          </div>
          <GrayBg className=" max-w-[700px]" />
        </div>
      </div>
      {/* <div className=" relative">
        <div className="mt-20   w-full flex items-center justify-center  absolute">
          <div className=" ml-20">
            <h2 className="text-primary font-bold text-[39px] font-inter ">
              Join Our Upcoming <br /> Events
            </h2>
            <div className="">
              {[28, 22, 15, 5].map((a) => (
                <div className="flex max-w-[500px] border-b border-[#DBDBDB] py-2">
                  <div className="font-semibold text-[#00305E] text-[21px] font-inter mr-6">
                    <p className="text-[12px]  border-b-2 border-[#9ACA3C] pb-1 ">
                      Dec
                    </p>
                    {a}
                  </div>
                  <p className="font-inter font-normal text-[20px] text-gray ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                </div>
              ))}
            </div>
            <div className="flex w-full justify-center p-16">
              <Button
                text="View All"
                styles="bg-primary text-white rounded-full px-4"
              />
            </div>
          </div>
        </div>
        <GrayBg className="bg-[blue] max-w-[700px]" />
      </div> */}
    </div>
  );
};

export default GetMore;
