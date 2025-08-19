import SkillsCardComponent from "../SkillsCardComponent";
import data from "../data/skills.json";

const SkillsComponent = () => {
  return (
    
    <div
      id="skills"
      className="flex flex-col items-center justify-center w-11/12  h-fit pb-10 rounded-2xl   "
      style={{
    background: " linear-gradient(to bottom, #7c3aed 45%, transparent 30%)"
  }}
    >
      <div className="  md:mt-15 mt-15 mb-15 md:mb-0  text-center">
        <h1 className="text-5xl md:text-5xl font-bold text-white  ">Skills</h1>
      </div>
      <div className="flex md:flex-row flex-col  md:mt-15 mt-8 gap-20 justify-center md:items-start items-center ">
        <SkillsCardComponent 
        
        name={data.frontend.name}
        description={data.frontend.description}
        languages={data.frontend.languages}
        tools={data.frontend.tools}

        />
        
        <SkillsCardComponent 

          name={data.backend.name}
        description={data.backend.description}
        languages={data.backend.languages}
        tools={data.backend.tools}

        />
      </div>
    </div>
  );
};

export default SkillsComponent;
