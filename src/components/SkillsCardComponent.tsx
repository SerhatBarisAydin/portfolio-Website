
interface SkillsCardComponentProps {
  name: string;
  description?: string;
  languages?: string[];
  tools?: string[];
}
const SkillsComponent = (props: SkillsCardComponentProps) => {
  return (
    <div className="card bg-base-200 pt-5 md:mb-10 nb-5 md:w-4/14 w-4/5 min-h-fit flex relative shadow-sm hover:shadow-lg ">
      <figure>
        <img
          className="h-20 md:mt-5"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body font-mono text-gray-500 text-center ">
        <h2 className="justify-center md:text-2xl text-xl card-title md:mt-5 md:mb-5">
          {props.name}
        </h2>
        <p className="md:mb-5 md:text-lg text-xs text-center ">{props.description}</p>
        
        
        
        
       <div className="flex md:flex-col flex-row gap-6 md:ga-0 md:items-center md:mt-0 mt-5 items-start justify-center">
        <div className="flex flex-col items-center justify-center">
        
        <h2 className="text-blue-700 md:text-xl text-sm  md:font-light font-bold md:mt-5 md:mt-0   md:mb-5 ">
          Languages:
        </h2>
        <ul className="md:font-bold font-extralight flex flex-col justify-center md:text-lg text-sm items-center md:gap-3 md:mb-8 gap-1 mb-3">
          {props.languages?.map((language, index) => (
            <li key={index}> {language} </li>
          ))}
        </ul>
        
        </div>

          <div className="flex flex-col  items-center justify-center">
        <h2 className="text-blue-700 md:text-xl text-sm md:font-light font-bold md:mb-5  ">
          My Tools:
        </h2>
        <ul className="md:font-bold md:text-lg font-extralight flex flex-col justify-center items-center md:gap-3 gap-1 ">
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
