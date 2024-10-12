import allExperiences from "../data/ExperienceData";
import Heading from "../molecules/Heading";
import ExperienceCard from "../organisms/ExperienceCard";
const Experience = () => {
  return (
    <div className="flex flex-col mx-auto px-4 py-6 mt-4" id="Experience">
      <Heading heading="Experience" />
      <div className="h-[1px] w-8/12 mx-auto bg-slate-600" />
      <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-1 gap-4 items-start">
        {allExperiences.map((exp, index) => (
          <ExperienceCard experience={exp} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
