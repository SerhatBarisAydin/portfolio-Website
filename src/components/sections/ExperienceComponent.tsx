import React from 'react'
import ExperienceCardComponent from '../ExperienceCardComponent'

const ExperienceComponent = () => {
  return (
    <div className='w-full h-fit pb-20 mt-20 pt-0 flex flex-col  justify-between items-center '>
        <div className='flex-2/3 mb-20 '>
        <h1 className='font-bold text-5xl '>Experience</h1>
        </div>
        <div className='flex-1/3 justify-center items-center '>
    <ExperienceCardComponent/> 
    <ExperienceCardComponent/> 
    <ExperienceCardComponent/> 
    <ExperienceCardComponent/>  
        </div>
          
        
    </div>
  )
}

export default ExperienceComponent