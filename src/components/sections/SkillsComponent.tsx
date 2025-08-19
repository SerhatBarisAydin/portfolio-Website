import SkillsCardComponent from "../SkillsCardComponent";
import data from "../data/skills.json";
import backend from "../../assets/animations/backend.json";
import frontend from "../../assets/animations/frontend.json";
const SkillsComponent = () => {
  return (
    
    <div
      id="skills"
      className="flex flex-col items-center justify-center w-11/12  h-fit pb-10 rounded-2xl   "
      style={{
    background: " linear-gradient(to bottom, #7c3aed 30%, transparent 30%)"
  }}
    >
      <div className="  md:mt-15 mt-10 mb-0 md:mb-0  text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white  ">Skills</h1>
      </div>
      <div className="flex md:flex-row flex-col  md:mt-15 mt-8 gap-20 justify-center md:items-start items-center ">
        <SkillsCardComponent 
        
        name={data.frontend.name}
        description={data.frontend.description}
        languages={data.frontend.languages}
        tools={data.frontend.tools}
        imgSrc={frontend} // Using the image source from the data

        />
        
        <SkillsCardComponent 

          name={data.backend.name}
        description={data.backend.description}
        languages={data.backend.languages}
        tools={data.backend.tools}
        imgSrc={backend} // Using the image source from the data"

        />
      </div>
    </div>
  );
};

export default SkillsComponent;
