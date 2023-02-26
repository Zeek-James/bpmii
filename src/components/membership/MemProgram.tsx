import Star from "@/assets/Star";

import { criterias } from "@/constants/membership";
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
              <Star />

              <h3 className="font-bold text-primary text-[36px] mb-5">
                GRADED MEMBERSHIP PROGRAMME (EXECUTIVE FAST TRACK){" "}
              </h3>
              <p className="font-normal text-[20px] text-black">
                Experienced practitioners in the field of process management
                shall have to take the executive fast track route to becoming
                members of the institutes. The years of practice and educational
                qualifications from relevant fields of studies shall be
                considered and they shall be offered the membership grades
                equivalent to their placement.
              </p>
            </div>
            <div className="relative flex">
              <Image
                src={"/woman.jpg"}
                alt=""
                width={460}
                height={330}
                className="bottom-3 left-3 relative z-10 rounded-xl"
              />
            </div>
          </div>
          <div className="">
            <table
              className={`${styles.paddingY}  table-auto  border-separate  w-full my-4`}
            >
              <thead>
                <tr className={` text-paleBlue font-bold text-[30px]`}>
                  <th className={`${col}   justify-center text-center`}>
                    Level
                  </th>
                  <th className={`${col}   justify-center text-center`}>
                    Criteria
                  </th>
                  <th className={`${col}   justify-center text-center`}>
                    Who is it For?
                  </th>
                </tr>
              </thead>
              <tbody>
                {criterias.map((q) => (
                  <tr key={q.id}>
                    <td className={`${col}  text-center `}>
                      <p className="text-[28px] ">
                        {q.level[0]}
                        <br />
                        {q.level[1]}
                      </p>
                    </td>
                    <td className={`${col} `}>
                      <div className="">
                        <p className=" text-black font-normal text-[18px]">
                          {q.criteria}
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
