import AboutMeComponent from "./components/sections/AboutMeComponent";
import ContactComponent from "./components/sections/ContactComponent";
import ExperienceComponent from "./components/sections/ExperienceComponent";
import FooterComponent from "./components/sections/FooterComponent";
import HeaderComponent from "./components/sections/HeaderComponent";
import ProjectsComponent from "./components/sections/ProjectsComponent";
import SkillsComponent from "./components/sections/SkillsComponent";


const App = () => {
  return (
    <div style={{backgroundColor : "#FBFBFB"}} className="w-screen h-screen overflow-y-auto flex flex-col items-center">
      <HeaderComponent />

      <AboutMeComponent />
      <SkillsComponent />
      <ProjectsComponent />
      <ExperienceComponent />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
};

export default App;
