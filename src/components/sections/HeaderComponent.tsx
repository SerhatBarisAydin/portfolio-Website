import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
//logo - aboutMe - Skills - Projects - Experience - Events ---> Sosyal medyalar

const HeaderComponent = () => {
  return (
    <BrowserRouter>
      <div className="navbar shadow-sm xl:bg-white bg-violet-600  flex justify-between fixed z-50 items-center">
        <div className=" navbar-start xl:flex hidden xl:w-2/15 w-full  h-full xl:justify-center justify-center ">
          <a className=" text-shadow-2xs font-bold xl:text-blue-600 text-white xl:text-2xl text-3xl">
            SBA
          </a>
        </div>

        <div className="navbar-end xl:flex hidden flex-row justify-end  gap-3 w-8/12 h-full">
          <HashLink
            smooth
            to="#about"
            className="btn btn-dash w-2/14 cursor-pointer hover:bg-amber-300"
          >
            About Me
          </HashLink>
          <HashLink
            smooth
            to="#skills"
            className="btn btn-dash w-2/14 cursor-pointer hover:bg-amber-300"
          >
            Skills
          </HashLink>
          <HashLink
            smooth
            to="#projects"
            className="btn btn-dash w-2/14 cursor-pointer hover:bg-amber-300"
          >
            Projects
          </HashLink>
          <HashLink
            smooth
            to="#experience"
            className="btn btn-dash w-2/14 cursor-pointer hover:bg-amber-300"
          >
            Experience
          </HashLink>
          <a
            className="btn btn-circle w-2/14 cursor-pointer bg-blue-300 hover:bg-blue-600 hover:text-white"
            href="/cv.pdf"
            download="cv.pdf"
          >
            Resume ⬇️
          </a>
        </div>
        

          <div className="ps-4 xl:hidden flex items-center justify-center">
            <a className="text-2xl font-bold text-white">SBA</a>
          </div>
          <div className="flex  grow justify-end px-2 xl:hidden ">
            <div className="dropdown dropdown-end  ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost rounded-field border-1 border-white rounded-2xl text-white"
              >
                menu
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm"
              >
                <HashLink to="#about">
                  <li>
                    <a>About</a>
                  </li>
                </HashLink>
                <HashLink to="#skills">
                  <li>
                    <a>Skills</a>
                  </li>
                </HashLink>
                <HashLink to="#projects">
                  <li>
                    <a>Projects</a>
                  </li>
                </HashLink>
                <HashLink to="#experience">
                  <li>
                    <a>Experience</a>
                  </li>
                </HashLink>
                <HashLink to="#contact">
                  <li>
                    <a>Contact Me</a>
                  </li>
                </HashLink>
                <li className="bg-violet-500 text-white ">
                  <a href="/cv.pdf" download="cv.pdf">
                    Download my resume
                  </a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default HeaderComponent;
