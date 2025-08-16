import React from 'react'
import ProjectsCardComponent from '../ProjectsCardComponent'
import data from '../data/projects.json'
const ProjectsComponent = () => {
  return (
    <div id='projects' className=' flex flex-col  justify-center items-center w-full  '>
        <h1 className='font-bold text-5xl mt-20 mb-20 '>Projects</h1>
        <ProjectsCardComponent
          name='Flight Inventory System'
          description='I code things from scratch, and gracefully bring the ideas to life and to the browser, paying maximal attention to your vision of the product.'
          color='red'
          imageSrc={data.aviationManagement.imageSrc}
          visitLink={data.aviationManagement.visitLink}
/>
<ProjectsCardComponent
          name='Air Companion Mobile App'
          description='I code things from scratch, and gracefully bring the ideas to life and to the browser, paying maximal attention to your vision of the product.'
        visitLink={data.airCompanion.visitLink}
          color='blue'
          imageSrc={data.aviationManagement.imageSrc}
/>
    </div>
  )
}

export default ProjectsComponent