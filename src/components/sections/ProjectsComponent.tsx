import ProjectsCardComponent from '../ProjectsCardComponent'
import data from '../data/projects.json'
import plane from '../../assets/animations/Isometric plane.json'
import inventory from '../../assets/animations/Logistics.json'
import banking from '../../assets/animations/Online Payment.json'
import chatting from '../../assets/animations/chatting.json'
const ProjectsComponent = () => {
  return (
    <div id='projects' className=' flex flex-col  justify-center items-center w-full  '>
        <h1 className='font-bold md:text-5xl text-3xl mt-20 md:mb-20 mb-5 '>Projects</h1>
        
        <ProjectsCardComponent
          name={data.reactChatApp.name}
          description={data.reactChatApp.description}
          color='#FF714B'
          imageSrc={chatting}
          visitLink={data.reactChatApp.visitLink}
/>
        
        <ProjectsCardComponent
          name={data.aviationManagement.name}
          description={data.aviationManagement.description}
          color='#FCC61D'
          imageSrc={inventory}
          visitLink={data.aviationManagement.visitLink}
/>
<ProjectsCardComponent
          name={data.airCompanion.name}
description={data.airCompanion.description}
        visitLink={data.airCompanion.visitLink}
          color='#4E71FF'
          imageSrc={plane}
/>

<ProjectsCardComponent
          name={data.bankingSystem.name}
          description={data.bankingSystem.description}
          color='#08CB00'
          imageSrc={banking}
          visitLink={data.bankingSystem.visitLink}
/>


    </div>
  )
}

export default ProjectsComponent