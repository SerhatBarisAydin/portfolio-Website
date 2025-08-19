import Lottie from "lottie-react";

interface SkillsCardComponentProps {
  name: string;
  description?: string;
  languages?: string[];
  tools?: string[];
  imgSrc?: object; // Optional image source
}
const SkillsComponent = (props: SkillsCardComponentProps) => {
  return (
    <div className="card md:bg-base-200 bg-orange-100 pt-5 md:mb-10 nb-5 md:w-4/14 w-4/5 min-h-fit flex relative shadow-sm hover:shadow-lg ">
      <figure>
        
        <Lottie className="h-25 md:h-50 md:mt-5" animationData={props.imgSrc} loop={true} />
      </figure>
      <div className="card-body font-mono text-gray-500 text-center ">
        <h2 className="justify-center md:text-2xl text-xl card-title md:mt-5 md:mb-5">
          {props.name}
        </h2>
        <p className="md:mb-5 md:text-sm text-xs md:text-justify  text-center">{props.description}</p>
        
        
        
        
       <div className="flex md:flex-col flex-row gap-6 md:ga-0 md:items-center md:mt-0 mt-5 items-start justify-center">
        <div className="flex flex-col items-center justify-center">
        
        <h2 className="text-blue-400 md:text-xl text-sm  md:font-bold font-bold md:mt-5 md:mt-0   md:mb-5 ">
          Languages:
        </h2>
        <ul className="md:font-light font-extralight flex flex-col justify-center md:text-lg text-sm items-center md:gap-3 md:mb-8 gap-1 mb-3">
          {props.languages?.map((language, index) => (
            <li key={index}> {language} </li>
          ))}
        </ul>
        
        </div>

          <div className="flex flex-col  items-center justify-center">
        <h2 className="text-blue-400 md:text-xl text-sm md:font-bold font-bold md:mb-5  ">
          My Tools:
        </h2>
        <ul className="md:font-light md:text-lg font-extralight flex flex-col justify-center items-center md:gap-3 gap-1 ">
          {props.tools?.map((tool, idx) => (
            <li key={idx}> {tool} </li>
          ))}
        </ul>
        </div>
      
        </div>




      
      </div>
    </div>
  );
};

export default SkillsComponent;
