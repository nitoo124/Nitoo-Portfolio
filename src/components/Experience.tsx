import { Button } from "./ui/Moving-border";
import { workExperience } from "../../Data/WorkExperience";

function Experience() {
  return (
    <div id="experience" className="py-20 flex flex-col justify-center items-center">
      <h2 className="text-5xl font-bold p-3 bg-clip-text text-transparent bg-gradient-to-r
       from-purple-300  to-purple-700  mb-10 ">
        Experience
      </h2>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              className="p-6 flex px-10 flex-col justify-start items-start"
            >
              <Icon className="text-5xl text-purple-500 mb-4 self-center" />
              <h3 className="text-xl font-semibold mb-2 text-left text-gray-200">{item.role}</h3>
              <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1 text-left w-full">
                {item.responsibilities.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
