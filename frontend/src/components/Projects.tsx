import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { projectList } from "@/config/list--config";

const Projects = () => {
  return (
    <section className="mb-24">
      <h1 className="heading-1 mt-12 sm:mt-0">Projects</h1>
      <Link href="/projects" className="block ml-auto my-6 sm:my-12 w-fit">
        <span className="flex gap-2 items-center">
          See More <FaArrowRight />
        </span>
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-3">
        {projectList.map((item, idx) => {
          return idx < 3 && <ProjectCard key={idx} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
