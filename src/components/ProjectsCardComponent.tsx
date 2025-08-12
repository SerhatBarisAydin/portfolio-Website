import React from "react";
const ProjectsCardComponent = () => {
  return (
    <div className="w-full  h-130 p-10 bg-transparent justify-center gap-8 items-center flex flex-row">
      
      {/* <div className=" h-1/1 w-5/13 shadow-sm rounded-xl border-1 border-base-300 bg-blue-600  p-5"></div> */}



      <div className="card  rounded-2xl w-5/16 h-full bg-blue-600  card-lg shadow-sm justify-center items-center  text-gray-500 ">

        <div className="  w-9/12 h-9/12">

          

        </div>

      </div>



      <div className="card w-8/16 rounded-2xl bg-base-200 h-full bg-base-100  card-lg shadow-sm justify-center items-center border-b-5 text-gray-500 border-b-blue-600">
        <div className=" justify-center text-center p-10 h-fit w-full  ">
          <h2 className="font-semibold text-blue-600 text-3xl">Project Name</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <a
            href=""
            className="absolute bottom-2 right-5 cursor-pointer underline font-semibold text-blue-600 hover:text-blue-500 transition-shadow "
          >
            Visit Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCardComponent;
