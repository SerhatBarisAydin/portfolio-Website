import React from 'react'
import ExperienceCardComponent from '../ExperienceCardComponent'
import data from '../data/experience.json'
const ExperienceComponent = () => {
  return (
    <div id='experience' className='w-full h-fit pb-20 mt-20  pt-0 flex flex-col justify-between items-center '>
        <div className='flex-2/3 mb-20 '>
        <h1 className='font-bold text-5xl '>Experience</h1>
        </div>
        <div className='flex-1/3 justify-center items-center '>
    <ExperienceCardComponent
      year={data.tav.year}
      month={data.tav.month}
      companyName={data.tav.name}
      role={data.tav.role}
      description={data.tav.description}
    /> 
    <ExperienceCardComponent
      year={data.ravenFrontend.year}
      month={data.ravenFrontend.month}
      companyName={data.ravenFrontend.name}
      role={data.ravenFrontend.role}
      description={data.ravenFrontend.description}
    />
    <ExperienceCardComponent
      year={data.ravenBackend.year}
      month={data.ravenBackend.month}
      companyName={data.ravenBackend.name}
      role={data.ravenBackend.role}
      description={data.ravenBackend.description}
    />
    
     
        </div>
          
        
    </div>
  )
}

export default ExperienceComponent