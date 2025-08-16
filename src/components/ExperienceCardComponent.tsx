import React, { useState } from "react";

interface ExperienceCardProps {
  year: string;
  month: string;
  companyName: string;
  role: string;
  description: string;
}


const ExperienceCardComponent = (props: ExperienceCardProps) => {
  return (

    
    <div className="w-fit h-fit  flex justify-center items-start pb-10">
      <div className="w-24 h-24 bg-base-200 shadow- flex flex-col justify-center items-center text-center  rounded-full">
        <h1 className="font-semibold font-mono text-gray-500 text-xl  w-fit h-fit">
          {props.year}
        </h1>
        <h3 className="font-light font-mono text-gray-400 text-sm">
          {props.month}
        </h3>
      </div>

      <div className="w-2xl h-fit  bg-base-200  ml-5 p-5 rounded-2xl shadow-lg ">
        <h1 className="font-bold  text-xl text-violet-500">{props.companyName}</h1>
        <h2 className="font-light text-lg text-violet-400">{props.role}</h2>
        <p className="text-gray-500">
          {props.description}
        </p>
      </div>
    </div>
 );
};

export default ExperienceCardComponent;

