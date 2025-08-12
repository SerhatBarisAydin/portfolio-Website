import React from 'react'
import SkillsCardComponent from '../SkillsCardComponent'

const SkillsComponent = () => {
  return (
    
    <div className='w-11/12 bg-violet-600 h-90 rounded-2xl mb-125   '>
      <div className=' items-center mt-15   text-center'>
        <h1 className='text-5xl font-bold text-white '>Skills</h1>
      </div>
      <div className='flex flex-row mt-15 gap-20 justify-center items-center '>
      <SkillsCardComponent/>
      <SkillsCardComponent/>
      </div>
    </div>
  )
}

export default SkillsComponent