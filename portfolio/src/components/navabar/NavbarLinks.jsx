import React from 'react'

const NavbarLinks = ({ menuOpen, setMenuOpen }) => {
  const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Experience", section: "experience" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
  ];

  return (
    <ul className={`flex gap-6 text-white font-bold text-center py-4 
      flex-col lg:flex-row 
      ${menuOpen ? 'absolute' : 'hidden'} lg:flex 
      top-[120%] lg:top-0 left-[50%] lg:left-0 -translate-x-[50%] lg:translate-x-0 
      text-xl lg:text-md bg-[#0f172a] backdrop-blur-lg w-full lg:w-auto 
      rounded-xl lg:rounded-none z-10`}>

      {
        links.map((link, index) => (
          <li key={index} className='group'>
            <a 
              className='text-white cursor-pointer hover:text-cyan-200 transition-all duration-500'
              href={`#${link.section}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.link}
            </a>
            <div className='mx-auto bg-cyan-200 w-0 group-hover:w-full h-[1px] transition-all duration-500'></div>
          </li>
        ))
      }
    </ul>
  )
}

export default NavbarLinks
