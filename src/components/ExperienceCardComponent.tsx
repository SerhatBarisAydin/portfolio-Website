
interface ExperienceCardProps {
  year: string;
  month: string;
  companyName: string;
  role: string;
  description: string;
}


const ExperienceCardComponent = (props: ExperienceCardProps) => {
  return (

    
    <div className="md:w-fit w-full h-fit md:pt-10 md:pt-0 flex flex-row justify-center items-start md:pb-10">
      <div className="md:w-24 md:h-24 w-15 h-15 bg-base-200 shadow-lg md:border-0 md:border-transparent border-1 border-violet-500 xl:flex hidden flex-col justify-center items-center text-center  rounded-full">
        <h1 className="font-semibold font-mono text-gray-500 md:text-xl text-sm  w-full h-fit">
          {props.year}
        </h1>
        <h3 className="font-light font-mono text-gray-400 text-xs md:text-sm">
          {props.month}
        </h3>
      </div>

      <div className="md:w-2xl xl:w-11/14 w-11/12 h-fit md:border-0 md:border-transparent border-1 border-violet-500 bg-base-200  md:ml-5  md:p-5 p-2  rounded-2xl shadow-lg ">
        <h1 className="font-bold  md:text-xl text-base text-violet-600">{props.companyName}</h1>
        <h2 className="font-light md:text-lg text-sm text-violet-500">{props.role}</h2>
        <h3 className="font-light xl:hidden flex md:text-sm text-xs text-violet-400">
          {props.year} - {props.month}
        </h3>
        <p className="text-gray-500 md:text-lg text-xs">
          {props.description}
        </p>
      </div>
    </div>
 );
};

export default ExperienceCardComponent;

