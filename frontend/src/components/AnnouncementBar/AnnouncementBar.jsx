import React from 'react';
import './AnnouncementBar.css';
import smiley from "../../assets/smiley.png";

const AnnouncementBar = () => {
  return (
    <div className="announcement-bar">
      <div className="scroll-text">
        {[...Array(50)].map((_, i) => (
          <a
            key={i}
            href="https://lu.ma/ig51d4z2" 
            className="scroll-item"
            target="_blank" 
            rel="noopener noreferrer" 
          >
            <img src={smiley} alt="smiley" />
            <h2>Elevouth Global Summit 2025.</h2> 
            <p>Reserve your spot today - limited access.</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
