import React from 'react'

const SingleProject = ({ name, descri, align, image, link }) => {
  return (
    <div className={`flex w-full sm:flex-col-reverse items-center gap-8 ${align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`} >
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-white " >{name}</h2>
        <p className={`text-xl font-thin text-white font-special sm:text-center ${align === "left" ? "md:text-right" : "md:text-left"
          }`}  >{descri}</p>
        <a className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`} href={link}>View</a>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 ralative border border-white" >
        <img src={image} alt="Project Image" className="w-full h-full" />
      </div>
    </div>
  )
}

export default SingleProject