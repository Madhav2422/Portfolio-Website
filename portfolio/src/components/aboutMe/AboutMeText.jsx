import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
      <h2 className='text-6xl text-cyan-300 mb-10'>About Me</h2>
      <p className='text-white'>
        I'm a student at Indus University, passionate about learning and growing in the field of Computer Science. I enjoy exploring new ideas, working on creative projects, and continuously building my skills. Always excited to connect and collaborate!
      </p>
      
      <button className='px-6 py-2 border border-cyan-600 text-cyan-300 hover:bg-cyan-900/30 rounded-md font-medium transition-all mt-10'>
       My Projects
      </button>
    </div> 
  )
}

export default AboutMeText
