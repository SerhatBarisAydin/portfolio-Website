import React from 'react'


const SkillsComponent = () => {
  return (
<div className="card bg-base-200 pt-5 w-3/12 shadow-sm hover:shadow-lg">
  <figure>
    <img
    className='h-20 mt-5'
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body font-mono text-gray-500 text-center">
    <h2 className="justify-center  card-title mt-5 mb-5">Frontend Development</h2>
    <p className='mb-5 '>
        I code things from scratch, and gracefully bring the ideas to life and to the bowser, paying maximal attention to your vision of the product.  
    </p>
<h2 className='text-blue-700 text-xl font-light mb-5 '>Languages:</h2>    
<p className=' mb-5'>
        PHP, Python, Ruby, Java, Perl
    </p>
    <h2 className='text-blue-700 text-xl font-light mb-5  '>My Tools:</h2>
    <ul>
        <li>Php</li>
        <li>Php</li>
        <li>Php</li>
        <li>Php</li>
    </ul>
    
    
  </div>
</div>
  )
}

export default SkillsComponent