import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';

import Hero1 from '../assets/carousel/hero1.png';
import Hero2 from '../assets/carousel/hero2.png';
import Hero3 from '../assets/carousel/hero3.png';

const images = [Hero1, Hero2, Hero3];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className="carousel-item" key={index}>
            <img src={image} alt={`Slide ${index}`} className="carousel-image" />
          </div>
        ))}
      </div>
      <div className="carousel-arrows">
        <button className="carousel-arrow left" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
