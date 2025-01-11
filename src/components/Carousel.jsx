import { useState } from "react";
import propType from "prop-types";

import imageOne from "../../src/assets/service/image-one.png";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide functionality
  // React.useEffect(() => {
  //   const slideInterval = setInterval(nextSlide, interval);
  //   return () => clearInterval(slideInterval);
  // }, [currentSlide, interval]);

  return (
    <div className="carousel relative overflow-hidden w-full">
      {/* Slide container */}
      <div
        className="slides flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide min-w-full flex-shrink-0"
            style={{ backgroundImage: `url(${slide})`, backgroundSize: "cover" }}
          >
            {/* Customize each slide content */}
            <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-40 text-white">
              <img className="h-80 w-80" src={imageOne} alt="" />
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        onClick={nextSlide}
      >
        &gt;
      </button>

      {/* Indicators */}
      <div className="indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  slides: propType.array.isRequired,
  // interval: propType.number,
};

export default Carousel;