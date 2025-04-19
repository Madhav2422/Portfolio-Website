import React from 'react'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import SingleSkill from "./SingleSkill"

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "NodeJS",
    icon: FaNodeJs,
  },
  {
    skill: "MongoDB",
    icon: DiMongodb,
  },

  {
    skill: "SQL",
    icon: TbSql,
  },
  {
    skill: "Java",
    icon: FaJava,
  },
  {
    skill: "SpringBoot",
    icon:  SiSpringboot,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto ' > 
        {skills.map((item,index)=>{
            return <SingleSkill key={index} text={item.text} imgSvg={<item.icon/>} />
        })}
      </div>
    </div>
  )
}

export default AllSkills