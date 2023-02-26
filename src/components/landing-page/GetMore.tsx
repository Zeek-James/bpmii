import { getMore } from "@/constants/landingPage";
import Image from "next/image";
import React from "react";

const GetMore = () => {
  return (
    <div className="flex">
      <div className="">
        <h2>Get more from The BPMI</h2>
        {getMore.map(({ title, text, pic, id }) => (
          <div className="flex" key={id}>
            <div className="">
              <h4 className="font-semibold">{title}</h4>
              <p>{text}</p>
            </div>
            <Image src={`/${pic}.jpg`} width={200} height={200} alt={title} />
          </div>
        ))}
      </div>
      <div className="">
        <Image src={"/div.jpg"} alt="" width={200} height={200} />
        {/* <Image src={"/div_before.jpg"} alt="" width={200} height={200} /> */}
        <div className="">
          <h2>Join Our Upcoming Events</h2>
          <div className="">
            {[28, 22, 15, 5].map((a) => (
              <div className="flex">
                <div className="">
                  <p>Dec</p>
                  {a}
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetMore;
