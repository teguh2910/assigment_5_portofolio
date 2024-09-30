import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import './Home.css';
import profileImage from '../patrick.jpg'; // Jalur relatif yang benar

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="image-section">
          <img src={profileImage} alt="teguh" className="profile-image" />
        </div>
        <div className="text-section">
          <p className="hello-text">Hi !!!</p>
          <h1 className="name-text">Saya <span>Teguh</span></h1>
          <p className="role-text">Front-end Developer</p>
          
        </div>        
      </div>
    );
  }
}

export default Home;
