import React from 'react'
import ProjectsCardComponent from '../ProjectsCardComponent'

const ProjectsComponent = () => {
  return (
    <div className=' flex flex-col  justify-center items-center w-full  '>
        <h1 className='font-bold text-5xl mt-20 mb-20 '>Projects</h1>
        <ProjectsCardComponent/>
    </div>
  )
}

export default ProjectsComponent