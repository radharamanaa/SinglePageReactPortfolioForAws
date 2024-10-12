import React from "react";
import { Experience } from "../data/ExperienceData";
import "@fontsource/poppins";
import "@fontsource/roboto"; // Defaults to weight 400
export interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<{ experience: Experience }> = ({
  experience,
}) => {
  return (
    <div className="max-w-6xl bg-slate-100 shadow-lg shadow-slate-600 rounded-t-lg">
      <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-4 mx-auto max-w-6xl text-center md:text-left">
        <div className="flex w-64 h-64 md:w-full md:h-full  bg-white/30 items-center justify-center">
          <img
            src={experience.urlForTitle}
            alt={experience.title}
            className="object-cover grayscale-[25%] blur-xs"
          />
        </div>
        <div className="flex flex-col mt-4 w-11/12">
          <div
            className="text-4xl font-thin text-neutral-800"
            style={{ fontFamily: "Poppins" }}
          >
            {experience.title}
          </div>
          <div className="text-sm flex justify-between text-slate-600">
            <div className="ml-2">
              <span className=" font-semibold">{experience.company}</span>,{" "}
              {experience.location}{" "}
            </div>
            <p className="text-xs bg-slate-800 px-2 py-1 text-slate-50">
              {experience.start} - {experience.end}
            </p>
          </div>

          <div
            className="text-md py-4 tracking-tight first-letter:text-2xl first-letter:ml-8"
            dangerouslySetInnerHTML={{ __html: experience.description }}
            style={{ fontFamily: "Roboto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
