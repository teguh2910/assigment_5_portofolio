import React from 'react';
import './Award.css';

const AwardItem = ({ period, title, company, description }) => (
  <div className="award-item">
    <h3>{period}</h3>
    <h4>{title}</h4>
    <p className="company">{company}</p>
    <p>{description}</p>
  </div>
);

const Award = () => {
  const awards = [
    {
      period: "2014-2024",
      title: "Lorem Ipsum",
      company: "PT. Cinta",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      period: "2011-2014",
      title: "Lorem Ipsum",
      company: "PT. Sadbor",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      period: "2020-2024",
      title: "Lorem Ipsum",
      company: "PT. Toktok",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
  ];

  return (
    <div className="award-container">
      <h1>My Award</h1>
      <div className="award-grid">
        {awards.map((award, index) => (
          <AwardItem key={index} {...award} />
        ))}
      </div>
    </div>
  );
};

export default Award;