import React from "react";
import Lottie from "lottie-react";

interface ProjectCardProps {
  name: string;
  description: string;
  imageSrc?: object;
  visitLink: string;
  color: string;
}

const ProjectsCardComponent = (props: ProjectCardProps) => {
  return (
    <div className="w-full  md:h-130 h-fit h md:p-10 p-5 bg-transparent justify-center gap-8 items-center flex flex-col md:flex-row ">
      {/* <div className=" h-1/1 w-5/13 shadow-sm rounded-xl border-1 border-base-300 bg-blue-600  p-5"></div> */}

      <div style={{backgroundColor: props.color}} className="card  rounded-2xl md:w-5/16 w-full h-full card-lg shadow-sm justify-center items-center  text-gray-500 ">
        <div className="  w-12/12 h-9/12 flex justify-center items-center" >
          <Lottie
            animationData={props.imageSrc}
            loop={true}
            className="w-full h-full"
          />
        </div>
      </div>

      <div style={{borderBottomColor:props.color}} className="card md:w-8/16 w-full rounded-2xl bg-base-200 h-full bg-base-100  card-lg shadow-sm justify-center items-center border-b-5 text-gray-500 border-b-blue-600">
        <div className=" justify-center text-center md:p-10 p-3 h-fit w-full   ">
          <h2 className="font-semibold  md:text-3xl text-sm mb-5 " style={{color: props.color}}>{props.name}</h2>
          <p className="md:text-lg  w-full text-xs mb-5">
            {props.description}
          </p>
          <a
            href={props.visitLink}
            className="absolute bottom-2 right-5 cursor-pointer underline text-xs md:text-sm font-medium transition-shadow "
            style={{ color: props.color }}
          >
            Visit Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCardComponent;
