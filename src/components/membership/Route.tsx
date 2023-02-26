import Union from "@/assets/Union";

import { categories } from "@/constants/membership";
import Image from "next/image";
import React from "react";
import Links from "../Links";
import PLink from "../PLink";
import styles from "../style";

const Route = () => {
  return (
    <section className="">
      <div className="flex justify-center mb-4 md:mb-12">
        <h5 className="text-gray mr-3 text-[17px]">HOME</h5>/{" "}
        <h5 className="text-paleBlue ml-3 text-[17px] border-b">Membership</h5>
      </div>
      <div className="flex flex-col md:flex-row sm:px-10 px-4  sm:pb-20 pb-4">
        <div className="flex flex-col justify-between">
          <ul className="list-none flex flex-col   ">
            <Links />
          </ul>
        </div>
        <div className={`${styles.paddingX}`}>
          <div className="my-3 md:my-10 flex">
            <div className="max-w-[700px]">
              <Union />

              <h3 className="font-bold text-primary text-[36px] mb-5">
                GRADING EXAMINATION ROUTE ( Membership){" "}
              </h3>
              <p className="font-normal text-[20px] text-black">
                The Graded membership programme is designed for first degree
                graduates of relevant disciplines and existing practitioners in
                the field of business process management. The first degree
                holders shall commence their BPM professional career by taking
                the various examinations required of them to become members of
                the institute.The Graded membership programme is designed for
                first degree graduates of relevant disciplines and existing
                practitioners in the field of business process management. The
                first degree holders shall commence their BPM professional
                career by taking the various examinations required of them to
                become members of the institute.
              </p>
            </div>
            <div className="relative flex">
              <Image
                src={"/class.jpg"}
                alt=""
                width={250}
                height={370}
                className="bottom-3 left-3 relative z-10 rounded-xl"
              />
              <Image
                src={"/index.jpg"}
                alt=""
                width={250}
                height={370}
                className="top-3 right-3 relative rounded-xl"
              />
            </div>
          </div>
          <div className="">
            <table
              className={`${styles.paddingY}  table-auto  border-separate  w-full my-4`}
            >
              <thead>
                <tr className={` text-paleBlue font-bold text-[30px]`}>
                  <th className={`${col}   justify-center text-center`}>S/N</th>
                  <th className={`${col}   justify-center text-center`}>
                    CATEGORY
                  </th>
                  <th className={`${col}   justify-center text-center`}>
                    DESCRIPTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories.map((q) => (
                  <tr key={q.id}>
                    <td className={`${col}  text-center `}>
                      <p className="text-[28px] ">{q.id}</p>
                    </td>
                    <td className={`${col} `}>
                      <div className="">
                        <p className="max-w-[200px] text-black font-normal text-[18px]">
                          {q.category}
                        </p>
                        <PLink
                          href={q.link}
                          styles="text-white text-[18px] mt-4 bg-primary rounded-none"
                          text="Apply"
                        />
                      </div>
                    </td>
                    <td className={`${col}  `}>
                      <p className=" text-black font-normal text-[18px]">
                        {q.description}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

const col = "  md:p-4 p-2  w-[300px] ";

export default Route;
