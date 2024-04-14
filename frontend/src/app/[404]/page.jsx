import Image from "next/image";
import Link from "next/link";
import React from "react";

const custom404 = () => {
  return (
    <div className="min-h-screen bg-black-1 bg-space bg-contain text-white relative">
      <div className="absolute inset-0 bg-[#4444448c] flex flex-col items-center">
        <div className="flex justify-center">
          <Image
            src="/astronaut.png"
            width={500}
            height={500}
            alt="not found"
            className="animate-float"
          />
          <Image
            src="/ufo.png"
            width={500}
            height={500}
            alt="not found"
            className="animate-floatReverse"
          />
        </div>
        <h1 className="heading-1">Oops! You have lost somewhere in space.</h1>
        <Link
          href="/"
          className="px-6 py-2 rounded-full bg-white text-black mt-6 heading-5"
        >
          Back to Base.
        </Link>
      </div>
    </div>
  );
};

export default custom404;
