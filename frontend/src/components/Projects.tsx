import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { projectList } from "@/config/list--config";

const Projects = () => {
  return (
    <section className="mb-24">
      <h1 className="heading-1">Projects</h1>
      <Link href="/projects" className="block ml-auto my-12 w-36">
        <span className="flex gap-2 items-center">
          See More <FaArrowRight />
        </span>
      </Link>

      <div className="grid grid-cols-3">
        {projectList.map((item, idx) => {
          return idx < 3 && <ProjectCard key={idx} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
