import React from 'react';
import './Experience.css';

const ExperienceItem = ({ company, position, period, description }) => (
  <div className="experience-item">
    <h2>{company}</h2>
    <h3>{position}</h3>
    <p className="period">{period}</p>
    <p>{description}</p>
  </div>
);

const Experience = () => {
  return (
    <div className="experience-container">
      <h1>My Experience</h1>
      <ExperienceItem 
        company="PT. Terus Mencari Cinta"
        position="Marketing"
        period="Jan 2014 - Jan 2023"
        
      />
      <ExperienceItem 
       company="PT. Belum Siap"
        position="Front End Developer"
        period="Jan 2023 - Now"
        
      />
    </div>
  );
};

export default Experience;
