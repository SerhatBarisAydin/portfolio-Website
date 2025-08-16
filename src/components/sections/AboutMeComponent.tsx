import React from 'react'
import Lottie from 'lottie-react'
import avatar from "../../assets/animations/male-avatar.json"

const AboutMeComponent = () => {
  return (
    <div id='about' className="hero mt-6 h-4/5 w-12/12   ">
  <div className="hero-content text-center">
    <div className="w-9/12 ">
      <Lottie className='h-50 mb-10' animationData={avatar}/>
      <h1 className="text-5xl font-bold">Serhat Barış Aydin</h1>
      <p className="py-6 " >
        Motivated and detail-oriented computer engineer with hands-on experience in both frontend and backend development.
Curious by nature, I enjoy learning new technologies, solving real-world problems, and building clean, user-focused digital
products. I thrive in team environments and take initiative to continuously improve myself and the projects I work on
      </p>

    </div>
  </div>
</div>
  )
}

export default AboutMeComponent