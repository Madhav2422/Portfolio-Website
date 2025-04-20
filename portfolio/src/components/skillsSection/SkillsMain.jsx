import React from 'react';
import SkillsText from './SkillsText';
import AllSkills from './AllSkills';
import AllSkillsSm from './AllSkillsSm';

const SkillsMain = () => {
  return (
    <div id='skills' className="max-w-[1200px] px-4 mx-auto min-h-screen">
      <SkillsText />

     
      <div className="hidden lg:block mt-16">
        <AllSkills />
      </div>

   
      <div className="block lg:hidden mt-16">
        <AllSkillsSm />
      </div>
    </div>
  );
};

export default SkillsMain;
