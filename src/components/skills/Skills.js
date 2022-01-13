import './skills.css';
import React, { useState } from 'react';
import Skill from './Skill';
import skillsData from '../../data/skills';

export default function Skills(props) {
  const [skills, setSkills] = useState(skillsData);

  const renderSkillItems = (item, index) => {
    return (
      <Skill
        key={item.title + index}
        image={item.image}
        title={item.title}
        alt={item.alt}
        spinning={item.spinning}
      />
    );
  };

  return (
    <section id="skills" className="skillsSection py-4">
      <h2 className="text-center">
        S<span className="underline">KILL</span>S
      </h2>
      <div className="row py-4">{skills.map(renderSkillItems)}</div>
    </section>
  );
}
