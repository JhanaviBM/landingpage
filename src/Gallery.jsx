import React, { useEffect, useState } from 'react';
import './gallery.css';

const images = [
  "../images/gallery1_upscayl_4x_upscayl-standard-4x.png",
  "../images/gallery2_upscayl_5x_upscayl-standard-4x.png",
  "../images/gallery3_upscayl_5x_upscayl-standard-4x.png",
  "../images/gallery4_upscayl_5x_upscayl-standard-4x.png",
  "../images/gallery5_upscayl_5x_upscayl-standard-4x.png"
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const handleManualChange = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section id="gallery" className="gallery-section">
      <h2 className="gallery-heading">Our Gallery</h2>
      <div className="gallery-container" onClick={handleManualChange}>
        <img src={images[currentIndex]} alt={`gallery${currentIndex + 1}`} className="gallery-image" />
      </div>
    </section>
  );
};

export default Gallery;
