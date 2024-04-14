import React from "react";
import FAQCard from "./FAQCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const FAQ = () => {
  return (
    <section>
      <h1 className="heading-1">FAQ</h1>
      <FAQCard />
      <Link href="/faq" className="block ml-auto my-12 w-36">
        <span className="flex gap-2 items-center">
          See More <FaArrowRight />
        </span>
      </Link>
    </section>
  );
};

export default FAQ;
