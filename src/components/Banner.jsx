import React, { useState, useEffect } from 'react';
import './Banner.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';
import img11 from '../assets/img11.jpg';
import img12 from '../assets/img12.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

function Banner() {
  const [startIndex, setStartIndex] = useState(0);
  const imagesPerBatch = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + imagesPerBatch * 2) % images.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  // Helper function to get images for a specific row
  const getRowImages = (offset) => {
    return Array.from({ length: imagesPerBatch }, (_, i) => images[(startIndex + offset + i) % images.length]);
  };

  const row1Images = getRowImages(0); // First 4 images for the first row
  const row2Images = getRowImages(imagesPerBatch); // Next 4 images for the second row

  return (
    <section className="banner">
      <div className="card-container">
        {[row1Images, row2Images].map((rowImages, rowIndex) => (
          <div key={rowIndex} className="row">
            {rowImages.map((image, index) => (
              <div key={index} className="card">
                <div className="card-inner">
                  <div className="card-front">
                    <img src={image} alt={`Event Slide ${index + 1}`} className="card-image" />
                  </div>
                  <div className="card-back">
                    <img src={image} alt={`Event Slide ${index + 1}`} className="card-image" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Banner;

