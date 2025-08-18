import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
//logo - aboutMe - Skills - Projects - Experience - Events ---> Sosyal medyalar

const HeaderComponent = () => {
  return (
    <BrowserRouter>
      <div className="navbar shadow-sm justify-between ">
        <div className=" navbar-start w-2/15 h-full justify-center ">
          <a className=" text-shadow-2xs font-bold text-blue-600 text-2xl">
            SBA
          </a>
        </div>

        <div className="navbar-end flex  flex-row justify-end  gap-3 w-8/12 h-full">
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
        <div className=" flex flex-row justify-center gap-2 items-center w-fit h-full">
          <a
            href="https://github.com/SerhatBarisAydin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-10 h-10 rounded-full hover:fill-emerald-500 cursor-pointer hover:border-amber-300 hover:border-1"
              src="assets/icons/github.svg"
              alt="Github"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/serhatbarisaydin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-10 rounded-full cursor-pointer hover:border-amber-300 hover:border-1"
              src="/assets/icons/linkedin.png"
              alt="LinkedIn"
            />
          </a>

          <a
            href="https://medium.com/@serhatbarisaydin"
            target="_blank"
            rel="noopener noreferrer"
          >
            
              <img
                className="w-10  rounded-full cursor-pointer hover:border-amber-300 hover:border-1"
                src="assets/icons/medium.png"
                alt=""
              />
          </a>

          <a
            href="https://www.instagram.com/sbarisaydin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-10 rounded-full cursor-pointer hover:border-amber-300 hover:border-1"
              src="assets/icons/instagram.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default HeaderComponent;
