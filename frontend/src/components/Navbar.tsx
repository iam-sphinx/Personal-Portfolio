import React from "react";
import Image from "next/image";
import NavPanel from "./NavPanel";
import Link from "next/link";
import Breaker from "./Breaker";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between mt-6 sm:gap-36 items-center">
        <Link href={"/"} className="hidden sm:block">
          <Image src={"/logo.svg"} height={24} width={24} alt="logo" />
        </Link>

        <NavPanel />
      </div>
      <Breaker />
    </>
  );
};

export default Navbar;
