import './skills.css';
import React from 'react';
import Skill from './Skill';

export default function Skills(props) {
  const { skillsData } = props;

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
      <div className="row py-4">{skillsData.map(renderSkillItems)}</div>
    </section>
  );
}
