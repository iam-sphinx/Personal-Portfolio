import React from "react";
import SkillCard from "./SkillCard";
import { skillList } from "@/config/list--config";

const Skills = () => {
  return (
    <section className="my-24">
      <h1 className="heading-1 mb-6">Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-5 w-fit mx-auto gap-12">
        {skillList.map((list, idx) => {
          return <SkillCard key={idx} {...list} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
