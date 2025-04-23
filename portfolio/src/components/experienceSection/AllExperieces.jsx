import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import SingleExperience from './SingleExperience';

const experiences = [
  {
    job: "Front-End Developer Intern",
    company: "Sajmmune Software",
    date: "July 2023 - Sept 2023",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Mern Stack Developer Intern",
    company: "Codage Habitation",
    date: "Jan 2025 - Feb 2025",
    responsibilities: [
      "Explaining and facilitating web development concepts.",
      "Help students with their assignments and grade them weekly.",
      "Provide support for students through their learning journey.",
    ],
  },
  {
    job: "Associate - Software Engineer",
    company: "TransformHub",
    date: "May 2025 - Present",
    responsibilities: [
      "Teaching JavaScript, React and TailwindCSS.",
      "Participating in preparing course materials.",
      "Helping students through their way in learning web development technologies.",
    ],
  },
];

const AllExperieces = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between flex-wrap gap-8">
      {experiences.map((experience, index) => (
        <React.Fragment key={index}>
          <SingleExperience experience={experience} />
          {index < 2 && (
            <FaArrowRight className="text-6xl text-white hidden md:block" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AllExperieces;
