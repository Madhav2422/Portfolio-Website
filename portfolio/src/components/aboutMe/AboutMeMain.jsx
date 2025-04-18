import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMePic from "./AboutMePic"

const AboutMeMain = () => {

  return (
    <div className='flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-betwen items-center'>
      <AboutMeText />
      <AboutMePic />
    </div>
  )

}

export default AboutMeMain