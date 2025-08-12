import AboutMeComponent from "./components/sections/AboutMeComponent"
import ExperienceComponent from "./components/sections/ExperienceComponent"
import HeaderComponent from "./components/sections/HeaderComponent"
import ProjectsComponent from "./components/sections/ProjectsComponent"
import SkillsComponent from "./components/sections/SkillsComponent"



const App = () => {
  return (
    <div className='w-screen h-screen overflow-y-auto flex flex-col items-center '>
      <HeaderComponent/>
      <AboutMeComponent/>
      <SkillsComponent/>
      <ProjectsComponent/>
      <ExperienceComponent/>
    </div>
  )
}

export default App