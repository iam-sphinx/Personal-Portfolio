import Image from "next/image";
import React from "react";
type Props = {
  title: string;
  imgSrc: string;
};
const SkillCard = ({ title, imgSrc }: Props) => {
  return (
    <div className="h-32 w-32 rounded-lg flex items-center justify-center bg-gray-1 relative overflow-hidden ring ring-[#2f2f2f]">
      <div className="h-20 w-20 relative">
        <Image
          src={imgSrc}
          alt="not found"
          fill={true}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gray-700 transition-all ease-in-out duration-300 cursor-pointer flex items-center justify-center group hover:backdrop-filter hover:backdrop-blur-md bg-opacity-10">
        <h1 className="opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 heading-5 text-inherit">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default SkillCard;
