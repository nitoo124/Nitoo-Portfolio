import Image from "next/image";
import { Button } from "./ui/Moving-border";
import { workExperience } from "../../Data/WorkExperience";



function Experience() {
  return (
    <div id="experience" className="py-20 flex flex-col justify-center items-center">
      <h2 className="text-5xl font-bold p-3 text-purple-200 mb-10 ">
        Experience
      </h2>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map((item, index) => (
          <Button key={item.id} className="p-6 flex px-10 flex-col justify-center items-start">
            <Image src={item.image} alt={item.role} width={70} height={70}
            className=" mx-auto" />
            <h3 className="text-xl font-semibold mb-2 mx-auto">{item.role}</h3>
            <p className="text-sm text-gray-400 mb-3">{item.responsibilities}</p>
           
            
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Experience;
