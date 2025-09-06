import { useState, useEffect, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Testimonial1 from '../assets/images/tesimonials/m1.jpg';
import Testimonial2 from '../assets/images/tesimonials/w2.jpg';
import Testimonial3 from '../assets/images/tesimonials/m3.jpg';
import Testimonial4 from '../assets/images/tesimonials/w1.jpg';

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: Testimonial1,
      name: 'Rajesh Sharma',
      userType : 'Property Developer',
      description: `"The marble quality from Shree Rambhakt Group is exceptional. Their stones have become the highlight of our luxury property development projects."`,
    },
    {
      id: 2,
      image: Testimonial2,
      name: 'Priya Patel',
      userType : 'Restaurant Owner',
      description: `"Their restaurant management expertise has transformed our dining establishment. The attention to detail and quality of service is unmatched."`,
    },
    {
      id: 3,
      image: Testimonial3,
      name: 'Amit Singh',
      userType : 'Home Owner',
      description: `"We purchased our dream home from Shree Rambhakt's real estate division. The quality of construction and after-sales service has been excellent."`,
    },
    {
      id: 4,
      image: Testimonial4,
      name: 'Sunita Gupta',
      userType : 'Parent',
      description: `"The educational initiatives by their NGO have made a significant difference in our community. My children have benefited immensely from their programs."`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const carouselRef = useRef(null);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => setCurrentIndex(index);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Touch event handlers
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;

    if (distance > 50) goToNext();      // swipe left
    if (distance < -50) goToPrev();     // swipe right

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div className="relative md:max-w-5xl mx-auto overflow-hidden bg-slate-300/10 rounded-xl px-4 py-3 md:py-4 md:px-10" ref={carouselRef} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>

      {/* Slides */}
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full p-8 md:p-20 space-y-8">
              <p className='text-white text-center text-2xl italic'>{slide.description}</p>
              <div className="flex gap-5 items-center">
                  <img src={slide.image} alt={slide.title} className="rounded-full h-[70px]" />
                  <div className="flex flex-col">
                    <p className='text-white'>{slide.name}</p>
                    <p className='text-gray-500'>{slide.userType}</p>
                  </div>
              </div>
          </div>
          ))}
      </div>

      {/* Previous Button */}
      <button onClick={goToPrev} className="hidden lg:flex absolute top-1/2 left-6 transform -translate-y-1/2 bg-gray-300/30 hover:bg-gray-300/50 cursor-pointer rounded-[100%] bg-opacity-50 hover:bg-opacity-80 text-white text-[20px] p-5"><IoIosArrowBack /></button>

      {/* Next Button */}
      <button onClick={goToNext} className="hidden lg:flex absolute top-1/2 right-6 transform -translate-y-1/2 bg-gray-300/30 hover:bg-gray-300/50 cursor-pointer rounded-[100%] bg-opacity-50 hover:bg-opacity-80 text-white text-[20px] p-5"><IoIosArrowForward /></button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 duration-400 rounded-full hover:cursor-pointer ${ currentIndex === index ? 'bg-orange-500 w-[20px]' : 'bg-gray-400' }`}></button>
          ))}
      </div>
    </div>
  );
};

export default Carousel;