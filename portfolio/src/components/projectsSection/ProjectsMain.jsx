import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'

const projects = [
  {
    name: "EduSphere(Learning Management System)",
    descri: "ddm",
    align: "right",
    image: "../../public/images/LMS.png",
    link: "#",
  },
  {
    name: "Motor Insurance",
    descri: "ddm",
    align: "left",
    image: "../../public/images/Motor_Insurance.png",
    link: "#",
  },
  {
    name: "Blog Website",
    descri: "ddm",
    align: "right",
    image: "../../public/images/Blog.png",
    link: "#",
  },
  {
    name: "E commerce Website",
    descri: "ddm",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "#",
  },
];


const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4" >
      <ProjectsText />
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12" >
        {projects.map((project, index) => {
          return <SingleProject key={index} name={project.name} descri={project.descri}
            align={project.align}
            image={project.image} />
        })}
      </div>
    </div>
  )
}

export default ProjectsMain