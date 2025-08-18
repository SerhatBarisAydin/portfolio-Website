import React from "react";
import Lottie from "lottie-react";
import avatar from "../../assets/animations/male-avatar.json";

const AboutMeComponent = () => {
  return (
    <div id="about" className="hero mt-6 h-4/5 w-12/12   ">
      <div className="hero-content text-center">
        <div className="w-9/12 ">
          <Lottie className="h-50 mb-10" animationData={avatar} />
          <h1 className="text-5xl font-bold">Serhat Barış Aydin</h1>
          <p className="py-6 ">
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
