import React from 'react';

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
      <h2 className='text-white text-4xl font-bold relative inline-block mb-6'>
        About Me
        <span className="absolute left-1/2 -bottom-1 w-1/2 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-md transform -translate-x-1/2"></span>
      </h2>
      
      <p className='text-white text-lg leading-relaxed max-w-2xl'>
        I'm a student at Indus University, passionate about learning and growing in the field of Computer Science. I enjoy exploring new ideas, working on creative projects, and continuously building my skills. Always excited to connect and collaborate!
      </p>

      <button className='px-8 py-3 bg-gradient-to-r from-sky-400 to-blue-500 text-slate-900 hover:from-blue-400 hover:to-sky-500 rounded-lg font-medium transition-all mt-10 text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] duration-300 font-semibold'>
        My Projects
      </button>
    </div> 
  );
};

export default AboutMeText;
