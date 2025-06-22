import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const SectionHeader = ({ icon: Icon, title, isOpen, onClick }) => {
  return (
    <div className="read section-header" onClick={onClick}>
      <div className="header-content">
        <Icon className="header-icon" />
        <span>{title}</span>
      </div>
      <span className="label">
        {isOpen ? (
          <>
            <FaChevronUp className="chevron" />
          </>
        ) : (
          <>
            <FaChevronDown className="chevron" />
          </>
        )}
      </span>
    </div>
  );
};

export default SectionHeader;