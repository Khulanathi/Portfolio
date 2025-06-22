import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { FaUser, FaGraduationCap, FaBriefcase, FaBullseye} from 'react-icons/fa';

const About = () => {
  const [showAbout, setShowAbout] = useState(false);

  const aboutSections = [
    {
      icon: <FaUser className="about-icon" />,
      title: "Personal Background",
      content: "I am a Xhosa young man, born in Johannesburg braamfisherville, but raised in Mpumalanga where I finished high school at Netherland Park Secondary School. While most of my family is in Eastern Cape, I've developed my own path in the tech world. I'm introverted by nature - not a fan of most social media, though I maintain presence on Twitter and WhatsApp for professional connections. YouTube serves as my learning platform. I'm direct and value honesty, take pride in my work, and thrive on challenges."
    },
    {
      icon: <FaGraduationCap className="about-icon" />,
      title: "Education Journey",
      content: "My coding journey began in 2016 with HTML, but formally started at Tshwane University of Technology (TUT) in 2019. Despite initial hurdles, I completed my National Diploma in record time by February 2023. Currently pursuing Computer Science, I've immersed myself in Python (building models, data analysis), Java (OOP, EJBs), and various other technologies. My academic projects include data scraping, machine learning models, and comprehensive data visualization."
    },
    {
      icon: <FaBriefcase className="about-icon" />,
      title: "Professional Growth",
      content: "Momentum Metropolitan took a chance on me as an RPG intern in 2024, though I had no prior experience. My determination led to a permanent Junior RPG Developer position by 2025. Simultaneously, I completed my Computer Science degree at TUT, again in record time. This dual achievement represents a major milestone in my professional development journey."
    },
    {
      icon: <FaBullseye className="about-icon" />,
      title: "Life Philosophy",
      content: "My purpose centers on growth - both personal and communal. My name reflects my mission to help diverse people gain new perspectives and improve their circumstances. I believe in the transformative power of technology education and aim to make it accessible across all demographics in South Africa."
    }
  ];

  return (
    <div className="section-container">
      <SectionHeader icon={FaUser} title="About Me"
              isOpen={showAbout} onClick={() => setShowAbout(!showAbout)} />
      
      {showAbout && (
        <div className="about-content">
          {aboutSections.map((section, index) => (
            <div key={index} className="about-card">
              <div className="about-card-header">
                {section.icon}
                <h3>{section.title}</h3>
              </div>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default About;