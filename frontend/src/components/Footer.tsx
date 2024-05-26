import React from "react";
import Breaker from "./Breaker";
import Link from "next/link";
import { RxArrowTopRight } from "react-icons/rx";
import Image from "next/image";
import FooterLinks from "./FooterLinks";
import { socialLinks, navList, contactInfo } from "@/config/list--config";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="mb-6 sm:mb-24">
      <Breaker />
      <h1 className="sm:title-2 heading-2 text-center">Contact Me For More!</h1>
      <Link href="/contact" className="block mx-auto w-fit">
        <span className="px-6 py-4 bg-gray-1 rounded-full flex items-center gap-3 text-lg font-medium my-16 tracking-wider">
          Contact Details
          <RxArrowTopRight size={24} />
        </span>
      </Link>

      <div className="flex sm:flex-row flex-col justify-between ">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="size-8 sm:size-16 relative">
              <Image src="/footerLogo.svg" fill alt="not found" />
            </div>
            <span className="sm:heading-2 heading-4 tracking-wider">
              KANDARP
            </span>
          </div>
          <h1 className="heading-6 mb-6 hidden sm:block">
            {year} &#169; - All Rights Reserved.
          </h1>

          <h2 className="heading-6 mb-3 hidden sm:block">Privacy Policy.</h2>
          <h2 className="heading-6 hidden sm:block">Terms &amp; Conditions.</h2>
        </div>

        {/* Links */}

        <FooterLinks title="Links" links={navList} />

        {/* Social Links*/}
        <FooterLinks title="Social networks" links={socialLinks} />

        {/* Contact Info */}
        <div className="hidden sm:block">
          <FooterLinks title="Contact me" links={contactInfo} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
