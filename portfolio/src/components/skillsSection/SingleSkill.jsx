import React from 'react'

const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className='relative w-[100px] group'>
      {/* Custom orange background with a cone-like shape */}
      <div
        className='absolute top-0 left-0 w-[100px] h-[200px] rounded-[60%/30%] opacity-90 shadow-xl z-0 transition-all duration-500'
        style={{ background: '#fb9718' }}
      ></div>

      {/* Foreground content */}
      <div className='flex flex-col items-center gap-2 relative z-10 group-hover:-translate-y-4 transition-all duration-500'>
        <div className='text-white bg-cyan-300 h-[100px] w-[100px] flex items-center justify-center rounded-full hover:scale-105 transform transition-all duration-500 text-5xl border-4 border-[#fb9718] shadow-md'>
          {imgSvg}
        </div>
        <p className='text-white font-bold text-center text-sm'>{text}</p>
      </div>
    </div>
  )
}

export default SingleSkill
