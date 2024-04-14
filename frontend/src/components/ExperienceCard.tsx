import Link from "next/link";
import React from "react";

type Props = {
  jobTitle: string;
  tenure: string;
  description: string[];
  techStack: string;
  webUrl: string;
  company: string;
  id: number;
};

const ExperienceCard = ({
  jobTitle,
  tenure,
  description,
  techStack,
  webUrl,
  company,
  id,
}: Props) => {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col justify-center w-fit items-center gap-3 ">
        <div className="relative flex h-6 w-6">
          {id === 0 && (
            <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></div>
          )}
          <div className="relative inline-flex rounded-full h-6 w-6 bg-orange-500"></div>
        </div>
        <div className="flex-1 w-0 border-l-2 border-dashed border-orange-500"></div>
      </div>

      <div className="mt-7 ml-7 flex flex-col gap-6">
        <h1 className="text-xl font-bold font-Glory tracking-wider">
          {jobTitle}
        </h1>
        <Link
          href={webUrl}
          target="_blank"
          className="heading-4 tracking-wider"
        >
          {company}
        </Link>
        <h1 className="heading-6 tracking-wider">{tenure}</h1>

        <div className="w-[700px] bg-page  bg-no-repeat bg-cover rounded-lg mt-6 overflow-hidden">
          <div className=" p-2 px-6">
            {description.map((para, idx) => {
              return (
                <p className="text-gray-1 mb-2 heading-6" key={idx}>
                  {para}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
