import FAQCard from "@/components/FAQCard";
import React from "react";

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <h1 className="heading-1 tracking-wider">Development Decoded:</h1>
      <h1 className="heading-1 my-6 tracking-wider">Your FAQs Answered</h1>
      <p className="max-w-[600px] text-[#a6a6a6]">
        Explore the Frequently Asked Questions to gain insights into the world
        of web development. Find clarity and discover the secrets behind
        compelling websites.
      </p>
      <FAQCard show />
    </div>
  );
};

export default FAQ;
