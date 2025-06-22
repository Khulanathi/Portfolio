import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { FaCertificate, FaTimes, FaChevronUp } from 'react-icons/fa';

const Certificates = () => {
  const [showCertificates, setShowCertificates] = useState(false);
  const [expandedCertificate, setExpandedCertificate] = useState(null);
   const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      title: "Advance Diploma in Computer Science",
      description: "I obtained this certificate by attending two years at Tshwane University of Technology, learned all about data structures in Java,such as trees, stacks and quesues, and the JEE framework in the software industry. Learned python and essential topics of computer science are built, i.e. design of programming languages and compilers, data sstructures, algorithms, and natural language processing. ",
      image: process.env.PUBLIC_URL + "/Documents/degree.png"
    },
    {
      title: "RPG ILE AS400",
      description: "I obtained this certificate by attending an internship at Momentum Insurance for a year whereby I was exposed to AS400, Fixed-Format Rpg, Free-Format Rpg, Printer files, Display files, Command files,  embedded sql rpgle files, binding programs, external programs, copy books, and many more linking with the as400, vs code, db2 Ibm i.",
      image: process.env.PUBLIC_URL + "/Documents/Rpg.jpg"
    },
    {
      title: "Peer Educator: Chairperson",
      description: "I obtained this certificate by exhibiting leadership, trustworthiness and confidentiality. I got nominated and voted for to be chairperson whereby I organized campaigns and my group members, assisted the nurse with front desk admin and minimal nurse applications such as taking client blood pressure, weight and temperature.",
      image: process.env.PUBLIC_URL + "/Documents/Chairperson.png"
    },
    {
      title: "Level 1: First Aid & Emergency Care Skills Program",
      description: "I obtained this certificate through learning and practically doing exercises like performing CPR, practicing care to exercise during an emergency or life threatening situations, and how to get consent to perform any medical care in any situation.",
      image: process.env.PUBLIC_URL + "/Documents/First_Aid_Certificate.png"
    },
    {
      title: "Sanca Witbank: Peer Education Program",
      description: "I obtained this certificate through learning about drugs and substance abuse all the different types of drugs their effects, why they are called drugs and how addiction starts. Briefly got tested on the knowledge we acquired and was informed on what to do if someone wants to stop his/her drug usage.",
      image: process.env.PUBLIC_URL + "/Documents/SANCA.png"
    }
  ];

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="section-container">
      <SectionHeader icon={FaCertificate} title="Certificates & Achievements"
              isOpen={showCertificates} onClick={() => setShowCertificates(!showCertificates)} />
      
       {showCertificates && (
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <div className="certificate-content">
                <div 
                  className="certificate-image-container"
                  onClick={() => openImage(cert.image)}
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="certificate-thumbnail"
                    loading="lazy"
                  />
                  <div className="view-full">Click to view full size</div>
                </div>
                <div className="certificate-details">
                  <h3>{cert.title}</h3>
                  <p>{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedImage && (
        <div className="image-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={closeImage}>
              <FaTimes />
            </button>
            <img 
              src={selectedImage} 
              alt="Full size certificate" 
              className="full-certificate-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;