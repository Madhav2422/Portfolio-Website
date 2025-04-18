import React from 'react'
import NavbarMain from './components/navabar/NavbarMain'
import HeroMain from './components/heroSection/HeroMain'
import SubHeroSection from './components/heroSection/subHeroSection'
import AboutMeMain from './components/aboutMe/AboutMeMain'

export default function Home() {
  return (
    <main >
      <NavbarMain/>
      <HeroMain/>
      <SubHeroSection/>
      <AboutMeMain/>
    </main>
  )
}
