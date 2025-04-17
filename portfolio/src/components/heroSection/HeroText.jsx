import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left text-center'>
      <h1 className='text-4xl sm:text-5xl md:text-[2.8rem] lg:text-6xl font-bold font-special text-orange-300'>
        Madhav Hirani
      </h1>
      <h2 className='text-lg sm:text-xl lg:text-2xl uppercase text-cyan-200'>
        <Typewriter
          words={['Full Stack Developer', 'Software Engineer','AWS Enthusiast']}
          loop={true}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>
      <p className='text-base sm:text-lg md:text-lg mt-4 text-white leading-relaxed'>
        Full Stack Developer with 2 years of experience building clean, scalable web solutions.<br />
        B.Tech graduate from Indus University, Ahmedabad, with a sharp focus on software craft.<br />
        Driven, detail-oriented, and passionate about turning ideas into polished products.
      </p>
    </div>
  )
}

export default HeroText
