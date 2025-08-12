

//logo - aboutMe - Skills - Projects - Experience - Events ---> Sosyal medyalar


const HeaderComponent = () => {
  return (
    <div className="navbar shadow-sm justify-between ">
  <div className=" navbar-start w-2/12 h-full justify-center ">
    
    <a className=" text-shadow-2xs font-bold text-blue-600 text-2xl">SBA</a>
  </div>
  
  <div className="navbar-end  w-8/12 h-full">
    
    <a className="btn btn-dash w-2/12  mr-4 hover:bg-amber-300">About Me</a>
    <a className="btn btn-dash w-2/12 mr-4 hover:bg-amber-300">Skills</a>
    <a className="btn btn-dash w-2/12 mr-4 hover:bg-amber-300">Projects</a>
    <a className="btn btn-dash w-2/12 hover:bg-amber-300">Experience</a>
  </div>  
    <div className=" flex flex-row justify-end-safe gap-5 items-center w-2/12 h-full">
    <img className="w-10 rounded-full  cursor-pointer hover:border-amber-300 hover:border-1" src="https://placehold.net/default.png" alt="" />
    <img className="w-10 rounded-full  cursor-pointer hover:border-amber-300 hover:border-1" src="https://placehold.net/default.png" alt="" />
    <img className="w-10  rounded-full  cursor-pointer hover:border-amber-300 hover:border-1" src="https://placehold.net/default.png" alt="" />
  </div>
  


</div>
  )
}

export default HeaderComponent