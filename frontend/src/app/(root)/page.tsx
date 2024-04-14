import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ";
import Projects from "@/components/Projects";
import React from "react";

const page = () => {
  return (
    <div className="flex-1">
      <Banner />
      <Projects />
      <FAQ />
    </div>
  );
};

export default page;
