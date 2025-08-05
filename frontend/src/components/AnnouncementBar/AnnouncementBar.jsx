import React from 'react';
import './AnnouncementBar.css';
import smiley from  "../../assets/smiley.png";

const AnnouncementBar = () => {
  return (
    <div className="announcement-bar">
      <div className="scroll-text">
        {[...Array(50)].map((_, i) => (
          <div className="scroll-item" key={i}>
            <img src={smiley} alt="smiley" />
            <h2>Elevouth Global Summit 2025.</h2> 
            <p>Reserve your spot today - limited access.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
