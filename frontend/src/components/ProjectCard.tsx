import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

type Props = {
  githubLink: string;
  liveLink: string;
  title: string;
  techStack: string[];
  imgSrc: string;
  desc: string;
};

const ProjectCard = ({
  githubLink,
  liveLink,
  imgSrc,
  desc,
  title,
  techStack,
}: Props) => {
  return (
    <div className="w-fit mx-auto">
      <Link href={liveLink} target="_blank">
        <div className="w-72 h-44 sm:w-96 sm:h-64 rounded-3xl ring-[#a6a6a6] ring-2 relative overflow-hidden cursor-pointer group">
          <Image
            src={imgSrc}
            fill={true}
            alt="not found"
            className="object-cover w-full h-full"
          />
          <div className="size-0 bg-black  group-hover:h-[300px] group-hover:w-[600px] transition-all duration-1000 ease-in-out absolute -left-40 -top-24 -rotate-[64deg] flex flex-col justify-end gap-2 p-2">
            <div className="w-full h-[8px] bg-white"></div>
            <div className="w-full h-[8px] bg-white"></div>
            <div className="w-full h-[8px] bg-white"></div>
          </div>
          <div className="absolute top-6 left-6 size-0 group-hover:size-fit overflow-hidden ease-in-out duration-300">
            <h1 className="font-Glory text-2xl w-36 font-bold opacity-0 group-hover:opacity-100 delay-300 tansition ease-in-out">{title}</h1>
            <p className="font-medium text-xs w-36 opacity-0 group-hover:opacity-100 delay-300 transition ease-in-out ">
              {techStack.map((item, idx) => {
                return (
                  <span key={idx}>
                    {item}
                    {" | "}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </Link>

      {/* Description */}
      <div className="h-[190px] my-6 sm:my-0 flex flex-col justify-between">
        <div>
          <h1 className="font-bold heading-5 my-6">{title}</h1>
          <p className="w-72 sm:w-96 line-clamp-3">{desc}</p>
        </div>

        <Link href={githubLink} className="flex gap-3" target="_blank">
          <FaGithub size={24} />
          <span>Github Link</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
