import React from "react";
import { navList } from "@/config/list--config";
import Link from "next/link";

const NavPanel = () => {
  return (
    <div className="flex justify-between px-3 py-2 bg-gray-1 rounded-full flex-1 ">
      {navList.map((item, idx) => {
        return (
          <Link
            key={idx}
            href={item.link}
            target={item.target}
            className="hover:bg-white px-2 sm:px-6 py-1 rounded-full hover:text-black"
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default NavPanel;
