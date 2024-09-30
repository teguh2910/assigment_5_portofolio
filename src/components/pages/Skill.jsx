import React from 'react';
import './Skill.css';

const Skill = () => {
  const skills = [
    'HTML', 'PHP', 'React',
    'Css', 'Javascript', 'SEO',
    'Canva', 'Flutter', 'Sql'
  ];

  return (
    <div className="skill-container">
      <h1>Skill</h1>
      <p className="skill-description">
        Berikut adalah skill yang saya miliki
      </p>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">{skill}</div>
        ))}
      </div>
    </div>
  );
};

export default Skill;