import React, { useState } from 'react';
import { FaBriefcase, FaCalendarAlt, FaServer, FaCode, FaDatabase, FaChartLine, FaChevronDown, FaChevronUp} from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const Experience = () => {
  const [showExperience, setShowExperience] = useState(false);

  const experiences = [
    {
      role: "Junior RPG Developer",
      company: "Momentum Corporate",
      duration: "2025 - Current",
      description: [
        "Develop and maintain AS400/RPG systems using both fixed format and free format RPG",
        "Build, update, and upgrade existing RPG codebase",
        "Work extensively with copy books, display files, physical files, logical files, and printer files",
        "Automate manual processes to improve operational efficiency",
        "Debug and fix issues in existing RPG applications"
      ],
      technologies: ["RPG", "RPG ILE", "AS400", "iSeries", "CL", "Embedded SQL"],
      icon: <FaServer />
    },
    {
      role: "Freelance Software Developer",
      company: "Terra Analytics",
      duration: "Nov 2024 - Apr 2025",
      description: [
        "Developed municipal management software using Blazor and .NET Core 8+",
        "Created data visualization components (Sankey charts, bar graphs, line graphs)",
        "Implemented PDF generation using QuestPDF library",
        "Built APIs for email services and document generation",
        "Deployed applications to IIS environments",
        "Handled large datasets and optimized database queries"
      ],
      technologies: ["Blazor", ".NET 8", "SQL Server", "QuestPDF", "IIS", "C#"],
      icon: <FaChartLine />
    },
    {
      role: "RPG Intern",
      company: "Momentum",
      duration: "2024 (1 year training)",
      description: [
        "Trained on AS400/RPG systems development",
        "Learned RPG fixed format, RPG ILE, and free format RPG",
        "Gained experience with CL programming and iSeries/AS400 platforms",
        "Worked with embedded SQL in RPG applications",
        "Learned module binding and service program creation"
      ],
      technologies: ["RPG", "AS400", "CL", "SQL", "ILE"],
      icon: <FaCode />
    },
    {
      role: "Freelance Software Developer",
      company: "Solar Spectrum",
      duration: "Jun 2022 - Feb 2023",
      description: [
        "First professional experience with Blazor (.NET Core 3)",
        "Implemented form validations and page navigation",
        "Optimized existing codebase for better performance",
        "Created SQL queries and CRUD operations in SSMS",
        "Developed basic data management applications"
      ],
      technologies: ["Blazor", ".NET Core 3", "SQL Server", "C#"],
      icon: <FaDatabase />
    },
    {
      role: "National Diploma Project",
      company: "Tshwane University of Technology",
      duration: "Jul 2022 - Dec 2022",
      description: [
        "Developed Med-Mobi medical chatbot as final project",
        "Primarily responsible for Python backend development",
        "Implemented natural language processing for chatbot interactions",
        "Integrated with database systems for appointment management",
        "Collaborated in a team environment following SDLC"
      ],
      technologies: ["Python", "NLTK", "Firebase", "Chatbot Development"],
      icon: <FaCode />
    },
    {
      role: "Final Year Project",
      company: "Tshwane University of Technology",
      duration: "2024",
      description: [
        "Developed crime prediction system using Python and MERN stack",
        "Web scraped SAPS website for crime statistics and news data",
        "Collected Twitter crime data from authoritative sources",
        "Implemented XGBoost model for crime prediction",
        "Created data visualizations (line charts, pie charts, bar graphs)",
        "Analyzed crime patterns by province, city, and township"
      ],
      technologies: ["Python", "XGBoost", "MERN", "Web Scraping", "Data Visualization"],
      icon: <FaChartLine />
    }
  ];

  return (
    <div className="section-container">
      <SectionHeader 
        icon={FaBriefcase}
        title="Professional Experience"
        isOpen={showExperience}
        onClick={() => setShowExperience(!showExperience)}
      />
      
      
      {showExperience && (
        <div className="content">
          <div className="experience-container">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <span className="experience-icon">{exp.icon}</span>
                  <div>
                    <h3>{exp.role} <span className="company">@ {exp.company}</span></h3>
                    <p className="duration">
                      <FaCalendarAlt className="duration-icon" />
                      <span>{exp.duration}</span>
                    </p>
                  </div>
                </div>
                
                <ul className="responsibilities">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                
                <div className="technologies">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
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

export default Experience;