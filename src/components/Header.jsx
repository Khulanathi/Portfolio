import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="head">
      <div className="name">
        <h1>Khulanathi Mtshazo</h1>
      </div>
      <div className="extra">
        <h2>RPG & Software Developer</h2>
      </div>
      <div className="links">
        <a href="mailto:khulunathim@gmail.com" alt="Email">
          <FaEnvelope />
        </a>
        <a href="https://github.com/Khulanathi" alt="Github" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="http://www.linkedin.com/in/khulanathi-mtshazo22" alt="Linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/KhulanathiM" alt="Twitter" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="/Documents/Cv.pdf"  target="_blank" alt="My Cv" rel="noopener noreferrer">
          <FaUser />
        </a>
      </div>
    </header>
  );
};

export default Header;