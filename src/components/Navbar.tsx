import { useRouter } from "next/router";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import { navLinks } from "@/constants";
import PLink from "./PLink";
import styles from "./style";
import LogoIcon from "./Logo";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const router = useRouter();

  const route = router.asPath.replace("/", "");

  return (
    <div
      className={`min-h-fit flex z-30 fixed flex-col  w-full bg-white shadow-lg sm:py-6 py-3  ${styles.paddingX} top-0`}
    >
      <nav className="w-full flex  z-40 top-0 left-0  py-2 justify-between items-center navbar">
        <Link href={"/"} className="grow mr-4">
          {/* <LogoIcon /> */}
          <Image src={"/logo.jpg"} alt="" height={60} width={60} />
        </Link>
        <ul className="list-none xl:flex hidden  items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] p-2 rounded-md text-link whitespace-nowrap ${
                route === nav.id ? "underline-offset-8 underline " : "text-link"
              }  
          ${index === navLinks.length - 1 ? "mr-0" : "mr-2 lg:mr-5"}
          `}
            >
              <a
                href={`/${nav.id}`}
                className={
                  nav.title === "Sign in"
                    ? "pl-6 border-l-[3px] border-primary"
                    : ""
                }
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
        <PLink
          href="become-a-member"
          text="Become A Member"
          styles="border border-secondary text-secondary xl:flex hidden  ml-20 "
        />
        <div className="xl:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <AiOutlineClose
              className="mx-2 text-primary block text:3xl cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <AiOutlineMenu
              className="mx-2 text-primary block text:3xl cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}

          <div
            className={`${!toggle ? "hidden" : ""}
          p-6 bg-[#eeeaea] shadow-lg absolute top-20 right-0 mx-4 my-2 min-w-[140px]  rounded-xl sidebar
          `}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`
              font-poppins font-medium cursor-pointer text-[16px] 
              p-2 rounded-md 
              ${
                route === nav.id
                  ? "underline-offset-8 underline text-link"
                  : "text-link"
              }  
              mb-4`}
                >
                  <a href={`/${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
            <div className="flex lg:hidden">
              <PLink
                href="become-a-member"
                text="Become A Member"
                styles="border border-secondary  text-secondary flex lg:hidden"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
