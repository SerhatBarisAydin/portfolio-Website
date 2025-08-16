import React, { useState } from "react";

const ExperienceCardComponent = () => {
  return (

    
    <div className="w-fit h-fit  flex justify-center items-start pb-10">
      <div className="w-24 h-24 bg-base-200 shadow- flex justify-center items-center text-center  rounded-full">
        <h1 className="font-semibold font-mono text-gray-500 text-2xl  w-fit h-fit">
          2023
        </h1>
      </div>

      <div className="w-2xl h-fit  bg-base-200  ml-5 p-5 rounded-2xl shadow-lg ">
        <h1 className="font-bold  text-xl text-violet-500">Company Name</h1>
        <h2 className="font-light text-lg text-violet-400">Role</h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          eaque ratione aliquam sunt similique voluptatem est, quibusdam
          architecto veniam, illum quidem ab tempora eius repudiandae rerum
          inventore suscipit. Atque, et.
        </p>
      </div>
    </div>
 );
};

export default ExperienceCardComponent;

