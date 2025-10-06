import SplitText from "../../components/animations/text/SplitText"
import handsUp from "../../assets/images/handsUp.png"
import handsDown from "../../assets/images/handsDown.png" 

const AboutMeComponent = () => {
  
  
  
  return (
    <div id="about" className="hero mt-6 pt-16 h-4/5 w-12/12 md:10/12 mb-10 md:mb-0  ">
      <div className="hero-content text-center">
        <div className="w-full  ">

      <div className="relative mb-3  xl:w-50 xl:h-50 w-40 h-40 xl:mb-0  rounded-full overflow-hidden mx-auto group hover:shadow-lg">
  {/* İlk resim: Normalde görünür, hover'da gizlenir */}
  <img
    src={handsDown}
    alt="Hands Down"
    className="absolute w-full h-full object-cover object-top rounded-full transition-opacity duration-300 group-hover:opacity-0"
  />
  {/* İkinci resim: Normalde gizli, hover'da görünür */}
  <img
    src={handsUp}
    alt="Hands Up"
    className="absolute w-full h-full object-cover object-top rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
  />
</div>
        




  
        <SplitText
  text={ <h1 className="md:text-5xl text-3xl font-extrabold mb-3 xl:mb-0 text-violet-500">Serhat Barıs Aydin</h1>}
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
/>






          <p id="aboutmeParagraf" className="py-3 md:py-6 md:text-lg text-xs md:text-center text-justify text-gray-500">
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
