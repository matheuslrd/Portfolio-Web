import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaReact, FaJs,
} from 'react-icons/fa';
import {
  SiRedux, SiJest, SiStyledcomponents, SiDocker,
} from 'react-icons/si';

import AbstractSkills from './components/AbstractSkills';
import SkillCard from './components/SkillCard';

import StyledSkills from './styles/skills';

// eslint-disable-next-line react/function-component-definition
function Skills() {
  return (
    <StyledSkills>
      <section id="Skills-Page">

        <div className="Skills-Container">
          <AbstractSkills />

          <section className="Icons-Skills">
            <SkillCard skillIcon={<FaHtml5 size="3.5em" />} textSkill="HTML5" />
            <SkillCard skillIcon={<FaCss3Alt size="3.5em" />} textSkill="CSS3" />
            <SkillCard skillIcon={<FaReact size="3.5em" />} textSkill="React" />
            <SkillCard skillIcon={<FaJs size="3.5em" />} textSkill="JS" />
            <SkillCard skillIcon={<SiRedux size="3.5em" />} textSkill="Redux" />
            <SkillCard skillIcon={<SiJest size="3.5em" />} textSkill="Jest" />
            <SkillCard skillIcon={<SiStyledcomponents size="3.5em" />} textSkill="Styled Components" />
            <SkillCard skillIcon={<SiDocker size="3.5em" />} textSkill="Docker" />
          </section>
        </div>

      </section>
    </StyledSkills>
  );
}

export default Skills;
