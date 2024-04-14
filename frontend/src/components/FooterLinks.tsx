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
    <div>
      <h1 className="heading-4">{title}</h1>

      <ul className="flex flex-col gap-3 mt-3">
        {links.map((item, idx) => {
          return (
            <li key={idx} className="cursor-pointer">
              {item.link ? (
                <Link
                  href={item.link}
                  target={item.target}
                  className="flex items-center gap-3"
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
