import React from 'react'
import ProjectsCardComponent from '../ProjectsCardComponent'
import data from '../data/projects.json'
import plane from '../../assets/animations/Isometric plane.json'
import inventory from '../../assets/animations/Logistics.json'
import banking from '../../assets/animations/Online Payment.json'
const ProjectsComponent = () => {
  return (
    <div id='projects' className=' flex flex-col  justify-center items-center w-full  '>
        <h1 className='font-bold text-5xl mt-20 mb-20 '>Projects</h1>
        <ProjectsCardComponent
          name={data.aviationManagement.name}
          description={data.aviationManagement.description}
          color='red'
          imageSrc={inventory}
          visitLink={data.aviationManagement.visitLink}
/>
<ProjectsCardComponent
          name={data.airCompanion.name}
description={data.airCompanion.description}
        visitLink={data.airCompanion.visitLink}
          color='blue'
          imageSrc={plane}
/>

<ProjectsCardComponent
          name={data.bankingSystem.name}
          description={data.bankingSystem.description}
          color='green'
          imageSrc={banking}
          visitLink={data.bankingSystem.visitLink}
/>
    </div>
  )
}

export default ProjectsComponent