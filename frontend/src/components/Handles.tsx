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
const Handles = ({ links, title }: Props) => {
  return (
    <div>
      <h1 className="heading-3 mt-6">{title}</h1>
      <div className="flex gap-6 mt-6">
        {links.map((item, idx) => {
          return item.link ? (
            <Link href={item.link} key={idx} target={item.target}>
              {item.element}
            </Link>
          ) : (
            <span key={idx} className="flex items-center gap-2">
              {item.element} {item.title}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Handles;
