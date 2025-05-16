import { skills } from "../../Data/skills"
import SkillDataProvider from "./SkillDataProvider"

function Skills() {
  return (
    <section id="skills" className=" flex flex-col items-center justify-center gap-3 
    h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.9" }}>
      <h2 className='text-5xl font-bold p-3 text-transparent mb-10 bg-clip-text bg-gradient-to-br from-purple-300 to-gray-100'>
        My Skills
      </h2>
      <div className=" flex flex-row justify-around flex-wrap mt-4
         gap-5 items-center">

        {
          skills.map((item, index) => {
            return (
              <SkillDataProvider key={index}
                src={item.image}
                name={item.name}
                index={index} />
            )
          })
        }



      </div>

    </section>
  )
}

export default Skills
