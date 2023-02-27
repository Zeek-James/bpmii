import React from "react";
import { Links, styles } from "../";
import { About } from "../landing-page";

const Events = () => {
  return (
    <section className="">
      <div className="flex justify-center mb-4 md:mb-12">
        <h5 className="text-gray mr-3 text-[17px]">HOME</h5>/{" "}
        <h5 className="text-paleBlue ml-3 text-[17px] border-b">Service</h5>
      </div>
      <div className="flex flex-col md:flex-row sm:px-10 px-4  sm:pb-20 pb-4">
        <div className="flex flex-col justify-between">
          <ul className="list-none flex flex-col   ">
            <Links />
          </ul>
        </div>
        <div className={`${styles.paddingX} w-full`}>
          <About max={"max"} />
        </div>
      </div>
    </section>
  );
};

const col = "  md:p-4 p-2  w-[300px] ";

export default Events;
