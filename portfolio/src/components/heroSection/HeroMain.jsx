import React from 'react'
import HeroText from './HeroText'
import HeroPic from './HeroPic'

const HeroMain = () => {
  return (
    <div className='pt-40 pb-16'>
      <div className='flex flex-col md:flex-row max-w-[1200px] mx-auto justify-between items-center gap-8 px-4'>
        <HeroText />
        <HeroPic />
        
      </div>
    </div>
  )
}

export default HeroMain
