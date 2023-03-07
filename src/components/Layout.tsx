import React from "react";
import { Footer, Navbar } from "./";
import { Footerfn } from "./Footer";

interface LayoutProp {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProp) => {
  return (
    <div>
      <Navbar />
      <div className="sm:pt-26 pt-24 bg-[#FFF]">{children}</div>
      {/* <div className="sm:pt-26 pt-24 bg-[#F5F5F5]">{children}</div> */}
      <Footerfn />
    </div>
  );
};

export const LayoutFn = ({ children }: LayoutProp) => {
  return (
    <div>
      <Navbar />
      <div className="sm:pt-26 pt-24 bg-[#FFF]">{children}</div>
      <Footer />
    </div>
  );
};

export const DashboardLayout = ({ children }: LayoutProp) => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="sm:pt-26 pt-24 bg-[#FFF]">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
