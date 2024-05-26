import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  title: string;
  links: {
    title?: string;
    link?: string;
    element?: ReactNode;
    target?: string;
  }[];
};
const FooterLinks = ({ title, links }: Props) => {
  return (
    <div className="mt-3">
      <h1 className="heading-4 my-3">{title}</h1>

      <ul className="flex sm:flex-col gap-1 justify-between ">
        {links.map((item, idx) => {
          return (
            <li key={idx} className="cursor-pointer">
              {item.link ? (
                <Link
                  href={item.link}
                  target={item.target}
                  className="flex items-center gap-1 sm:gap-3"
                >
                  {item.element} {item.title}
                </Link>
              ) : (
                <span key={idx} className="flex items-center gap-3">
                  {item.element} {item.title}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterLinks;
