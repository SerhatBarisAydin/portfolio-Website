import React from 'react'

interface SkillsCardComponentProps {
name:string,
description?: string,
languages?: string[],
tools?: string[]
}
const SkillsComponent = (props: SkillsCardComponentProps) => {
  return (
<div className="card bg-base-200 pt-5 w-3/12 min-h-full relative shadow-sm hover:shadow-lg">
  <figure>
    <img
    className='h-20 mt-5'
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body font-mono text-gray-500 text-center">
    <h2 className="justify-center  card-title mt-5 mb-5">{props.name}</h2>
    <p className='mb-5 '>{props.description}</p>
<h2 className='text-blue-700 text-xl font-light mb-5 '>Languages:</h2>    
<ul className='font-bold flex flex-col justify-center items-center gap-3 mb-8 '>
  {props.languages?.map((language, index) => (
    <li key={index}> {language} </li>
  ) )}
</ul>
    <h2 className='text-blue-700 text-xl font-light mb-5  '>My Tools:</h2>
    <ul className='font-bold flex flex-col justify-center items-center gap-3 ' >
        
        {props.tools?.map((tool, idx) =>(
          <li key={idx} > {tool} </li>
        ))}
        
    </ul>
    
    
  </div>
</div>
  )
}

export default SkillsComponent