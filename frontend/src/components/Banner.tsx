import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-6xl font-bold  font-Glory">
          Hi, I&apos;m <span className="text-orange-500">Kandarp</span>
        </h1>
        <h1 className="text-6xl font-semibold my-4 font-Glory">
          Frontend Developer
        </h1>
        <p className="text-lg font-semibold tracking-wide max-w-lg my-4">
          A frontend software engineer and interface designer who builds UX rich
          accessible and performant website
        </p>
        <div className="my-24 flex gap-6">
          <Link
            href="https://drive.google.com/file/d/16tk_SnGiO10tc-4LzlNFqRK3lTbYcJRV/view?usp=sharing"
            download
            target="_blank"
            className="px-3 py-2 ring ring-[#a6a6a6] rounded-lg hover:bg-white hover:text-black text-lg hover:ring-0"
          >
            Resume
          </Link>

          <Link
            href="/contact"
            className="px-3 py-2 ring ring-[#a6a6a6] rounded-lg hover:bg-white hover:text-black text-lg hover:ring-0"
          >
            Contact
          </Link>
        </div>
      </div>

      <div className="size-96 relative overflow-hidden animate-laminar shadow-lg dropShadow ring-2 ring-[#a019fa]">
        <Image
          src="/project.jpg"
          fill={true}
          sizes="100%"
          alt="not found"
          className="object-cover w-full h-full "
        />
      </div>
    </div>
  );
};

export default Banner;
