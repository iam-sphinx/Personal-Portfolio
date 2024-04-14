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
    <div className="mb-24">
      <Breaker />
      <h1 className="title-2 text-center">Contact Me For More!</h1>
      <Link href="/contact" className="block mx-auto w-fit">
        <span className="px-6 py-4 bg-gray-1 rounded-full flex items-center gap-3 text-lg font-medium my-16 tracking-wider">
          Contact Details
          <RxArrowTopRight size={24} />
        </span>
      </Link>

      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Image
              src="/footerLogo.svg"
              height={64}
              width={64}
              alt="not found"
            />
            <span className="heading-2 tracking-wider">KANDARP</span>
          </div>
          <h1 className="heading-6 mb-6">
            {year} &#169; - All Rights Reserved.
          </h1>

          <h2 className="heading-6 mb-3">Privacy Policy.</h2>
          <h2 className="heading-6">Terms &amp; Conditions.</h2>
        </div>

        {/* Links */}

        <FooterLinks title="Links" links={navList} />

        {/* Social Links*/}
        <FooterLinks title="Social networks" links={socialLinks} />

        {/* Contact Info */}
        <FooterLinks title="Contact me" links={contactInfo} />
      </div>
    </div>
  );
};

export default Footer;
