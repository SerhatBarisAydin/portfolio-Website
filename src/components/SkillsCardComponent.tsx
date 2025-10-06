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





    <div className="card  bg-slate-200 pt-5  md:mb-10 mb-5 md:w-4/14 w-9/10 min-h-fit flex relative shadow-sm hover:shadow-lg ">




    


      <figure>
        
        <Lottie className="h-25 md:h-50 md:mt-5" animationData={props.imgSrc} loop={true} />
      </figure>
      <div className="card-body font-mono text-gray-500 text-center px-3 xl:px-5">
        <h2 className="justify-center md:text-2xl text-xl card-title md:mt-5 md:mb-5">
          {props.name}
        </h2>
        <p className="md:mb-5 md:text-sm text-xs text-justify  w-full flex justify-center items-center text-center">{props.description}</p>
        
        
        
        
       <div className="flex flex-col  xl:gap-6 gap-3 md:ga-0 md:items-center xl:mt-0 mt-5 xl:items-start items-center justify-center">
        <div className="flex flex-col items-center justify-center">
        
        <h2 className="text-gray-700 md:text-xl text-sm  md:font-bold font-bold  xl:mt-0    xl:mb-5 mb-2 ">
          Languages
        </h2>
        <ul className="md:font-light font-extralight flex flex-row justify-center md:text-lg text-sm items-center md:gap-3 md:mb-8 gap-1 mb-3">
          {props.languages?.map((language, index) => (
            <img className="xl:h-10 xl:w10 h-8 w-8 cursor-pointer" src={language} key={index}  onClick={() => {
              window.open(language, '_blank');
            }}/>
          ))}
        </ul>
        
        </div>

          <div className="flex flex-col  items-center justify-center">
        <h2 className="text-gray-700  md:text-xl text-sm md:font-bold font-bold xl:mb-5 mb-2  ">
          My Tools
        </h2>
        {/* <ul className="md:font-light md:text-lg font-extralight flex flex-col justify-center items-center md:gap-3 gap-1 ">
          {props.tools?.map((tool, idx) => (
            <li key={idx}> {tool} </li>
          ))}
        </ul> **/}

        


        <ul className="md:font-light md:text-lg font-extralight flex flex-row flex-wrap justify-center   items-center md:gap-3 gap-1 ">
          {props.tools?.map((tool, idx) => (
          //  <li key={idx}> {tool} </li>
          <img className="xl:h-10 xl:w10 h-8 w-8 cursor-pointer" src={tool} key={idx} onClick={() => {
            window.open(tool, '_blank');
          }}/>
          
          ))}
        </ul>
        </div>
      
        </div>




      
      </div>
    </div>
  );
};

export default SkillsComponent;
