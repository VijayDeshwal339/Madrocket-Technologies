import React, { useState, useEffect } from 'react';
import Annual from '../assests/Annual.jpg';
import Science from '../assests/science2.jpg';
import Culture from '../assests/Culture.jpg';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: Annual, caption: 'Annual Day Celebration' },
    { image: Culture, caption: 'Cultural Fest' },
    { image: Science, caption: 'Science Exhibition' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div id="default-carousel" className="relative w-full">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.image} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-xl md:text-3xl font-bold">{slide.caption}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
            aria-current={currentSlide === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
