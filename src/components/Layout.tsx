import React from "react";
import { Footer, Navbar } from "./";

interface LayoutProp {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProp) => {
  return (
    <div>
      <Navbar />
      <div className="sm:pt-26 pt-24 bg-[#F5F5F5]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
