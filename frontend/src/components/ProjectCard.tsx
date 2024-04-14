import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <div>
      <div className="w-96 h-64 rounded-3xl ring-[#a6a6a6] ring-2 relative overflow-hidden cursor-pointer">
        <Image
          src="/project.jpg"
          fill={true}
          alt="not found"
          className="object-cover w-full h-full "
        />
        <div className="h-[300px] w-[500px] bg-black  absolute -left-40 -top-24 -rotate-[64deg] flex flex-col justify-end gap-2 p-2">
          <div className="w-full h-[8px] bg-white"></div>
          <div className="w-full h-[8px] bg-white"></div>
          <div className="w-full h-[8px] bg-white"></div>
        </div>

        <div className="absolute top-6 left-6">
          <h1 className="font-Glory text-2xl w-36 font-bold">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="font-medium text-sm">Lorem, ipsum.</p>
        </div>
      </div>

      {/* Description */}
      <div className="">
        <h1 className="font-bold heading-5 my-6">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="w-96 line-clamp-4 mb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, deleniti
          repellat accusantium officia voluptatum tempora reprehenderit.
          Voluptatum perferendis et ullam similique atque voluptate tenetur
          animi.
        </p>

        <Link href={"/github"} className="flex gap-3">
          <FaGithub size={24} />
          <span>Github Link</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
