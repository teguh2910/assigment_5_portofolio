import React from 'react';
import './About.css';
import profileImage from '../patrick.jpg'; // Pastikan path ini benar

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="info-container">
          <h1 className="about-title">About Me</h1>          
          <div className="personal-info">
            <InfoItem label="Tanggal Lahir" value="11 Oktober, 1993" />
            <InfoItem label="Alamat" value="East Java" />
            <InfoItem label="Kode Pos" value="67895" />
            <InfoItem label="Email" value="teguh@gmail.com" />
            <InfoItem label="No HP" value="+6281296805874" />
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }) => (
  <div className="info-item">
    <span className="info-label">{label}:</span>
    <span className="info-value">{value}</span>
  </div>
);

export default About;