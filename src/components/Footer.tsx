import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { footer } from "../constants";
import PLink from "./PLink";

const Footer = () => {
  const { links, copyRight } = footer;
  return (
    <section
      className={
        "  pt-6 sm:pt-16 pb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center"
      }
    >
      <div className="flex">
        <Link href={""} className="pr-4">
          <FaFacebookF />
        </Link>
        <Link href={""} className="px-4">
          <FaLinkedinIn />
        </Link>
        <Link href={""} className="px-4">
          <FaTwitter />
        </Link>
      </div>
      <div className=" ">
        <div className="mb-4 sm:mb-0">
          <div className="  w-full   flex flex-wrap  ">
            {links.map((f) => (
              <p
                key={f?.id}
                className="px-2  mb-2 text-base hover:text-primary"
              >
                <a href={`${f.id}`}>{f.title}</a>
              </p>
            ))}
          </div>
        </div>
        <p className="text-sm whitespace-nowrap ">{copyRight}</p>
      </div>
    </section>
  );
};

export default Footer;
