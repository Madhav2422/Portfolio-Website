import React, { useState } from 'react'
import NavabarLogo from './NavabarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBtn from './NavbarBtn'
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  }

  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2 items-center justify-between">
      
     
      <div className="hidden lg:flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-full border-orange border-[0.5px]">
        <NavabarLogo />
        <NavbarLinks menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <NavbarBtn />
      </div>

     
      <div className="lg:hidden flex justify-between items-center w-full px-2">
        <NavabarLogo />
        <button
          onClick={toggleMenu}
          className='text-white text-2xl p-3 rounded-full hover:scale-105 transition-transform duration-300 ease-in-out'
        >
          <GiHamburgerMenu />
        </button>
      </div>

      <div className="lg:hidden absolute top-[100%] left-0 w-full px-4">
        <NavbarLinks menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </nav>
  )
}

export default NavbarMain
