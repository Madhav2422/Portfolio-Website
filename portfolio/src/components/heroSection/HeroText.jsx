// import React from 'react'
// import { Typewriter } from 'react-simple-typewriter'

// const HeroText = () => {
//   return (
//     <div className='flex flex-col gap-4 h-full justify-center md:text-left text-center'>
//       <h1 className='text-4xl sm:text-5xl md:text-[2.8rem] lg:text-6xl font-bold font-special text-orange-300'>
//         Madhav Hirani
//       </h1>
//       <h2 className='text-lg sm:text-xl lg:text-2xl uppercase text-cyan-200'>
//         <Typewriter
//           words={['Full Stack Developer', 'Software Engineer','AWS Enthusiast']}
//           loop={true}
//           cursor
//           cursorStyle='_'
//           typeSpeed={70}
//           deleteSpeed={50}
//           delaySpeed={1500}
//         />
//       </h2>
//       <p className='text-base sm:text-lg md:text-lg mt-4 text-white leading-relaxed'>
//         Full Stack Developer with 2 years of experience building clean, scalable web solutions.<br />
//         B.Tech graduate from Indus University, Ahmedabad, with a sharp focus on software craft.<br />
//         Driven, detail-oriented, and passionate about turning ideas into polished products.
//       </p>
//     </div>
//   )
// }

// export default HeroText



import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left text-center max-w-2xl mx-auto'>
      <div className='mb-2'>
        <span className='text-lg sm:text-xl text-cyan-300'>Hello, I'm</span>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-300 to-amber-400 bg-clip-text text-transparent'>
          Madhav Hirani
        </h1>
      </div>
      
      <h2 className='text-lg sm:text-xl lg:text-2xl uppercase text-cyan-200 h-8'>
        <Typewriter
          words={['Full Stack Developer', 'Software Engineer', 'AWS Enthusiast', 'Problem Solver']}
          loop={true}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>
      
      <p className='text-base sm:text-lg md:text-lg mt-4 text-gray-300 leading-relaxed'>
        I build digital experiences that are fast, scalable, and delightful to use.
        Currently crafting solutions with modern web technologies and cloud platforms.
      </p>
      
      <div className='flex gap-4 mt-6 justify-center md:justify-start'>
        <button className='px-6 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md font-medium transition-all'>
          View Work
        </button>
        <button className='px-6 py-2 border border-cyan-600 text-cyan-300 hover:bg-cyan-900/30 rounded-md font-medium transition-all'>
          Contact Me
        </button>
      </div>
    </div>
  )
}

export default HeroText