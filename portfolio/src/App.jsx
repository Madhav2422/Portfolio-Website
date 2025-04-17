import React from 'react'
import NavbarMain from './components/navabar/NavbarMain'
import HeroMain from './components/heroSection/HeroMain'
import SubHeroSection from './components/heroSection/subHeroSection'

export default function Home() {
  return (
    <main >
      <NavbarMain/>
      <HeroMain/>
      <SubHeroSection/>
    </main>
  )
}
