

//logo - aboutMe - Skills - Projects - Experience - Events ---> Sosyal medyalar


const HeaderComponent = () => {
  return (
    <div className="navbar shadow-sm justify-between ">
  <div className=" navbar-start w-2/12 h-full justify-center ">
    
    <a className=" text-shadow-2xs font-bold text-blue-600 text-2xl">SBA</a>
  </div>
  
  <div className="navbar-end flex flex-row justify-center  gap-3 w-full h-full">
    
    <a className="btn btn-dash w-2/14 cursor-pointer hover:bg-amber-300">About Me</a>
    <a className="btn btn-dash w-2/14 cursor-pointer hover:bg-amber-300">Skills</a>
    <a className="btn btn-dash w-2/14 cursor-pointer hover:bg-amber-300">Projects</a>
    <a className="btn btn-dash w-2/14 cursor-pointer hover:bg-amber-300">Experience</a>
    <a className="btn btn-circle w-2/14 cursor-pointer bg-blue-300 hover:bg-blue-600 hover:text-white">Resume ⬇️</a>
  </div>  
    <div className=" flex flex-row justify-center gap-2 items-center w-fit h-full">
    <img className="w-10 rounded-full  cursor-pointer hover:border-amber-300 hover:border-1" src="https://placehold.net/default.png" alt="" />
    <img className="w-10 rounded-full  cursor-pointer hover:border-amber-300 hover:border-1" src="https://placehold.net/default.png" alt="" />
    <img className="w-10  rounded-full cursor-pointer hover:border-amber-300 hover:border-1" src="https://placehold.net/default.png" alt="" />
  </div>
  


</div>
  )
}

export default HeaderComponent