import ProjectCard from "@/components/ProjectCard";
import React from "react";
import { projectList } from "@/config/list--config";

const ProjectPage = () => {
  return (
    <section className="min-h-screen">
      <h1 className="text-5xl font-bold font-Glory tracking-wider">
        Where Ideas Take Shape:
      </h1>
      <h1 className="text-5xl font-bold tracking-wider mt-6 text-orange-500 font-Glory">
        Explore My Web Projects!
      </h1>

      <div className="w-fit grid sm:grid-cols-3 mx-auto gap-24 mt-24">
        {projectList.map((item, idx) => {
          return <ProjectCard key={idx} {...item}/>;
        })}
      </div>
    </section>
  );
};

export default ProjectPage;
