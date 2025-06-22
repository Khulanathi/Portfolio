import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { FaCode, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Skills = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  const skillCategories = [
    {
      name: "Professional Expertise",
      skills: [
        {
          name: "RPG (AS400/iSeries)",
          description: "Developed production applications for financial systems at Momentum Corporate. Skilled in RPG ILE (both fixed and free format), CL programming, embedded SQL, and working with display files, printer files, and database files.",
          proficiency: 4.5,
          projects: ["Momentum Corporate Systems"],
          icon: "rpg"
        },
        {
          name: "Blazor (.NET)",
          description: "Built municipal management systems with complex data visualizations, PDF generation (QuestPDF), and API integrations. Experienced with Blazor WebAssembly/Server (.NET Core 3 to .NET 8+), form validations, and IIS deployment.",
          proficiency: 4,
          projects: ["Terra Analytics Municipal System"],
          icon: "blazor"
        }
      ]
    },
    {
      name: "Strong Knowledge",
      skills: [
        {
          name: "Python",
          description: "Developed a medical chatbot with NLTK and Firebase integration. Experienced in web scraping, data analysis (Pandas), and building automation scripts. Created functions for booking, cancelling, and displaying appointments with complex date/time handling.",
          proficiency: 4,
          projects: ["Med-Mobi Chatbot", "Crime Prediction System"],
          icon: "python"
        },
        {
          name: "Java",
          description: "Formally trained in Java OOP concepts, EJB, and enterprise patterns. Currently expanding knowledge through advanced coursework and personal projects.",
          proficiency: 3,
          projects: ["Academic Projects"],
          icon: "java"
        }
      ]
    },
    {
      name: "Working Knowledge",
      skills: [
        {
          name: "JavaScript/React",
          description: "Building proficiency in modern React development. Familiar with component architecture, state management, and React Native concepts through collaborative projects.",
          proficiency: 3,
          projects: ["This Portfolio", "Med-Mobi Frontend Concepts"],
          icon: "react"
        },
        {
          name: "SQL/PL-SQL",
          description: "Experienced with database design, complex queries, stored procedures, and working with both traditional RDBMS and Firebase realtime databases.",
          proficiency: 3.5,
          projects: ["Multiple backend systems"],
          icon: "database"
        }
      ]
    },
    {
      name: "Familiar With",
      skills: [
        {
          name: "C++",
          description: "Foundational language that shaped my understanding of programming concepts. Comfortable with OOP, memory management, and algorithmic thinking.",
          proficiency: 3,
          projects: ["Academic Projects"],
          icon: "cplusplus"
        },
        {
          name: "HTML/CSS",
          description: "Built responsive interfaces including this portfolio. Strong understanding of semantic HTML and modern CSS techniques.",
          proficiency: 4,
          projects: ["This Portfolio", "Various web projects"],
          icon: "web"
        }
      ]
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="star full-star" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="star half-star" />);
      } else {
        stars.push(<FaRegStar key={i} className="star empty-star" />);
      }
    }
    
    return stars;
  };

  return (
    <div className="section-container">
      <SectionHeader 
        icon={FaCode} 
        title="Technical Skills & Proficiency"
        isOpen={showSkills} 
        onClick={() => setShowSkills(!showSkills)} 
      />

      {showSkills && (
        <div className="skills-content">
          <p className="skills-intro">
            I've organized my technical skills by proficiency level and professional usage.
            Please Click on any of the skills to see detailed information about my experience with it.
          </p>
          
          <div className="skills-categories">
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex} className="skill-category">
                <h3 className="category-title">{category.name}</h3>
                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className={`skill-card ${activeSkill === `${catIndex}-${skillIndex}` ? 'active' : ''}`}
                      onClick={() => setActiveSkill(`${catIndex}-${skillIndex}`)}
                    >
                      <div className="skill-header">
                        <div className={`skill-icon ${skill.icon}`}></div>
                        <h4>{skill.name}</h4>
                        <div className="skill-rating">
                          {renderStars(skill.proficiency)}
                          <span>({skill.proficiency}/5)</span>
                        </div>
                      </div>
                      
                      {activeSkill === `${catIndex}-${skillIndex}` && (
                        <div className="skill-details">
                          <p>{skill.description}</p>
                          {skill.projects && (
                            <div className="skill-projects">
                              <h5>Key Projects:</h5>
                              <ul>
                                {skill.projects.map((project, i) => (
                                  <li key={i}>{project}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;