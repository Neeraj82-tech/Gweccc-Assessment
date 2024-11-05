import React from 'react';
import aniVideo from '../assets/aniVideo1.mp4';
import './DescriptionSection.css';

function DescriptionSection() {
  return (
    <section id='about' className="description-section">
      <div className="video-container">
        <video src={aniVideo} autoPlay loop muted />
      </div>
      <div className="description-content">
        <h2>About GWECCC 2025</h2>
        <p>
          The Global Water, Energy, and Climate Change Congress (GWECCC) 2025
          brings together world leaders, scientists, and innovators to address
          the most pressing environmental issues of our time. Join us to
          explore sustainable solutions, breakthrough technologies, and global
          collaborations aimed at protecting our planet for future generations.
        </p>
      </div>
    </section>
  );
}

export default DescriptionSection;
