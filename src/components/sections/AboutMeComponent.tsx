import Lottie from "lottie-react";
import avatar from "../../assets/animations/male-avatar.json";

const AboutMeComponent = () => {
  return (
    <div id="about" className="hero mt-6 pt-16 h-4/5 w-12/12 md:10/12 mb-10 md:mb-0  ">
      <div className="hero-content text-center">
        <div className="w-full  ">
          <Lottie className="md:h-50 md:mb-10 h-50 mb-5" animationData={avatar} />
          <h1 className="md:text-5xl text-3xl font-extrabold mb-3 xl:mb-0 text-violet-500">Serhat Barış Aydin</h1>
          <p className="py-3 md:py-6 md:text-lg text-xs md:text-center text-justify text-gray-500">
            I'm a computer engineer who takes an active role in a project's
            entire journey, not just the coding. I blend my expertise in
            frontend and backend development with my management and analysis
            skills. My curiosity drives me to solve problems and explore new
            technologies. I'm a results-oriented and proactive team player,
            capable of both understanding the technical details and
            strategically guiding projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeComponent;
