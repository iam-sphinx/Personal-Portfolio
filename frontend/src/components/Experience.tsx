import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experienceList } from "@/config/list--config";

const Experience = () => {
  return (
    <section className="my-24">
      <h1 className="heading-1 mb-6">Experience</h1>

      <div>
        {experienceList.map((item, idx) => {
          return <ExperienceCard key={idx} {...item}id={idx} />;
        })}
      </div>
    </section>
  );
};

export default Experience;
