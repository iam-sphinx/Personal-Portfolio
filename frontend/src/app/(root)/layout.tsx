import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-black-1 text-white sm:px-24 p-2 flex flex-col flex-1">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
