import React from 'react'

const ContactComponent = () => {
  return (
    <div className='w-screen  flex flex-col items-center justify-center gap-5  pb-10 pt-10'>

<h1 className='font-bold text-5xl mb-20 '>Contact Me</h1>

<div className='flex flex-row justify-center items-center gap-5 w-full h-full'>
<fieldset className="fieldset bg-base-200 border-base-300  shadow-sm flex flex-col justify-center gap-4 rounded-box w-2xl h-full border p-4">
<h1 className='text-5xl font-bold'>Contact With Me 📬</h1>
<p className='text-xl text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla commodi ex at, eum culpa placeat! Cumque necessitatibus, neque aperiam fugiat, eos, praesentium magnam velit iure temporibus quaerat consectetur aut! Dolor?</p>

</fieldset>




<fieldset className="fieldset bg-base-200 border-base-300  shadow-sm flex flex-col gap-4 rounded-box w-xs border p-4">

  <label className="floating-label items-start">
  <span>Your Name</span>
  <input type="text" placeholder="Your Name" className="input input-md" />
</label>
  <label className="floating-label">
  <span>Your Surname</span>
  <input type="text" placeholder="Your Surname" className="input input-md" />
</label>
  <label className="floating-label">
  <span>Your E-mail</span>
  <input type="text" placeholder="Your E-mail" className="input input-md" />
</label>
    
  <label className="label">Your Message</label>
  <textarea placeholder="Your message here..." className="textarea textarea-l"></textarea>


  <button className="btn btn-neutral mt-4">Send</button>
</fieldset>        
        </div>
        
        </div>
  )
}

export default ContactComponent